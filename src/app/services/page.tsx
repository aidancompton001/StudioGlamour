"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { serviceCategories } from "@/lib/data/services";

const TAB_LABELS: Record<string, string> = {
  classic: "Classic",
  "light-volume": "Leichtes Volumen",
  "medium-volume": "Mittleres Volumen",
  "mega-volume": "Mega Volumen",
  "wet-look": "Wet Look",
  whispy: "Whispy",
  lifting: "Lifting",
  removal: "Entfernung",
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find((c) => c.id === activeTab)!;

  return (
    <main className="min-h-screen bg-cream font-body">
      {/* ── Header ── */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 tracking-wide">
              Leistungen &amp; Preise
            </h1>
            <p className="font-body text-white/70 text-lg md:text-xl">
              Finde deine perfekte Wimpernbehandlung
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="bg-charcoal border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 text-center">
          <p className="font-body text-white/40 text-xs tracking-wide">
            Preise zur Demonstration, Stand 19.03.2026
          </p>
        </div>
      </div>

      {/* ── Sticky Tab Navigation ── */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-cream-dark shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
            <nav
              className="flex gap-1 min-w-max py-1"
              role="tablist"
              aria-label="Leistungskategorien"
            >
              {serviceCategories.map((cat) => {
                const isActive = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(cat.id)}
                    className={`
                      relative px-4 py-3 text-sm font-body whitespace-nowrap transition-all duration-200 outline-none
                      ${
                        isActive
                          ? "text-gold border-b-2 border-gold font-medium"
                          : "text-charcoal/50 hover:text-charcoal/80 border-b-2 border-transparent"
                      }
                    `}
                  >
                    {TAB_LABELS[cat.id] ?? cat.name}
                  </button>
                );
              })}
            </nav>
            </div>
            {/* Scroll affordance: gradient fade on right edge */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Service Cards ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category description */}
        <FadeIn>
          <div className="mb-8">
            <h2 className="font-heading text-2xl text-charcoal mb-2">
              {activeCategory.name}
            </h2>
            <p className="font-body text-charcoal/60 text-sm">
              {activeCategory.description}
            </p>
          </div>
        </FadeIn>

        {/* Service list */}
        <div className="flex flex-col gap-4">
          {activeCategory.services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-cream-dark px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-gold/40 hover:shadow-sm transition-all duration-200">
                {/* Name + description */}
                <div className="flex-1 min-w-0">
                  <p className="font-body font-medium text-charcoal text-base leading-snug">
                    {service.name}
                  </p>
                  {service.description && (
                    <p className="font-body text-charcoal/50 text-sm mt-0.5 leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Price + duration + CTA */}
                <div className="flex items-center gap-5 sm:gap-6 shrink-0">
                  <div className="text-right">
                    <span className="font-heading text-xl text-gold block leading-tight">
                      {service.price} €
                    </span>
                    {service.duration && (
                      <span className="font-body text-xs text-charcoal/40 block mt-0.5">
                        {service.duration}
                      </span>
                    )}
                  </div>
                  <Link
                    href="/booking"
                    className="btn-gold px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0"
                  >
                    Jetzt buchen
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Upsell Block ── */}
        <FadeIn delay={0.2}>
          <div className="bg-rose rounded-2xl p-8 mt-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                {/* Decorative accent */}
                <div className="w-8 h-0.5 bg-gold mb-4" />
                <h3 className="font-heading text-2xl text-charcoal mb-3 leading-snug">
                  Upgrade-Tipp: Von Classic zu Volumen
                </h3>
                <p className="font-body text-charcoal/65 text-sm leading-relaxed max-w-lg">
                  Du liebst dein Classic-Set, fragst dich aber, ob mehr Fülle
                  zu dir passt? In einem kurzen Beratungsgespräch finden wir
                  gemeinsam den perfekten Look — ganz ohne Verpflichtung. Der
                  Wechsel zur Volumentechnik ist schonender als du denkst.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-full text-sm font-medium font-body hover:bg-charcoal/85 transition-colors duration-200 whitespace-nowrap"
                >
                  Beratungsgespräch buchen
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
