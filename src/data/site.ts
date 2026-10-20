// Zentrale Stammdaten des Salons. Änderungen hier wirken auf der ganzen Website.

export const site = {
  name: 'Stile Paolo',
  slogan: '…so wie du bist',
  motto: ['professionell', 'engagiert', 'leidenschaftlich'],
  description:
    'Stile Paolo – Ihr Friseur für Damen, Herren und Kinder in der Paderborner Innenstadt. Persönliche Beratung, italienischer Charme und Premium-Produkte.',
  url: 'https://stilepaolo.de',

  // Jahr der Salongründung – daraus wird „seit über X Jahren“ berechnet.
  // Abgeleitet aus der alten Website („22 Jahre“ im Text von 2018, „24 Jahre“ von 2020).
  // TODO: Gründungsjahr mit Paolo bestätigen.
  foundedYear: 1996,

  owner: 'Paolo Lo Tauro',
  address: {
    street: 'Königstraße 38',
    zip: '33098',
    city: 'Paderborn',
  },
  phone: '05251 8719425',
  phoneHref: 'tel:+4952518719425',
  // E-Mail wird im Browser zusammengesetzt, damit Spam-Bots sie nicht direkt lesen.
  emailUser: 'stile-paolo',
  emailDomain: 'web.de',

  social: {
    instagram: 'https://www.instagram.com/friseur_stile_paolo/',
    facebook: 'https://www.facebook.com/Stile-Paolo-184372195078043/',
  },

  // Link zum Google-Unternehmensprofil (für „Bewertung schreiben“). Leer = Button ausgeblendet.
  googleReviewUrl: '',
};

export const yearsInBusiness = new Date().getFullYear() - site.foundedYear;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`,
)}`;

// day: 0 = Sonntag … 6 = Samstag (wie Date.getDay()). Ohne open/close = geschlossen.
export type OpeningDay = { day: number; label: string; open?: string; close?: string };

export const openingHours: OpeningDay[] = [
  { day: 1, label: 'Montag', open: '09:00', close: '18:00' },
  { day: 2, label: 'Dienstag', open: '09:00', close: '18:00' },
  { day: 3, label: 'Mittwoch' },
  { day: 4, label: 'Donnerstag', open: '09:00', close: '18:00' },
  { day: 5, label: 'Freitag', open: '09:00', close: '18:00' },
  { day: 6, label: 'Samstag', open: '08:00', close: '15:00' },
  { day: 0, label: 'Sonntag' },
];

export const navLinks = [
  { href: '/#ueber-uns', label: 'Über uns' },
  { href: '/#team', label: 'Team' },
  { href: '/#preise', label: 'Preise' },
  { href: '/#galerie', label: 'Galerie' },
  { href: '/#kontakt', label: 'Kontakt' },
];
