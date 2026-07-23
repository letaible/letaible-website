# Website letaible.de

Statische Firmenseite (Astro) für das Studio letaible (Dachmarke; Produkt: nis2scan).

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/ (statisch, CSS inline)
npm run preview
```

## Deployment

`dist/` ist reines statisches HTML/CSS. Hostbar auf Strato-Webspace,
Cloudflare Pages oder GitHub Pages. `site` steht auf `https://letaible.de`.

## Deployment auf Strato (aktueller Stand)

Impressum, Datenschutzerklärung und Kontaktformular sind mit den echten
Angaben der Letaible GmbH gefüllt (HRB 20612, AG Fürth). Zum Livegang:
Inhalt von `dist/` per SFTP nach `htdocs/letaible` laden, Domain letaible.de
darauf zeigen lassen, SSL aktivieren. Das Kontaktformular braucht PHP und
läuft daher erst auf dem Strato-Server.
