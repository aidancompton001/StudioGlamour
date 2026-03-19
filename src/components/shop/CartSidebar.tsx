"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store/cart";
import { useToast } from "@/components/ui/Toast";

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, total, count } = useCartStore();
  const { showToast } = useToast();

  const handleCheckout = () => {
    showToast("Demo-Modus: In der fertigen Version werden Sie zum Checkout weitergeleitet.");
    closeCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/30"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md z-50 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-dark">
              <h2 className="font-heading text-xl">
                Warenkorb <span className="text-gold">({count()})</span>
              </h2>
              <button onClick={closeCart} className="p-2 hover:text-gold transition-colors" aria-label="Warenkorb schließen">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-charcoal/50 text-center mt-10">Dein Warenkorb ist leer.</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-cream"
                    >
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold/20 to-cream-dark flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-charcoal/50">{item.quantity}x</p>
                      </div>
                      <p className="text-sm font-medium text-gold">
                        {(item.price * item.quantity).toFixed(2)} €
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-3 text-charcoal/30 hover:text-red-500 transition-colors"
                        aria-label={`${item.name} entfernen`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-cream-dark">
                {total() < 100 && (
                  <p className="text-xs text-charcoal/50 mb-3 text-center">
                    Noch {(100 - total()).toFixed(2)} € bis zum kostenlosen Versand 🚚
                  </p>
                )}
                {total() >= 100 && (
                  <p className="text-xs text-gold mb-3 text-center font-medium">
                    ✓ Kostenloser Versand!
                  </p>
                )}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Gesamt</span>
                  <span className="text-lg font-heading text-gold">{total().toFixed(2)} €</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full btn-gold py-3 rounded-full font-medium"
                >
                  Zur Kasse
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
