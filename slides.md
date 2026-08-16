<!-- ============================================================
     STATE OF OPENHISTORICALMAP · SotM 2026
     The whole talk lives in this file.

     How to write a slide:
       ---           separates one slide from the next
       ###           kicker (the short pink line on top)
       #  / ##       big title / medium title
       text          paragraph
       - item        fact card (slides with class "facts")
       > quote       text box (photo caption or quote)
       `text`        pill / tag
       table         grid of images or people

     The first line of every slide (the one starting with ".slide:")
     sets the background and the slide type. Don't touch the text there.
     ============================================================ -->

<!-- .slide: class="md cover" data-background-color="#FFFFFF" data-background-image="assets/cover-paris-1900.jpg" data-background-size="cover" data-background-opacity="0.4" -->

### The map with a time axis

# State of<br>OpenHistoricalMap

Mapping the world's history, openly.

State of the Map 2026 · Friday, August 28 · Paris, France

---

<!-- .slide: class="md speakers" data-background-color="#FFFFFF" -->

### Who we are

| ![Minh's GitHub avatar](assets/github-1ec5.jpg) | ![Ruben's GitHub avatar](assets/github-Rub21.jpg) |
| --- | --- |
| **Minh · 1ec5** | **Ruben · Rub21** |
| Advisor | Infrastructure Engineer |

---

<!-- .slide: class="md hero" data-background-color="#FFFFFF" -->

### Everything changes

<img src="assets/ohm/paris-expositions.gif" data-poster="assets/posters/paris-expositions.png" alt="The Champ de Mars in Paris: whole exposition cities appear in 1867, 1889 and 1900, and disappear again">

<p class="credit">mapped by <b>jeffmeyer</b> · <b>Bookmark</b> · Alphathon · chabe01 <span>and 7 more</span></p>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The Champ de Mars in 1867, 1868, 1889 and 1900: whole exposition cities appear and disappear](assets/champ-years.png)

---

<!-- .slide: class="md equation" data-background-color="#FFFFFF" -->

## OpenHistoricalMap **=** OpenStreetMap `+ start_date` `[ + end_date ]`



![The map plane gains a time axis](assets/time-axis.svg)

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![What the community has mapped: 3.6M dated elements, 1.1 million km of roads, 760k buildings, ~1 million km of railways, 192k boundaries and 685k features that are gone](assets/stats-cards.png)

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The OpenHistoricalMap website showing Paris in 1926 with the time slider](assets/tour/01-website.png)

`openhistoricalmap.org`

---

<!-- .slide: class="md bleed" data-background-color="#FFFFFF" data-background-image="assets/ohm/paris-city.gif" data-poster="assets/posters/paris-city.png" data-background-size="contain" data-background-repeat="no-repeat" -->

> **Paris and its suburbs · 1750 → 2026**
> <span class="by">thanks to hangukhistory · garageman · jeffmeyer and 21 more</span>

---

<!-- .slide: class="md bleed" data-background-color="#FFFFFF" data-background-image="assets/ohm/paris-cite.gif" data-poster="assets/posters/paris-cite.png" data-background-size="contain" data-background-repeat="no-repeat" -->

> **The heart of Paris · Île de la Cité · 1750 → 2026**
> <span class="by">thanks to hangukhistory · garageman · yanisperron · mt_CSC and 10 more</span>

---

<!-- .slide: class="md bleed" data-background-color="#FFFFFF" data-background-image="assets/ohm/world-0-2026.gif" data-poster="assets/posters/world-0-2026.png" data-background-size="contain" data-background-repeat="no-repeat" -->

> **The world · 0 → 2026**
> <span class="by">mapped by the OpenHistoricalMap community</span>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The OpenHistoricalMap log in page, with OpenStreetMap and Wikimedia as third-party options](assets/ohm/ohm-login.png)

`log in with your OpenStreetMap, Wikimedia or OpenHistoricalMap account`

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Editing Harpo Studios in Chicago with the iD editor, over aerial imagery](assets/ohm/id-harpo-studios.png)

`iD editor`

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The tags of Harpo Studios: start_date 1990, end_date 2012, with sources](assets/ohm/harpo-studios-tags.png)

`start_date 1990 · end_date 2012`

---

<!-- .slide: class="md" data-background-color="#FFFFFF" -->

### The ecosystem

# OpenHistoricalMap<br>downstream apps

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Paris in 1900 rendered from OpenHistoricalMap vector tiles](assets/tour/08-vtiles.png)

<a href="https://vtiles.openhistoricalmap.org" target="_blank" rel="noopener"><code>vtiles.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Searching historical places with the OpenHistoricalMap Nominatim instance](assets/tour/12-nominatim.png)

<a href="https://nominatim.openhistoricalmap.org" target="_blank" rel="noopener"><code>nominatim.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Reviewing changesets in OSMCha for OpenHistoricalMap](assets/tour/14-osmcha.png)

<a href="https://osmcha.openhistoricalmap.org" target="_blank" rel="noopener"><code>osmcha.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![An Overpass turbo query for dated buildings in Paris](assets/tour/03-turbo.png)

