// Preisliste. „from: true“ zeigt den Preis als „ab … €“ an.
// price als Text, damit auch Spannen („24–40“) oder „auf Anfrage“ möglich sind.

export type PriceItem = { name: string; price: string; from?: boolean };
export type PriceCategory = { id: string; title: string; subtitle: string; items: PriceItem[] };

export const priceCategories: PriceCategory[] = [
  {
    id: 'donna',
    title: 'Donna',
    subtitle: 'Damen',
    items: [
      { name: 'Waschen – Schneiden – Föhnen', price: '41', from: true },
      { name: 'Waschen – Föhnen', price: '20', from: true },
      { name: 'Farbe', price: '34', from: true },
      { name: 'Intensive Tönung', price: '36', from: true },
      { name: 'Strähnchentechnik', price: '45', from: true },
      { name: 'Balayage / Ombré', price: 'auf Anfrage' },
      { name: 'Olaplex-Behandlung', price: '15', from: true },
      { name: 'Colorplex-Behandlung', price: '5', from: true },
      { name: 'Dauerwelle / Cystein-Dauerwelle', price: '78', from: true },
      { name: 'Wimpern färben', price: '8' },
      { name: 'Augenbrauen färben', price: '7' },
      { name: 'Augenbrauen formen', price: '7', from: true },
      { name: 'Abend-Make-up', price: '45' },
      { name: 'Brautservice', price: '150' },
    ],
  },
  {
    id: 'uomo',
    title: 'Uomo',
    subtitle: 'Herren',
    items: [
      { name: 'Waschen – Schneiden – Föhnen – Stylen', price: '30', from: true },
      { name: 'Farbe', price: '36', from: true },
      { name: 'Strähnchen', price: '45', from: true },
      { name: 'Bart formen', price: '10' },
    ],
  },
  {
    id: 'bambini',
    title: 'Bambini',
    subtitle: 'Kinder',
    items: [
      { name: '0 – 3 Jahre', price: '20' },
      { name: '4 – 11 Jahre', price: '22', from: true },
      { name: '12 – 17 Jahre', price: '24 – 40' },
    ],
  },
];
