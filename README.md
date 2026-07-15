# letaible.de — Website

Statische Firmenseite (Astro) für das Studio letaible (Dachmarke; Produkt: nis2scan).

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/ (statisch, CSS inline)
npm run preview
```

## Deployment

`dist/` ist reines statisches HTML/CSS — hostbar auf Strato-Webspace,
Cloudflare Pages oder GitHub Pages. `site` steht auf `https://letaible.de`.

## Vor dem Livegang (Pflicht)

- **Impressum**: hier läuft die eigentliche Impressumspflicht der Firma —
  alle `[…]`-Platzhalter füllen (heute Einzelunternehmer, nach UG-Gründung
  Firmierung + HRB nachziehen).
- **Datenschutz**: Hosting-Anbieter, Log-Speicherdauer, Aufsichtsbehörde.
- **Kontakt** (`src/pages/index.astro`): `[KONTAKT-E-MAIL]` ersetzen.
- Quelle der Rechtstexte: `../nis2scan-planning/recht/`.
