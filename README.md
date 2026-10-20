# Stile Paolo – Website

Neue Website für den Friseursalon Stile Paolo in Paderborn. Gebaut mit [Astro](https://astro.build) und Tailwind CSS als schnelle, statische Seite ohne Cookies und Tracking.

## Starten

Voraussetzung: Node.js 20 oder neuer.

```sh
npm install
npm run dev      # lokale Vorschau auf http://localhost:4321
npm run build    # fertige Website nach dist/
npm run preview  # gebaute Version ansehen
```

## Inhalte pflegen

Alle Texte und Daten liegen in `src/data/`. Für normale Änderungen braucht es kein HTML.

| Datei | Inhalt |
| --- | --- |
| `site.ts` | Adresse, Telefon, E-Mail, Social Media, Gründungsjahr, Öffnungszeiten |
| `prices.ts` | Preisliste (Donna, Uomo, Bambini) |
| `team.ts` | Team-Mitglieder mit Foto |
| `reviews.ts` | Kundenbewertungen |

### Kundenbewertungen

Der Bewertungsbereich erscheint erst, wenn `src/data/reviews.ts` mindestens einen Eintrag enthält. Bitte nur **echte** Bewertungen eintragen, zum Beispiel aus dem Google-Unternehmensprofil:

```ts
export const reviews: Review[] = [
  { name: 'Maria K.', rating: 5, text: 'Tolle Beratung …', source: 'Google' },
];
```

Wenn in `site.ts` unter `googleReviewUrl` der Link zum Google-Profil steht, erscheint zusätzlich der Button „Bewertung auf Google schreiben“.

### Bilder

Die Fotos liegen in `src/assets/images/`. Astro wandelt sie beim Build automatisch in optimierte WebP-Dateien in passenden Größen um. Ein neues Bild für die Galerie wird in `src/components/Gallery.astro` in der Liste `photos` ergänzt.

## Aufbau

- `src/pages/`: Startseite, Impressum, Datenschutz
- `src/components/`: einzelne Abschnitte der Startseite (Hero, Über uns, Team, Preise …)
- `src/layouts/`: Grundgerüst mit SEO-Daten (Open Graph, schema.org `HairSalon`)
- `src/styles/global.css`: Farben und Schriften (Design-Tokens)

## Veröffentlichen

`npm run build` erzeugt im Ordner `dist/` reine HTML-, CSS- und Bilddateien. Diese können auf jeden Webspace hochgeladen werden, etwa beim bisherigen Hoster per FTP, oder bei Netlify, Vercel oder Cloudflare Pages.

## Noch offen

- Gründungsjahr bestätigen: `foundedYear` in `site.ts`, aktuell 1996, abgeleitet aus der alten Website
- Echte Google-Bewertungen und den Link zum Google-Profil eintragen
- Hosting-Angaben in `src/pages/datenschutz.astro` nach dem Umzug prüfen; Impressum und Datenschutz rechtlich prüfen lassen
- Optional neuere Fotos in höherer Auflösung
