# Diva Patong — Asset Credits & Licensing

Every sourced asset used on the site is logged here: source URL, creator, license,
and what (if anything) is required of us to stay compliant. Nothing in `/assets`
should be used on the live site unless it has an entry here.

## Manifest — what's where

| Folder | Contents | On the live page? |
|---|---|---|
| `hero/` | Real drone video + poster (Pexels) | ✅ hero background |
| `images/rooms/` | 10 real Diva Patong room photos | ✅ all 10 room cards |
| `property/` | 2 real photos in use (pool, bar) + 2 not yet placed (city/pool night views) | ✅ 2 of 4 |
| `attractions/` | 8 stock Phuket/Patong location photos | ✅ all 8 attraction cards |
| `food/` | 4 stock food/beverage photos | ❌ not yet placed — no dining section built |
| `hotel-placeholders/` | 2 stock photos (lobby, morning) | ❌ not yet placed |
| `map/` | Custom explore map (SVG + JPG + PNG), satellite-based | ❌ not yet placed — no "explore" section built |
| `overlays/` | 4 original decorative textures (SVG + WebP) | ❌ not yet placed |
| `_moodboard/` | Stage-by-stage review pages sent during sourcing — not site assets | — |

Every `.webp`/`.jpg` used as a final asset has an `originals/` sibling folder holding the
untouched download for that category, plus a full source/license entry below. Alt text for
every image actually on the page lives in `index.html` itself (not duplicated here) — see the
`alt="..."` attribute on each `<img>` tag.

---

## Real Diva Patong property photography

Supplied directly by the client: an initial WhatsApp batch (`Media Diva/`), then the full
categorized library via two Google Drive folders — "DIVA NEW PHOTOS" (room categories, one
subfolder per room type) and "DIVA FOTOS" (drone stills + a promotional walkthrough video's
extracted frames). Actual photos of the hotel — no external license needed, no credits owed.

**Important lesson learned mid-sourcing:** the Drive folders reuse generic filenames (`4.png`,
`B (2).jpg`, etc.) independently per folder — the same filename in two different category
folders is NOT the same photo. An early pick for the Standard room card was pulled by filename
match from the old flat WhatsApp export and turned out to be a coffee-tray detail shot once
opened from its real folder. Fixed by re-verifying every one of the 10 picks by actually opening
the file from its correct category folder before processing — see below, all 10 confirmed correct.

