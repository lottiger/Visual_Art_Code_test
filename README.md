# ICA Nära – Digital annons

Kodtest för Creative Developer (Visual Art). En digital annons (1080×1920) för
ICA Nära, byggd i **Vite + vanilla JS/HTML/CSS**. Hela annonsen genereras från
`src/advdata.json`, så handlare kan ändra innehåll utan att röra koden.

## Kom igång

```bash
npm install
npm run dev      # startar dev-server (http://localhost:5173)
npm run build    # produktionsbygge → dist/
npm run preview  # förhandsvisa bygget
```

Annonsen ritas i en fast 1080×1920-yta som skalas proportionerligt för att
passa förhandsvisningsfönstret. På en riktig skärm körs den 1:1.

## Datadriven

All text, pris, bild, layout och rörelse styrs av [`src/advdata.json`](src/advdata.json):

```json
{
	"ad_title": "Blåbär",
	"layout": "veckans_pris",
	"promotion_image": "blabar.png",
	"promotion_unit": "29",
	"promotion_sub_unit": "90",
	"article_unit_of_measurement": "st",
	"article_name": "Blåbär",
	"article_brand_name": "Blåbär AB",
	"article_origin_country": "Sverige",
	"article_package_info": "500g",
	"splash_motion": "slingshot"
}
```

## Uppgifterna

-   **Uppgift 1** – Annonsen byggd enligt bild och info, med semantisk HTML.
-   **Uppgift 2** – Splashens rörelse i ren CSS enligt referensvideon.
-   **Uppgift 3** – Vid `"layout": "veckans_kortpris"` blir maner och splash rosa
    (`#f8b9d4`) och rubriken ändras till "Veckans kortpris!".

## Extra: splash-rörelser för annonsskapare

Byt rörelse genom att ändra ett enda fält i `advdata.json`:

```json
"splash_motion": "sway"
```

| Värde       | Beskrivning                            |
| ----------- | -------------------------------------- |
| `slingshot` | Referensrörelsen (default)             |
| `sway`      | Mjuk vaggning fram och tillbaka        |
| `pulse`     | Pulserar (skalas upp/ner)              |
| `pop`       | Poppar in, håller, poppar ut           |
| `drop`      | Faller in uppifrån och studsar till ro |

## Struktur

```
public/        Statisk media (refereras via sökväg, t.ex. promotion_image)
  blabar.png, maner.png, splash.svg, favicon.svg
src/
  advdata.json  Annonsdatan
  main.js       Renderar annonsen från datan + skalar canvasen
  style.css     Layout, typsnitt, färgteman och splash-rörelser
  assets/fonts/ ICA-typsnitt (hashas/optimeras av Vite)
index.html
```

## Noteringar

-   **Splash-färg** (`#e1220f`) plockad från pdf och analyserad i imagecolorpicker.com
-   **Kortpris-manern** är rekonstruerad i CSS (samma streck-geometri som
    `maner.png`)