<a href="https://overpass-turbo.openhistoricalmap.org" target="_blank" rel="noopener"><code>overpass-turbo.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The same data queried in Overpass Ultra](assets/tour/13-overpass-ultra.png)

<a href="https://ohm.overpass-ultra.us" target="_blank" rel="noopener"><code>ohm.overpass-ultra.us</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![A SPARQL query on QLever returning three versions of the Place Dauphine](assets/tour/06-qlever.png)

<a href="https://qlever.dev/ohm-planet" target="_blank" rel="noopener"><code>qlever.dev/ohm-planet</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The OpenHistoricalMap planet dump listing](assets/tour/11-planet.png)

<a href="https://planet.openhistoricalmap.org" target="_blank" rel="noopener"><code>planet.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Tag statistics for OpenHistoricalMap in taginfo](assets/ohm/image26.png)

<a href="https://taginfo.openhistoricalmap.org" target="_blank" rel="noopener"><code>taginfo.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The OpenHistoricalMap tasking manager](assets/ohm/image23.png)

<a href="https://tasks.openhistoricalmap.org" target="_blank" rel="noopener"><code>tasks.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![The OpenHistoricalMap quality and coverage dashboard](assets/tour/10-planetstats.png)

<a href="https://planet-stats.openhistoricalmap.org" target="_blank" rel="noopener"><code>planet-stats.openhistoricalmap.org</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![A boundary viewer showing Europe in 1900, built on OpenHistoricalMap](assets/tour/09-boundaries.png)

<a href="https://danvk.org/ohm" target="_blank" rel="noopener"><code>danvk.org/ohm</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Historical railways rendered in OpenRailwayMap](assets/tour/15-openrailwaymap.png)

<a href="https://openrailwaymap.app" target="_blank" rel="noopener"><code>OpenRailwayMap.app</code></a>

---

<!-- .slide: class="md shot" data-background-color="#FFFFFF" -->

![Query examples on the OpenStreetMap wiki](assets/tour/05-wiki.png)

<a href="https://osm.wiki/OHM/Overpass" target="_blank" rel="noopener"><code>osm.wiki/OHM/Overpass</code></a>

---

<!-- .slide: class="md facts g2" data-background-color="#FFFFFF" -->

## By the numbers

- **2,177**
  **Mappers: all volunteers**
- **35**
  **We need more donations!**
- **1**
  **Paid developer**
  **We need maintainers!**
- **17M**
  **Requests per day**
  **(We don't need more scrapers!)**

---

<!-- .slide: class="md imgrid" data-background-color="#FFFFFF" -->

### Beyond the map

## Making history together

| ![OldInsuranceMaps.net](assets/partners/oldinsurancemaps.png) | ![Yesterdays](assets/partners/yesterdays.png) | ![MapReader](assets/partners/mapreader.png) | <span style="display:block;text-align:center;font-size:5em;line-height:1">🎓</span> |
| --- | --- | --- | --- |
| **oldinsurancemaps.net** · scanned city maps for insurance appraisal | **Yesterdays** · georeferencing old photos | **MapReader** · computer vision on scanned maps | **Societies & classrooms** · universities and hack-a-thons |

---

<!-- .slide: class="md cols" data-background-color="#FFFFFF" -->

# Past · Present · Future

### Wants

- → **Background/georeferenced images**
- → **Easier OSM→OHM transfers**
- → **More efficient formats and APIs**
- → **Historical routing**

### Needs

- 💸 **Funding** · servers, tiles and tools cost real money
- 🛠️ **Developers** · many forks to maintain
- 🎨 **Designers** · novel cartographic challenges
- 🤝 **Partners** · universities, archives, museums

---

<!-- .slide: class="md bleed" data-background-color="#16120D" data-background-image="assets/photos/pont-sully.jpg" data-background-size="cover" -->

> **Pont Sully · Paris**
> <span class="by">1874 · 1876 — the dates are already carved in the city</span>

---

<!-- .slide: class="md bleed" data-background-color="#16120D" data-background-image="assets/photos/sidewalk-stamp.jpg" data-background-size="cover" -->

> **A sidewalk, stamped**
> <span class="by">8-12-21 — history is under your feet, waiting to be mapped</span>

---

<!-- .slide: class="md" data-background-color="#FFFFFF" -->

### Your turn

# History needs mappers, and supporters

**Mappers:** map what already happened.
**Organizations:** partner with us, or fund us.

`your local history`  `your code`  `your archive`  `your funding`

---

<!-- .slide: class="md closing" data-background-color="#FFFFFF" -->

### Thank you · Happy mapping!

# Keep history alive

<div class="qr-row"><div class="qr-item"><div class="qr"><div id="qr"></div></div><span class="qr-label">The map<br>openhistoricalmap.org</span></div><div class="qr-item"><div class="qr hl"><div id="qr-donate"></div></div><span class="qr-label"><b>Donate</b> · via OSM US<br>we run on donations</span></div><div class="qr-item"><div class="qr"><div id="qr-deck"></div></div><span class="qr-label">These slides<br>sotm-ohm-2026.pages.dev</span></div></div>

Minh Nguyễn · **1ec5** · Ruben Lopez Mendoza · **Rub21**
