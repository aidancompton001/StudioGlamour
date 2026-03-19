"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

// ── Animated counter ────────────────────────────────────────────────────────

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function AnimatedCounter({ target, suffix = "", label, delay = 0 }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const durationMs = 1400;
    const delayMs = delay * 1000;
    let raf: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      if (elapsed < delayMs) {
        raf = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min((elapsed - delayMs) / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, delay]);

  return (
    <div ref={ref} className="text-center px-4">
      <motion.span
        className="font-heading text-4xl md:text-5xl text-gold block leading-tight"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay }}
      >
        {current}
        {suffix}
      </motion.span>
      <span className="font-body text-sm text-charcoal/60 mt-2 block tracking-wide">
        {label}
      </span>
    </div>
  );
}

// ── Gallery variant cycle ────────────────────────────────────────────────────

const galleryVariants: Array<"gold" | "rose" | "dark"> = [
  "gold",
  "rose",
  "dark",
  "rose",
  "gold",
  "dark",
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream font-body">
      {/* ── Hero ── */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl text-white tracking-wide">
              Über mich
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ── Meet Justine ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — portrait */}
          <FadeIn direction="left">
            <div className="relative">
              <ImagePlaceholder
                text="Foto: Justine Rollinger"
                variant="rose"
                className="w-full aspect-[3/4] rounded-2xl"
              />
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Right — bio */}
          <FadeIn direction="right" delay={0.15}>
            <div className="flex flex-col justify-center h-full">
              {/* Accent bar */}
              <div className="w-10 h-0.5 bg-gold mb-6" />

              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6 leading-snug">
                Hallo, ich bin Justine!
              </h2>

              <div className="flex flex-col gap-4 font-body text-charcoal/70 text-base leading-relaxed">
                <p>
                  Wimpern sind für mich mehr als Ästhetik — sie sind Ausdruck
                  von Persönlichkeit. Seit über fünf Jahren begleite ich
                  Kundinnen dabei, ihren ganz eigenen Look zu finden: ob
                  natürlich-klassisch oder dramatisch glamourös.
                </p>
                <p>
                  In meinem kleinen, feinen Studio in München-Obergiesing
                  arbeite ich ausschließlich mit hochwertigen Materialien und
                  nehme mir für jede Behandlung die Zeit, die sie verdient.
                  Keine Hektik, keine Fließbandarbeit — nur du, deine Wimpern
                  und das perfekte Ergebnis.
                </p>
                <p>
                  Ich habe mehrere Schulungskurse absolviert und bilde mich
                  kontinuierlich weiter, damit ich dir stets die neuesten
                  Techniken und sichersten Materialien anbieten kann. Dein
                  Wohlbefinden steht dabei immer an erster Stelle.
                </p>
              </div>

              <p className="font-heading italic text-gold text-xl mt-8 leading-snug">
                „Schönheit beginnt in dem Moment, in dem du entscheidest, du
                selbst zu sein."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="bg-cream-dark py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-2xl text-charcoal text-center mb-12 tracking-wide">
              In Zahlen
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedCounter
              target={500}
              suffix="+"
              label="Zufriedene Kundinnen"
              delay={0}
            />
            <AnimatedCounter
              target={5}
              suffix="+"
              label="Jahre Erfahrung"
              delay={0.1}
            />
            <AnimatedCounter
              target={1000}
              suffix="+"
              label="Behandlungen"
              delay={0.2}
            />
            <AnimatedCounter
              target={5}
              label="Schulungskurse"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── Studio Gallery ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="text-center mb-10">
            <div className="w-10 h-0.5 bg-gold mx-auto mb-4" />
            <h2 className="font-heading text-3xl text-charcoal tracking-wide">
              Unser Studio
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryVariants.map((variant, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <ImagePlaceholder
                variant={variant}
                className={`w-full rounded-xl ${
                  i === 0 || i === 3 ? "aspect-[4/5]" : "aspect-square"
                }`}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Google Maps Placeholder ── */}
      <section className="w-full h-64 relative overflow-hidden bg-cream-dark">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-cream to-cream-dark" />

        {/* Grid lines suggesting a map */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="map-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#2D2D2D"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
        </svg>

        {/* Stylised road lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#B8956A" strokeWidth="3" />
          <line x1="35%" y1="0" x2="45%" y2="100%" stroke="#B8956A" strokeWidth="2" />
          <line x1="60%" y1="0" x2="55%" y2="100%" stroke="#2D2D2D" strokeWidth="1.5" />
        </svg>

        {/* Address card overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-8 py-5 flex items-center gap-4 max-w-xs w-full mx-4">
            {/* Pin icon */}
            <div className="shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="font-heading text-charcoal text-base leading-tight">
                Studio of Glamour
              </p>
              <p className="font-body text-charcoal/60 text-sm mt-0.5">
                Humboldtstr. 40, 81543 München
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
