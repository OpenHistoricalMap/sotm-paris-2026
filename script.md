# Speaker script · slides 1 to 13

Ruben opens (slides 1–9), Minh takes over at the editors (slides 9–13).
Roughly 12 minutes of the 20. Say it in your own words — this is the
line of thought, not a text to read out loud.

---

## Slide 1 · Cover — "State of OpenHistoricalMap"

*(Hold this slide while people come in. Start when the room is quiet.)*

> Good morning, everyone. Thanks for coming.
>
> This talk is called State of OpenHistoricalMap. We have twenty minutes to
> show you what this project is, what the community has mapped so far, and
> what we need to keep it alive.
>
> If you already know OpenStreetMap, you will understand OpenHistoricalMap in
> about thirty seconds. That is the next slide.

⏱ ~30 s

---

## Slide 2 · Who we are

> First, who we are. I am Ruben, Rub21 on OpenStreetMap. I m a a mapper in OSM since 2011 I work on 
> infrastructure for OpenHistoricalMap  — the servers, the tiles, the
> tools around the map.
>  and I also work OSM fundation in the project GPS Traces modenizatios

> And this is Minh, 1ec5, Advisor en OHM. He will take the second half of the talk.

⏱ ~40 s

---

## Slide 3 · The hook — "A map shows you today. Where is yesterday?"

*(Let the animation run. Don't talk over the first loop, let people watch it.)*

> This is the Champ de Mars, in Paris. Ten minutes walking from here. The
> Eiffel Tower is there today.
>
> In less than a hundred years, this place changed many times.
>
> Watch 1867. A whole city appears here — six hundred and seventy one
> buildings, for the world fair. One year later, all of it is gone.
>
> In 1889 they do it again, and that is when they build the Eiffel Tower. In
> 1900, one more time, bigger, on both sides of the river.
>
> A normal map can only show you one of these moments — today. So my question
> is: where is yesterday?
>
> That is what OpenHistoricalMap is for.

⏱ ~1 min · **Pause after the question before you click.**

---

## Slide 4 · The equation — OHM = OSM + start_date

> To undertan wahs is OHM , is easy in jus one equcations 
>
> OpenHistoricalMap is OpenStreetMap plus a start date, and an end date when
> the feature is gone.
>
> Same data model, same tags, same editors, same API. The only real difference
> is that every object carries when it existed. That gives the map a fourth
> dimension: time.
>

⏱ ~50 s

---

## Slide 5 · Statistics

*(Don't read the cards, people can read them. Point at two numbers, no more.)*

> This is what the community has mapped.
>
> Three point six million objects have a date. Each one knows when it was
> there.
>
> Roads, buildings, railways, borders. The same things you map in
> OpenStreetMap, with one extra field.
>
> Now look at the last card. Six hundred and eighty five thousand have an end
> date. One in five. They were there, and then they were gone. A normal map
> does not keep those.
>
> Some cities are mapped street by street. Others are still empty. Maybe
> yours.

⏱ ~40 s

---

## Slide 6 · The world through time

*(Say very little. Let the animation run at least one full loop.)*

> This is the whole world with the time slider running.
>
> Borders appear, move, and disappear. Empires grow and break apart. This is
> not a picture of the past — it is the database being queried year by year.

⏱ ~40 s

---

## Slide 7 · Paris · 1750 → 2026

*(Full-screen animation. Let it run, say little.)*

> Here is Paris, growing beyond its old walls. You can see the new boundaries
> appearing as the city takes in the villages around it. In the next slide, the
> same city up close: new roads, new buildings.

⏱ ~40 s

---

## Slide 8 · Île de la Cité · 1750 → 2026

> And here is the city of Paris up close: new roads and new buildings
> appearing, old blocks going away, this is also no just amiage it si a real ventos dat ain database.

⏱ ~40 s

---

## Slide 9 · How to map · *(handover to Minh)*

> So how do you actually add your city to this?
>
> With the same tools you already use. iD in the browser, JOSM on the desktop
> for tracing old scanned maps, and Vespucci on Android. One account, one
> dataset, three editors.
>
> From here Minh takes you through the tools — one screen each, all of them
> showing Paris.

⏱ ~30 s · **Handover: Minh takes it from here.**

---

## Slide 10 · The website · *(Minh)*

> This is the map itself. Paris, and a slider under it that runs from 1826 to
> today. Move the slider and the map answers for that year: only the streets,
> the buildings and the borders that existed then.
>
> Nothing to install. It is a web page.

⏱ ~40 s

---

## Slide 11 · One feature · Place Dauphine

> Click any feature and you get the page you already know from OpenStreetMap.
> This is the Place Dauphine, and in its tags there is `start_date=1607`.
>
> Same object, same tag list, one field more. If you can edit OSM, you can
> already edit this.

⏱ ~40 s

---

## Slide 12 · Overpass turbo

> We run our own Overpass instance. Same query language you already write, and
> now you can filter by date as well.
>
> This query asks for dated buildings in one corner of Paris and gets 764 of
> them back. Everything you know how to ask of OSM, you can ask here about any
> year.

⏱ ~40 s

---

## Slide 13 · QLever · SPARQL

*(This is the one to slow down on.)*

> And this is where it gets interesting. Here we ask QLever for the Place
> Dauphine, and the answer is not one row. It is three: 1792, 1814, 1874.
>
> Same square, three states, and all of them are true — at different times.
> That is the difference between a map of today and a map with a time axis.

⏱ ~1 min · **Pause on the three rows.**

---

## If you get stuck

- Anything you can't answer: "good question, come find us after the talk, we
  are here all week."
- If the animations don't play: the PDF version freezes each one on a single
  frame, keep talking, the story still works.
- If you are running late: show Paris (slide 7) and skip the Île de la Cité,
  then go straight to the editors.
