import { create } from "zustand";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (id: string, name: string, price: number) => void;
  removeItem: (id: string) => void;
  toggleCart: () => void;
  closeCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (id, name, price) =>
    set((state) => {
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, { id, name, price, quantity: 1 }], isOpen: true };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
  total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  count: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));
