"use client";

import { courses } from "@/lib/data/products";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { useToast } from "@/components/ui/Toast";
import Link from "next/link";

const featureBadges = ["Kleine Gruppen", "Zertifikat", "Starter-Kit inklusive"];

const includedItems = [
  "Theorie & Technik",
  "Praktische Übungen am Modell",
  "Starter-Kit mit Materialien",
  "Zertifikat nach Abschluss",
];

const cardVariants: Array<"gold" | "rose"> = ["gold", "rose", "gold", "rose", "gold"];

export default function AcademyPage() {
  const { showToast } = useToast();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl mb-4">Academy</h1>
            <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
              Werde Lash Artist — Schulungen von Justine Rollinger
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="font-body text-charcoal/80 text-lg leading-relaxed mb-8">
              Lerne von einer erfahrenen Lash Artistin. Unsere Schulungen verbinden Theorie mit
              intensiver Praxis — in kleinen Gruppen für maximalen Lernerfolg.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {featureBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-body text-sm font-medium text-charcoal bg-cream-dark border border-gold/20 rounded-full px-5 py-2"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <FadeIn key={course.id} delay={index * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                  <ImagePlaceholder
                    className="h-48 w-full"
                    variant={cardVariants[index % 2 === 0 ? 0 : 1]}
                    text={course.name}
                  />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="font-heading text-2xl text-charcoal leading-tight">
                        {course.name}
                      </h2>
                    </div>

                    <span className="inline-block bg-cream rounded-full px-3 py-1 text-xs font-body font-medium text-charcoal/70 mb-4 self-start">
                      {course.duration}
                    </span>

                    <p className="font-body text-charcoal/70 text-sm leading-relaxed mb-5">
                      {course.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {includedItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 font-body text-sm text-charcoal/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <p className="font-heading text-3xl text-gold mb-5">
                        {course.price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <button
                        onClick={() =>
                          showToast(
                            "Demo-Modus: In der fertigen Version können Sie hier eine Schulungsanfrage senden."
                          )
                        }
                        className="btn-gold rounded-full px-6 py-3 font-body font-medium text-sm w-full cursor-pointer"
                      >
                        Anfrage senden
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl text-charcoal mb-3">
              Unsicher welche Schulung?
            </h2>
            <p className="font-body text-charcoal/70 mb-8">
              Kontaktiere uns für eine persönliche Beratung
            </p>
            <Link
              href="/contact"
              className="btn-gold rounded-full px-8 py-3 font-body font-medium text-sm inline-block"
            >
              Jetzt kontaktieren
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
