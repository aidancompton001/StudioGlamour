export interface Service {
  id: string;
  name: string;
  price: number;
  duration?: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "classic",
    name: "1:1 Technik (Classic)",
    description: "Natürlicher Look — eine Extension pro Naturwimper",
    services: [
      { id: "classic-new", name: "Neumodellage 1:1 Technik", price: 100, duration: "2 Std.", description: "Komplette Erstbehandlung im klassischen Stil" },
      { id: "classic-mix", name: "1:1 Technik Mix", price: 115, duration: "2,5 Std.", description: "Mix aus verschiedenen Längen für natürlichen Look" },
      { id: "classic-refill-2", name: "Auffüllen bis 2 Wochen", price: 45, duration: "1 Std." },
      { id: "classic-refill-3", name: "Auffüllen bis 3 Wochen", price: 55, duration: "1,5 Std." },
      { id: "classic-refill-4", name: "Auffüllen bis 4 Wochen", price: 65, duration: "1,5 Std." },
    ],
  },
  {
    id: "light-volume",
    name: "Leichtes Volumen",
    description: "Dezenter Volumen-Effekt für den Alltag",
    services: [
      { id: "lv-new", name: "Neumodellage Leichtes Volumen", price: 120, duration: "2,5 Std." },
      { id: "lv-refill-2", name: "Auffüllen bis 2 Wochen", price: 50, duration: "1 Std." },
      { id: "lv-refill-3", name: "Auffüllen bis 3 Wochen", price: 60, duration: "1,5 Std." },
      { id: "lv-refill-4", name: "Auffüllen bis 4 Wochen", price: 70, duration: "1,5 Std." },
    ],
  },
  {
    id: "medium-volume",
    name: "Mittleres Volumen",
    description: "Ausdrucksstarker Look für besondere Anlässe",
    services: [
      { id: "mv-new", name: "Neumodellage Mittleres Volumen", price: 130, duration: "2,5 Std." },
      { id: "mv-refill-2", name: "Auffüllen bis 2 Wochen", price: 55, duration: "1 Std." },
      { id: "mv-refill-3", name: "Auffüllen bis 3 Wochen", price: 65, duration: "1,5 Std." },
      { id: "mv-refill-4", name: "Auffüllen bis 4 Wochen", price: 75, duration: "1,5 Std." },
    ],
  },
  {
    id: "mega-volume",
    name: "Mega Volumen",
    description: "Maximaler Glamour — volle, dichte Wimpern",
    services: [
      { id: "megav-new", name: "Neumodellage Mega Volumen", price: 155, duration: "3 Std." },
      { id: "megav-refill-2", name: "Auffüllen bis 2 Wochen", price: 60, duration: "1,5 Std." },
      { id: "megav-refill-3", name: "Auffüllen bis 3 Wochen", price: 70, duration: "1,5 Std." },
      { id: "megav-refill-4", name: "Auffüllen bis 4 Wochen", price: 80, duration: "2 Std." },
    ],
  },
  {
    id: "wet-look",
    name: "Wet Look",
    description: "Trendy glänzender Wet-Look-Effekt",
    services: [
      { id: "wl-new", name: "Neumodellage Wet Look", price: 150, duration: "2,5 Std." },
      { id: "wl-refill-2", name: "Auffüllen bis 2 Wochen", price: 55, duration: "1 Std." },
      { id: "wl-refill-3", name: "Auffüllen bis 3 Wochen", price: 65, duration: "1,5 Std." },
      { id: "wl-refill-4", name: "Auffüllen bis 4 Wochen", price: 75, duration: "1,5 Std." },
    ],
  },
  {
    id: "whispy",
    name: "Whispy",
    description: "Natürlich-wispy Look mit Spikes und Textur",
    services: [
      { id: "wh-new", name: "Neumodellage Whispy", price: 165, duration: "3 Std." },
    ],
  },
  {
    id: "lifting",
    name: "Lash & Brow Lifting",
    description: "Natürliches Lifting ohne Extensions",
    services: [
      { id: "lash-lift", name: "Lash Lifting inkl. Färben", price: 65, duration: "1 Std." },
      { id: "brow-lift", name: "Brow Lifting inkl. Zupfen & Färben", price: 75, duration: "1 Std." },
      { id: "kombi-lift", name: "Lash & Brow Lifting Kombi", price: 125, duration: "1,5 Std." },
    ],
  },
  {
    id: "removal",
    name: "Entfernung",
    description: "Fachgerechte & schonende Entfernung",
    services: [
      { id: "removal", name: "Wimpern ablösen", price: 25, duration: "30 Min.", description: "Fachgerechte & schonende Entfernung der Wimpernextensions" },
    ],
  },
];
