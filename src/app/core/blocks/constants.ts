import { ServiceItem } from './types'

export const SERVICES: ServiceItem[] = [
  {
    title: 'Full Truckload (FTL)',
    description: 'Direct delivery with a dedicated truck and driver, ideal for large shipments.',
    image: '/FTL.jpg',
    tintClass: 'bg-black/70', // Dark/Neutral
  },
  {
    title: 'Medical Equipment',
    description: 'Time-critical and temperature-controlled deliveries for healthcare and hospitals.',
    image: 'medical.jpg',
    tintClass: 'bg-cyan-900/80', // Teal/Blue tint from image
  },
  {
    title: 'Local Courier Deliveries',
    description: 'Same-day solutions for documents and small parcels.',
     image: 'local.jpg',
    tintClass: 'bg-stone-900/75', // Dark brownish/black tint
  },
  {
    title: 'Less-Than-Truckload (LTL)',
    description: 'Reliable and cost-efficient transport for smaller shipments.',
   image: 'LTL.jpg',
    tintClass: 'bg-amber-950/80', // Warm brown/dark tint
  },
  {
    title: 'Casino & Gaming Equipment',
    description: 'Secure, high-value freight handling with dedicated tracking.',
     image: 'casino.jpg',
    tintClass: 'bg-indigo-950/80', // Deep purple/blue tint
  },
  {
    title: 'Door-to-Door Delivery',
    description: 'Convenient and reliable pickup and drop-off service anywhere in the U.S. and Canada.',
     image: 'door.jpg',
    tintClass: 'bg-slate-700/75', // Grey/Slate tint
  },
  {
    title: 'Cross-Border Shipping',
    description: 'Seamless movement between the U.S. and Canada with customs support.',
    image: 'Border.jpg',
    tintClass: 'bg-emerald-900/80', // Greenish map tint
  },
  {
    title: 'Trade Shows & Events',
    description: 'On-time setup and breakdown deliveries for exhibitions and conventions.',
   image: 'trad.jpg',
    tintClass: 'bg-gray-900/75', // Dark tint
  },
  {
    title: 'White Glove Service',
    description: 'Premium handling for fragile, high-value, or specialized freight.',
     image: 'glove.jpg',
    tintClass: 'bg-blue-950/80', // Dark Blue tint
  },
];