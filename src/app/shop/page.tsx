"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, productCategories } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart";
import { useToast } from "@/components/ui/Toast";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

// Map category ids to ImagePlaceholder variants
function variantForCategory(category: string): "gold" | "rose" | "dark" {
  if (category === "gift-voucher") return "rose";
  if (category === "glue" || category === "lash-shampoo") return "dark";
  return "gold";
}

// Human-readable label for a category
function categoryLabel(id: string) {
  return productCategories.find((c) => c.id === id)?.name ?? id;
}

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const addItem = useCartStore((s) => s.addItem);
  const { showToast } = useToast();

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  function handleAddToCart(id: string, name: string, price: number) {
    addItem(id, name, price);
    showToast(`${name} zum Warenkorb hinzugefügt`);
  }

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Header */}
      <header className="bg-charcoal text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl mb-4 tracking-wide">Onlineshop</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-white/60 text-base md:text-lg mb-6 max-w-xl mx-auto">
              Professionelle Produkte für Lash Artists &amp; Kundinnen
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="inline-block bg-gold/20 border border-gold/40 text-gold-light text-sm px-5 py-2 rounded-full tracking-wide">
              Kostenloser Versand ab 100€ 🚚
            </span>
          </FadeIn>
        </div>
      </header>

      {/* Filter tabs — sticky */}
      <div className="sticky top-0 z-30 bg-white border-b border-cream-dark shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex gap-2 overflow-x-auto scrollbar-none">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-gold text-white shadow-sm"
                  : "bg-cream text-charcoal hover:bg-cream-dark"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Count indicator */}
        <FadeIn>
          <p className="text-sm text-charcoal/40 mb-6">
            {filteredProducts.length} {filteredProducts.length === 1 ? "Produkt" : "Produkte"}
            {activeFilter !== "all" && ` in „${categoryLabel(activeFilter)}"`}
          </p>
        </FadeIn>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Product image */}
                <div className="relative">
                  <ImagePlaceholder
                    className="h-48 w-full rounded-t-2xl"
                    variant={variantForCategory(product.category)}
                    text={product.name}
                  />
                  {product.soldOut && (
                    <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center rounded-t-2xl">
                      <span className="bg-charcoal text-white text-xs font-medium uppercase tracking-widest px-4 py-1.5 rounded-full">
                        Ausverkauft
                      </span>
                    </div>
                  )}
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-white/90 text-charcoal/60 text-xs uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {categoryLabel(product.category)}
                  </span>
                </div>

                {/* Product info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-medium text-charcoal text-base mb-1 leading-snug">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-sm text-charcoal/60 mb-4 leading-relaxed flex-1">
                      {product.description}
                    </p>
                  )}
                  {!product.description && <div className="flex-1" />}

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-cream-dark">
                    <span className="font-heading text-xl text-gold">
                      {product.price % 1 === 0
                        ? `${product.price} €`
                        : `${product.price.toFixed(2)} €`}
                    </span>
                    <button
                      disabled={!!product.soldOut}
                      onClick={() => handleAddToCart(product.id, product.name, product.price)}
                      className={`border rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        product.soldOut
                          ? "border-charcoal/20 text-charcoal/30 cursor-not-allowed"
                          : "border-gold text-gold hover:bg-gold hover:text-white hover:shadow-sm"
                      }`}
                    >
                      {product.soldOut ? "Nicht verfügbar" : "In den Warenkorb"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="font-heading text-2xl text-charcoal/30 mb-2">Keine Produkte gefunden</p>
            <p className="text-sm text-charcoal/40">
              In dieser Kategorie sind derzeit keine Produkte verfügbar.
            </p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
