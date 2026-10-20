import type { ImageMetadata } from 'astro';
import paolo from '../assets/images/paolo-portrait.jpg';
import alisa from '../assets/images/alisa.jpg';
import tatjana from '../assets/images/tatjana.jpg';

export type TeamMember = { name: string; role: string; image: ImageMetadata; position?: string };

export const team: TeamMember[] = [
  { name: 'Paolo', role: 'Inhaber & Friseurmeister', image: paolo, position: '50% 25%' },
  { name: 'Alisa', role: 'Top Stylistin', image: alisa, position: '45% 30%' },
  { name: 'Tatjana', role: 'Top Stylistin', image: tatjana, position: '50% 30%' },
];
