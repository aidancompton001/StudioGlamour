export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
  soldOut?: boolean;
  description?: string;
}

export const products: Product[] = [
  { id: "tweezer-kiara", name: 'Tweezer "KIARA"', price: 32, category: "tweezers", description: "Präzisionspinzette für perfekte Isolation" },
  { id: "tweezer-diamond", name: 'Tweezer "DIAMOND"', price: 32, category: "tweezers", description: "Diamant-beschichtete Volumen-Pinzette" },
  { id: "tweezer-glamour", name: 'Tweezer "GLAMOUR"', price: 27, category: "tweezers", description: "Leichte Pinzette für Anfänger & Profis" },
  { id: "classic-lashes", name: "Classic Lashes", price: 19, category: "lashes", description: "Premium Einzelwimpern, 0.15mm" },
  { id: "fluffy-fan", name: "Fluffy Easy Fan Lashes", price: 22, category: "lashes", description: "Selbstfächernde Volumenwimpern" },
  { id: "glamour-bond", name: "Master Glamour Bond", price: 43.99, category: "glue", description: "Profi-Wimpernkleber, 1-2 Sek. Trockenzeit" },
  { id: "shampoo", name: "Wimpernshampoo", price: 17.85, category: "lash-shampoo", soldOut: true, description: "Sanfte Reinigung für Wimpernextensions" },
  { id: "gift-50", name: "Geschenkgutschein 50€", price: 50, category: "gift-voucher", description: "Das perfekte Geschenk" },
  { id: "gift-100", name: "Geschenkgutschein 100€", price: 100, category: "gift-voucher", description: "Für besondere Anlässe" },
];

export const courses = [
  { id: "masterclass-all", name: "ALL IN ONE MASTERCLASS", price: 3500, duration: "5 Tage", description: "Komplette Ausbildung: Classic, Volumen, Wet Look, Whispy" },
  { id: "lash-brow", name: "Lash & Brow Schulung", price: 899.64, duration: "2 Tage", description: "Classic Wimpernverlängerung + Brow Lifting" },
  { id: "wet-look-kurs", name: "Wet Look Schulung", price: 550.01, duration: "1 Tag", description: "Spezialtechnik für den angesagten Wet Look" },
  { id: "whispy-kurs", name: "Whispy Technik", price: 550.01, duration: "1 Tag", description: "Die natürlich-wispige Technik mit Spikes" },
  { id: "masterclass-pro", name: "Masterclass für Profis", price: 1600, duration: "2 Tage", description: "Perfektionstraining für erfahrene Lash Artists" },
];

export const productCategories = [
  { id: "all", name: "Alle" },
  { id: "lashes", name: "Lashes" },
  { id: "tweezers", name: "Tweezers" },
  { id: "glue", name: "Glue" },
  { id: "lash-shampoo", name: "Pflege" },
  { id: "gift-voucher", name: "Gutscheine" },
];