**Room cards (all 10 categories, matching the Drive's own folder names):**

| File | Room card | Drive folder | Source file | Rate |
|---|---|---|---|---|
| `images/rooms/standard.jpg` | Standard | STANDARD | `A2 (3).jpg` | ฿7,999 |
| `images/rooms/standard-twin.jpg` | Standard Twin Bed — City View | Standard Twin Bed - City View | `WhatsApp Image 2025-11-02 at 11.12.01.jpeg` | not confirmed — shown as "Ask for rates" |
| `images/rooms/standard-triple.jpg` | Standard Triple — City View | Standard Triple Room without elevator - City View | `WhatsApp Image 2025-03-22 at 14.11.43.jpeg` | ฿9,999 |
| `images/rooms/superior.jpg` | Superior — City View | Superior Room - City View | `B (2).jpg` | ฿8,599 |
| `images/rooms/delux-pool-view.jpg` | Deluxe — Pool View | Delux Room - Pool View | `C (4).jpg` | ฿9,999 |
| `images/rooms/delux-twin-pool-view.jpg` | Deluxe Twin — Pool View | Delux Twin - Pool View | `WhatsApp Image 2025-11-02 at 11.11.59.jpeg` | not confirmed — shown as "Ask for rates" |
| `images/rooms/quadruple.jpg` | Deluxe Quadruple | Quardaple | `E (3).jpg` | ฿12,999 |
| `images/rooms/connecting-family-pool-view.jpg` | 2 Connecting Rooms — Pool View | 2 Connecting Family Room - Pool View | `F (3).jpg` | ฿17,999 |
| `images/rooms/penthouse.jpg` | Rooftop Penthouse w/ Jacuzzi | Penthouse | `I (2).jpg` | ฿29,999 |
| `images/rooms/penthouse-with-bar.jpg` | Rooftop Penthouse w/ Jacuzzi & Private Bar | Penthouse with bar | `J (10).jpg` | ฿25,999 |

Two categories (Standard Twin Bed, Deluxe Twin — Pool View) don't appear in the rates I originally
pulled from the live site — they may be newer room types. Shown on the page as "Ask for rates"
rather than a guessed number.

**Other property photography:**

| File | Used for | Source |
|---|---|---|
| `property/pool.webp` | "The Pool" experience card | `2 Connecting Family Room - Pool View/F (3).jpg` |
| `property/stella-bar.webp` | "Stella Bar" experience card | `DIVA FOTOS/DSC03546.00_01_17_02.Imagen fija012.jpg` — a frame from a promotional walkthrough video; shows the bar counter and dining area, "LPK" signage visible, not a sign reading "Stella Bar" specifically |
| `property/view-city-night.webp` | Not yet placed on the page | `Penthouse with bar/J (1).jpg` — night view over Patong from a room window |
| `property/view-pool-balcony.webp` | Not yet placed on the page | `Delux Room - Pool View/C (3).jpg` — night balcony view of the pool |

**Processing applied to all of the above:** resized for web, plus a light, consistent colour
grade (`eq` contrast/saturation/gamma + `colorbalance`, warm highlights toward the site's gold,
cool shadows toward navy) to unify photos shot across different sessions/white-balances into one
cohesive look — restrained on purpose, so the rooms stay honestly recognizable rather than looking
filtered. Originals preserved untouched in `images/rooms/originals2/` and `property/originals/`.

Superseded by this batch: the Stage 5 stock `pool-placeholder.webp` (now `property/pool.webp`,
real), and the first-pass room photos from the flat `Media Diva/` export (replaced once the
properly categorized Drive folders became available).

---

## Hero

### `hero/hero-patong.mp4` (+ `hero-patong-original-4k.mp4`, `hero-patong.webp`)

- **Title:** Aerial View of Phuket's Stunning Coastline
- **Creator:** IHP Production
- **Source:** https://www.pexels.com/video/aerial-view-of-phuket-s-stunning-coastline-34301712/
- **Direct file (as downloaded):** https://videos.pexels.com/video-files/34301712/14531772_3840_2160_50fps.mp4
- **License:** [Pexels License](https://www.pexels.com/license/) — free for commercial use, no attribution legally required. We credit anyway, below, as good practice.
- **Original spec:** 3840×2160 (4K), 16:9, 0:08, 50fps, no audio track used
- **What we did to it:**
  - `hero-patong-original-4k.mp4` — untouched download, kept as the preserved source file (29.3MB)
  - `hero-patong-4k50fps-old.mp4` — first "web" encode (H.264, CRF 28, audio stripped, 7.4MB) but kept the source's full 3840×2160 @ 50fps. Reported as stuttering/freezing in real browsers (not just this dev pane) — 4K@50fps H.264 is a heavy decode for a looping background video and was very likely the actual cause, not a server bug. Kept here as a backup, no longer referenced by any page.
  - `hero-patong.mp4` — **current live file.** Re-encoded from the original 4K source at 1920×1080 @ 25fps, CRF 23, audio stripped, faststart enabled (5.9MB, ~5.3Mbps). Roughly 8× less raw decode work than the old encode for a hero video that's never displayed anywhere near 4K in the layout.
  - `hero-patong.webp` — poster frame grabbed at 00:00:02, scaled to 2400×1350, WebP quality 90 (641KB)
- **Usage note:** clip is only 8s; the site's `<video loop>` attribute repeats it seamlessly-ish at the site level rather than the file itself being extended. Flagged during Stage 2 approval — approved as-is.
- **Server note:** while debugging the stutter, also found and fixed a real bug in `.claude/serve.ps1` — it didn't support HTTP Range requests and served all files (including this one) as `no-store`, which can force inefficient re-fetching for a `loop`ing video. Fixed alongside the re-encode; both were likely contributing.
- **Attribution (voluntary):** Video by IHP Production from Pexels.

---

## Attractions

All sourced from Pexels (Pexels License — free for commercial use, no attribution legally
required; credited below anyway). Every entry's geotag was checked on the source page before
selection. `/assets/attractions/originals/` holds the untouched downloads; the `.webp` files
are what the site actually uses, re-encoded to a web-practical width (originals ran up to
6720px wide — no reason to ship that much data to a browser).

| File | Verified location? | Title | Creator | Source |
|---|---|---|---|---|
| `patong-beach.webp` | ✅ Patong Beach | Waves Crashing to the Shore During Evening | Vladyslav Dushenkovsky | https://www.pexels.com/photo/waves-crashing-to-the-shore-during-evening-4808233/ |
| `bangla-road-night.webp` | ✅ Patong (not the exact street) | Street Food Corner | French Sweetie | https://www.pexels.com/photo/street-food-corner-24971584/ |
| `jungceylon.webp` | ⚠️ Patong street, not the mall building | Sunlit Street in Town | ana simona bevecz | https://www.pexels.com/photo/sunlit-street-in-town-17485622/ |
| `banzaan-market.webp` | ⚠️ Phuket market, not confirmed as Banzaan by name | Fresh Seafood Display at Phuket Market | nana liu | https://www.pexels.com/photo/fresh-seafood-display-at-phuket-market-33939170/ |
| `freedom-or-karon-beach.webp` | ✅ Karon Beach | Waves Crashing on the Shore | Patsara M. Choochart | https://www.pexels.com/photo/waves-crashing-on-the-shore-11947575/ |
| `old-phuket-town.webp` | ✅ Phuket Town | Yellow Colonial Building in Phuket Old Town | Pranshi | https://www.pexels.com/photo/yellow-colonial-building-in-phuket-old-town-30847919/ |
| `wat-chalong.webp` | ✅ Wat Chalong, Phuket | Wat Chalong Temple in Phuket, Thailand | Namfon Sasimaporn | https://www.pexels.com/photo/wat-chalong-temple-in-phuket-thailand-19578324/ |
| `big-buddha.webp` | ✅ Phuket | Big Buddha Statue in Phuket | Daniel P | https://www.pexels.com/photo/big-buddha-statue-in-phuket-25932175/ |

**Rejected during sourcing (logged for the record, not used):**
- An Unsplash "Patong Beach" photo by Max Bvp originally picked for `patong-beach.webp` — dropped after finding the same photographer tags unrelated beaches (e.g. Kamala) with "Patong Beach" too. Replaced with the Vladyslav Dushenkovsky photo above.
- A Bing/TripAdvisor photo of Jungceylon's "Bay Zone" and a tour-blog photo of Bangla Road, both supplied by the client for reference — not used as assets: TripAdvisor user photos and the blog's embedded `a.cdn-hotels.com` (Expedia-licensed) image are both copyright-restricted, not free-use stock. Viewed for reference only, to sharpen search terms.
- Searched Unsplash and Pexels directly for "Jungceylon" and "Bangla Road Phuket" by name — zero results on both platforms. No free-license photo of either exact venue appears to exist on either site.

## Food

All sourced from Pexels (Pexels License — free for commercial use, no attribution legally
required; credited below anyway). None are claimed as dishes actually served by Diva Patong —
captioned on the site as nearby dining inspiration only. `/assets/food/originals/` holds the
untouched downloads; the `.webp` files are re-encoded to a web-practical width.

| File | Title | Creator | Source |
|---|---|---|---|
| `thai-food.webp` | Delicious Thai Tom Yum Soup in Patterned Bowl | UNDO KIM | https://www.pexels.com/photo/delicious-thai-tom-yum-soup-in-patterned-bowl-34699479/ |
| `indian-food.webp` | Delicious Biryani Dish with Spices | Karan Mridha | https://www.pexels.com/photo/delicious-biryani-dish-with-spices-32825917/ |
| `continental-food.webp` | Gourmet Fish Dish with Green Pea Sauce | Ali Akdemir | https://www.pexels.com/photo/gourmet-fish-dish-with-green-pea-sauce-30240458/ |
| `cocktail-or-coffee.webp` | Tropical Cocktail with Pineapple Garnish Indoors | Luna Joie | https://www.pexels.com/photo/tropical-cocktail-with-pineapple-garnish-indoors-34519755/ |

## Hotel lifestyle placeholders

Sourced from Pexels (Pexels License — free for commercial use). Of the original 4 requested,
only 2 remain as stock — see `assets/hotel-placeholders/README.txt` for why.

| File | Title | Creator | Source |
|---|---|---|---|
| `lobby-placeholder.webp` | Photo of Plants Near the Glass Door | Igor Starkov | https://www.pexels.com/photo/photo-of-plants-near-the-glass-door-756083/ |
| `morning-placeholder.webp` | Cozy Indoor Breakfast Setup with Elegant Decor | Moussa Idrissi | https://www.pexels.com/photo/cozy-indoor-breakfast-setup-with-elegant-decor-34769517/ |

Neither is confirmed to resemble the hotel's actual lobby or breakfast service — clearly
placeholder, not documentary. Replace with real photography before this goes fully live.

## Map

**Base imagery:** real Sentinel-2 satellite photography, sourced from EOX IT Services GmbH's
"Sentinel-2 cloudless" WMS (`s2maps.eu` / `tiles.maps.eox.at`), licensed **CC BY 4.0** —
attribution required, given below. Two crops pulled: a wide whole-island shot (for the inset
locator) and a tighter, higher-resolution crop of the Patong-to-Chalong corridor (for the main
map). Both color-graded (hue shift + colorbalance) to the site's navy/gold palette in
`assets/map/patong-satellite.jpg` and `phuket-satellite.jpg`; untouched originals kept in
`assets/map/originals/`.

**Attribution (required by the license):** Sentinel-2 cloudless — [https://s2maps.eu](https://s2maps.eu)
by [EOX IT Services GmbH](https://eox.at) (Contains modified Copernicus Sentinel data 2020) — printed
on the map itself in the small-print line.

**Marker positions:** placed using approximate real coordinates (from general knowledge, not a
surveyed source) converted to pixel positions on the satellite crop via a linear lat/lon-to-pixel
mapping from the WMS bounding box used for the fetch. Bangla Road's approximate position was
additionally cross-checked against an OpenStreetMap search result. Flagged on the map itself as
approximate — confirm anything precise (routes, drive times) with the hotel directly.

**Road routes (Old Phuket Town, Wat Chalong, Freedom Beach):** actual driving routes computed by
[OSRM](http://project-osrm.org) (Open Source Routing Machine) against the real OpenStreetMap road
network — not straight lines or guessed paths. Distance and time are OSRM's free-flow estimate
with no live traffic, clearly labelled "≈" on the map. Patong Beach and the Central Patong cluster
(Bangla Road/Jungceylon/Banzaan Market) are short enough to walk, so those stay as simple
connector lines rather than routed roads.

**Vector-only version:** the earlier hand-traced-outline version (no satellite imagery) is not
kept as a separate deliverable — superseded by this one per your request to incorporate real
satellite imagery.

## Decorative overlays

Original creations — hand-built as SVG, rendered and converted to transparent WebP. No external
sourcing, no license needed. SVG sources kept alongside the WebP files so they stay editable.

| File | What it is | Size |
|---|---|---|
| `tropical-mist-overlay.webp` | Soft ivory ground-haze, bottom-weighted blurred ellipses | 1920×1080, 87 KB |
| `palm-shadow-overlay.webp` | Dappled palm-frond shadow, corner-cast, procedurally drawn fronds | 1920×1080, 136 KB |
| `rain-texture-overlay.webp` | Diagonal rain streaks, tiled pattern + a few brighter accent streaks | 1920×1080, 271 KB |
| `seafoam-gradient-overlay.webp` | Seafoam colour wash, bottom + corner gradient | 1920×1080, 117 KB |

All transparent (WebP alpha channel preserved throughout — verified `yuva420p` on every file),
kept deliberately restrained per the brief ("subtle enough to sit over photos and video without
reducing readability") — previewed against a real hero-candidate photo before finalizing; the
first rain-texture pass was too dense/bright and was toned down a step.
