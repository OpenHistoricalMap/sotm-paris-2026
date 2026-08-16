# State of OpenHistoricalMap — SotM 2026

Slides for [SotM 2026 session GJWH7J](https://2026.stateofthemap.org/sessions/GJWH7J/): *State of OpenHistoricalMap: mapping the world's history, openly*. Friday, August 28, 2026 · 20 min + Q&A.

## Editing the slides

All the content lives in `slides.md`. You do not need to touch `index.html` or
`theme.css` to change the talk — `index.html` only loads the deck, and
`theme.css` turns the markdown into the deck's look.

Slides are separated by a line with `---`. Each slide starts with a comment
that sets its background and its type:

```markdown
<!-- .slide: class="md facts g3" data-background-color="#F1E7D4" -->

### Mapped, layer by layer

## What's in the map

- **192K**
  **🏛️ Boundaries**
  Empires to city districts.

3.6M dated features · average mapped year 1960

Note:
Speaker notes. Press S during the talk to read them.
```

What the markdown becomes:

| You write | You get |
| --- | --- |
| `###` | kicker (the short pink line on top) |
| `#` / `##` | big title / medium title |
| plain text | paragraph |
| `*italic*`, `**bold**`, `[link](url)` | same as any markdown |
| a paragraph right after a list or a table | small note at the foot of the slide |
| `` `text` `` | pill / tag |
| `- item` | data card, on slides with `facts` |
| a table | image grid (`imgrid`) or the two speakers (`speakers`) |
| `> quote` | photo caption (`bleed`) or the big quote (`quote`) |
| `Note:` | speaker notes |

Every slide needs `md` in its `class` — that is what turns the markdown into
the deck's look. Other words you can add to `class`: `facts g2` / `facts g3` (data cards),
`imgrid` (three images with captions), `bleed` (full-screen image with a
caption), `quote`, `cols` (two columns), `cover`, `speakers`, `closing`,
`equation`. Add `dark` on slides with a dark background. The entrance
animation is applied on its own, block by block — nothing to write.

Full-screen image slides carry the image in the slide comment:
`data-background-image="assets/mundo.gif"`. If the image is a GIF, add
`data-poster="assets/posters/name.png"` too: the PDF export freezes GIFs on
their first frame, so it swaps in that PNG instead.

Raw HTML still works inside the markdown when you need it — the QR containers
on the last slide are written that way. Drawings live in `assets/` as `.svg`
files and are used like any other image.

## Preview

The deck reads `slides.md` over HTTP, so open it through a local server, not
by double-clicking the file:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000. Press **S** for speaker notes, **Esc** for
the slide overview. For the PDF, open http://localhost:8000/?print-pdf and
print to PDF from the browser.

## The PDF

The deck has a **↓ PDF** button in the bottom-left corner. It points at
`sotm-ohm-2026.pdf`, which the deploy workflow builds on every push: decktape
walks the 19 slides, and ghostscript compresses the result from about 23 MB
down to 2 MB. The file is not in git — it only exists on the deployed site, so
the button 404s when you run the deck locally.

To build it on your machine:

```bash
python3 -m http.server 8000 &
npx decktape reveal --size 1280x720 --pause 1200 "http://localhost:8000/?poster" sotm-ohm-2026.pdf
```

`?poster` swaps the GIFs for a still frame and hides the download button, the
same thing `?print-pdf` does when you print from the browser.
