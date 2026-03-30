import { Product } from './types';

export const products: Product[] = [
  {
    id: 'original',
    name: 'Dr Pepper',
    subtitle: 'The Original 23 Flavors',
    description: 'The one you crave. A signature blend of 23 flavors makes every sip of Dr Pepper truly unique. There\'s nothing like a Pepper.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    bgColor: 'bg-drp-maroon',
    formats: ['12oz Can', '20oz Bottle', '2L Bottle', 'Fountain'],
    tastingNotes: ['Cherry', 'Vanilla', 'Amaretto', 'Blackberry', 'Secret Spice']
  },
  {
    id: 'zero-sugar',
    name: 'Dr Pepper Zero Sugar',
    subtitle: 'Zero Calories, 100% Dr Pepper',
    description: 'The same 23 signature flavors you love, with zero sugar. It\'s the sweet reward you deserve without the compromise.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800&sat=-100',
    bgColor: 'bg-zinc-900',
    formats: ['12oz Can', '20oz Bottle', '2L Bottle'],
    tastingNotes: ['Cherry', 'Vanilla', 'Amaretto', 'Blackberry', 'Secret Spice']
  },
  {
    id: 'strawberries-cream',
    name: 'Strawberries & Cream',
    subtitle: 'A Sweet New Twist',
    description: 'The original 23 flavors layered with a refreshing strawberry flavor and a smooth, creamy finish. A decadent treat.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800&hue=300',
    bgColor: 'bg-rose-700',
    isLimitedEdition: true,
    formats: ['12oz Can', '20oz Bottle'],
    tastingNotes: ['Strawberry', 'Vanilla Cream', '23 Flavors']
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    subtitle: 'A Kiss of Cherry',
    description: 'The smoothest addition to the Dr Pepper family. A rich, sweet cherry flavor added to the classic 23.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800&hue=330',
    bgColor: 'bg-red-900',
    formats: ['12oz Can', '20oz Bottle', '2L Bottle'],
    tastingNotes: ['Extra Cherry', 'Vanilla', '23 Flavors']
  }
];
