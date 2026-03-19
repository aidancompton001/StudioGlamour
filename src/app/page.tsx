"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { img } from "@/lib/utils";

const services = [
  {
    title: "Classic Lashes",
    description: "Die zeitlose 1:1 Technik für einen natürlichen, definierten Blick.",
    price: "ab 100 €",
    tag: "Klassisch",
    image: img("/images/studio-work-1.jpg"),
    imageAlt: "Classic Wimpernverlängerung",
  },
  {
    title: "Volume Lashes",
    description: "Maximales Volumen mit feinen Fächern für dramatische Augen.",
    price: "ab 120 €",
    tag: "Volumen",
    image: img("/images/studio-work-2.jpg"),
    imageAlt: "Volumen Wimpernverlängerung",
  },
  {
    title: "Lash Lifting",
    description: "Dauerhaft aufgeweckte Augen – ganz ohne Extensions.",
    price: "ab 65 €",
    tag: "Lifting",
    image: img("/images/studio-work-3.jpg"),
    imageAlt: "Lash Lifting Behandlung",
  },
];

const features = [
  {
    title: "Erfahrung & Expertise",
    description: "Jahrelange Erfahrung und stetige Weiterbildung garantieren perfekte Ergebnisse.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Produkte",
    description: "Ausschließlich hautverträgliche, langlebige Materialien allerhöchster Qualität.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "München Zentrum",
    description: "Zentral gelegenes Studio in der Humboldtstraße – bequem zu erreichen.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Persönliche Beratung",
    description: "Individuelle Beratung für den Blick, der zu dir und deinem Lifestyle passt.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Hier erscheint eine echte Bewertung Ihrer Kundinnen",
    name: "⭐⭐⭐⭐⭐ Google Bewertung",
  },
  {
    quote: "Echte Erfahrungsberichte schaffen Vertrauen — wir integrieren Ihre besten Reviews",
    name: "⭐⭐⭐⭐⭐ Instagram Feedback",
  },
  {
    quote: "Ihre zufriedenen Kundinnen sind die beste Werbung",
    name: "⭐⭐⭐⭐⭐ Kundenstimme",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background image */}
        <img
          src={img("/images/hero-banner.jpg")}
          alt="Studio of Glamour — Premium Wimpernverlängerung München"
          className="w-full h-full object-cover absolute inset-0"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/60 to-charcoal/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <p className="text-gold-light font-body text-sm uppercase tracking-[0.3em] mb-6">
              Premium Lash Studio · München
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <h1
              className="font-heading text-5xl md:text-7xl text-white leading-tight mb-6"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 2px 12px rgba(0,0,0,0.4)" }}
            >
              Dein Traumblick
              <br />
              <span
                className="text-gold-light italic"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 3px 16px rgba(0,0,0,0.5)" }}
              >
                beginnt hier.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p
              className="text-white font-body text-lg md:text-xl mb-10 max-w-xl mx-auto"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.3)" }}
            >
              Premium Wimpernverlängerung in München — für deinen natürlichen, strahlenden Blick.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="btn-gold rounded-full px-8 py-4 font-body font-medium text-base inline-block"
              >
                Termin buchen
              </Link>
              <Link
                href="/services"
                className="rounded-full px-8 py-4 font-body font-medium text-base border border-white/40 text-white hover:bg-white/10 transition-colors inline-block"
              >
                Leistungen ansehen
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="font-body text-xs tracking-widest uppercase">Entdecken</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── 2. SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-3">Was wir anbieten</p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">Unsere Leistungen</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.15}>
                <div className="group rounded-2xl bg-cream p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-48 rounded-xl mb-6 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-block text-xs font-body font-medium text-gold uppercase tracking-wider mb-2">
                    {service.tag}
                  </span>
                  <h3 className="font-heading text-xl text-charcoal mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-heading text-lg text-gold">{service.price}</span>
                    <Link
                      href="/booking"
                      className="text-xs font-body font-medium text-charcoal/50 hover:text-gold transition-colors"
                    >
                      Buchen →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="font-body text-sm text-charcoal/60 hover:text-gold transition-colors inline-flex items-center gap-2 border-b border-charcoal/20 hover:border-gold pb-0.5"
              >
                Alle Leistungen & Preise ansehen →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 3. WHY US ─────────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-3">Warum Studio of Glamour</p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">Was uns auszeichnet</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.12}>
                <div className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg text-charcoal mb-3">{feature.title}</h3>
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIALS ───────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-3">Kundenstimmen</p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal">
                Was unsere Kundinnen sagen
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={testimonial.name} delay={i * 0.15}>
                <div className="bg-cream rounded-2xl p-8 flex flex-col gap-6">
                  {/* Stars */}
                  <div className="flex gap-1" aria-label="5 von 5 Sternen">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-body italic text-charcoal/70 leading-relaxed text-base flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <p className="font-heading text-charcoal text-sm">— {testimonial.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INSTAGRAM CTA ──────────────────────────────────────── */}
      <section className="bg-rose py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-gold font-body text-sm uppercase tracking-[0.25em] mb-3">Social Media</p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4">
                Folge uns auf Instagram
              </h2>
              <a
                href="https://instagram.com/studio.of.glamour"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-charcoal/60 hover:text-gold transition-colors"
              >
                @studio.of.glamour
              </a>
            </div>
          </FadeIn>

          {/* Instagram grid: 3 cols on mobile, 6 cols on desktop */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3 mb-10">
            {[
              { src: img("/images/studio-work-1.jpg"), alt: "Lash Work — Studio of Glamour" },
              { src: img("/images/studio-work-2.jpg"), alt: "Volumen Wimpern — Studio of Glamour" },
              { src: img("/images/studio-work-3.jpg"), alt: "Lash Lifting — Studio of Glamour" },
              { src: img("/images/studio-work-4.jpg"), alt: "Wimpernverlängerung München" },
              { src: img("/images/hero-banner-2.jpg"), alt: "Premium Lash Studio München" },
              { src: img("/images/hero-banner-3.jpg"), alt: "Beauty Studio of Glamour" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <a
                  href="https://instagram.com/studio.of.glamour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-square rounded-xl overflow-hidden group"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center">
              <a
                href="https://instagram.com/studio.of.glamour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal text-white font-body font-medium text-sm px-8 py-3 rounded-full hover:bg-charcoal/80 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Auf Instagram folgen
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. FINAL CTA ──────────────────────────────────────────── */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gold-light font-body text-sm uppercase tracking-[0.25em] mb-5">
              Dein nächster Schritt
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Bereit für deinen Traumblick?
            </h2>
            <p className="font-body text-white/60 text-lg mb-10 max-w-lg mx-auto">
              Sichere dir jetzt deinen Wunschtermin — wir freuen uns auf dich.
            </p>
            <Link
              href="/booking"
              className="btn-gold rounded-full px-10 py-4 font-body font-medium text-base inline-block"
            >
              Jetzt Termin buchen
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
