import { createRequire } from 'node:module';
// playwright-core puede estar instalado aquí o en otro proyecto: PLAYWRIGHT_DIR lo apunta
const req = createRequire(process.env.PLAYWRIGHT_DIR
  ? process.env.PLAYWRIGHT_DIR + '/package.json'
  : import.meta.url);
const { chromium } = req('playwright-core');
import fs from 'node:fs';

const b = await chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; }' });
await p.goto('http://localhost:8850/#/0', { waitUntil: 'networkidle' });
await p.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; }' });
await p.waitForTimeout(3000);

const total = await p.evaluate(() => Reveal.getTotalSlides());
const slides = [];
for (let i = 0; i < total; i++) {
  await p.evaluate(n => Reveal.slide(n), i);
  await p.waitForTimeout(900);
  const data = await p.evaluate(() => {
    const sec = document.querySelector('.reveal .slides section.present');
    const slidesEl = document.querySelector('.reveal .slides');
    const m = new DOMMatrix(getComputedStyle(slidesEl).transform);
    const scale = m.a || 1;
    const sr = sec.getBoundingClientRect();
    const W = sec.offsetWidth, H = sec.offsetHeight;

    const local = (r) => ({
      x: (r.left - sr.left) / scale,
      y: (r.top - sr.top) / scale,
      w: r.width / scale,
      h: r.height / scale,
    });

    const BLOCK = 'h1,h2,h3,p,li,td,th,blockquote,figcaption,span.qr-label,code';
    const items = [];

    // fondo de la slide: color e imagen (los bleed llevan el gif ahí)
    const bg = document.querySelector('.reveal .backgrounds .slide-background.present');
    let bgImage = null;
    if (bg) {
      const inner = bg.querySelector('.slide-background-content') || bg;
      const bi = getComputedStyle(inner).backgroundImage;
      const mm = bi && bi.match(/url\("?(.+?)"?\)/);
      if (mm) bgImage = mm[1];
    }

    // cajas con fondo o borde propio (pastillas, tarjetas de cifras, pies de foto)
    for (const el of sec.querySelectorAll('*')) {
      if (el.tagName === 'IMG') continue;
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor || '';
      const mb = bg.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
      const alpha = mb ? (mb[4] === undefined ? 1 : parseFloat(mb[4])) : 0;
      const hasBorder = parseFloat(cs.borderTopWidth) > 0 || parseFloat(cs.borderLeftWidth) > 0;
      if (alpha < 0.02 && !hasBorder) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8) continue;
      items.push({
        kind: 'box', color: bg, alpha,
        radius: parseFloat(cs.borderTopLeftRadius) || 0,
        border: hasBorder ? cs.borderTopColor : null,
        borderWidth: hasBorder ? parseFloat(cs.borderTopWidth) : 0,
        ...local(r),
      });
    }

    for (const el of sec.querySelectorAll('img')) {
      const r = el.getBoundingClientRect();
      if (!r.width) continue;
      items.push({ kind: 'img', src: el.getAttribute('src'), ...local(r) });
    }

    for (const el of sec.querySelectorAll(BLOCK)) {
      if (el.closest('blockquote') && el.tagName === 'P') { /* se toma el p suelto */ }
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      if (!el.innerText.trim()) continue;
      const BLOCK_NO_CODE = BLOCK.replace(',code', '');
      if (el.tagName !== 'CODE' && el.querySelector(BLOCK_NO_CODE)) continue;   // solo hojas
      const cs = getComputedStyle(el);
      const runs = [];
      const walk = (node, inherited) => {
        if (node.nodeType === 3) {
          const t = node.textContent;
          if (t) runs.push({ text: t, ...inherited });
          return;
        }
        if (node.nodeType !== 1) return;
        const s = getComputedStyle(node);
        const style = {
          size: parseFloat(s.fontSize),
          family: s.fontFamily,
          weight: parseInt(s.fontWeight, 10) || 400,
          italic: s.fontStyle === 'italic',
          color: s.color,
          transform: s.textTransform,
        };
        if (node.tagName === 'BR') { runs.push({ text: '\n', ...style }); return; }
        if (node.tagName === 'CODE') { runs.push({ text: ' ', ...style }); return; }  // va como item aparte
        for (const c of node.childNodes) walk(c, style);
      };
      const base = {
        size: parseFloat(cs.fontSize), family: cs.fontFamily,
        weight: parseInt(cs.fontWeight, 10) || 400, italic: cs.fontStyle === 'italic',
        color: cs.color, transform: cs.textTransform,
      };
      for (const c of el.childNodes) walk(c, base);
      if (!runs.length) continue;
      items.push({
        kind: 'text', tag: el.tagName.toLowerCase(), runs,
        align: cs.textAlign, lineHeight: parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.3,
        ...local(r),
      });
    }
    return { W, H, bgImage, items, bgColor: getComputedStyle(bg || sec).backgroundColor };
  });
  data.index = i;
  slides.push(data);
}
fs.writeFileSync(process.env.LAYOUT_OUT || new URL('layout.json', import.meta.url), JSON.stringify(slides, null, 1));
console.log('slides measured:', slides.length);
await b.close();
