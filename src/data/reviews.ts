// Kundenbewertungen – bitte NUR echte Bewertungen eintragen (z. B. aus dem Google-Profil,
// mit Einverständnis bzw. öffentlich sichtbar). Solange die Liste leer ist, wird der
// Bewertungsbereich auf der Website nicht angezeigt.
//
// Beispiel:
// { name: 'Maria K.', rating: 5, text: 'Super Beratung …', source: 'Google' },

export type Review = { name: string; rating: 1 | 2 | 3 | 4 | 5; text: string; source?: string };

export const reviews: Review[] = [];
