"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useToast } from "@/components/ui/Toast";
import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-cream-dark px-4 py-3 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition bg-white font-body text-sm text-charcoal placeholder:text-charcoal/30";

const labelClass = "block text-sm font-medium font-body text-charcoal mb-1";

interface FormState {
  name: string;
  email: string;
  telefon: string;
  kategorie: string;
  nachricht: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  telefon: "",
  kategorie: "",
  nachricht: "",
};

export default function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showToast("Demo-Modus: In der fertigen Version wird Ihre Nachricht gesendet.");
    setForm(initialForm);
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl mb-3">Kontakt</h1>
            <p className="font-body text-white/70 text-lg">
              Wir freuen uns auf deine Nachricht
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Contact Form */}
            <FadeIn direction="right">
              <div>
                <h2 className="font-heading text-2xl text-charcoal mb-6">Nachricht schreiben</h2>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dein vollständiger Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      E-Mail <span className="text-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="deine@email.de"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="telefon" className={labelClass}>
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      placeholder="+49 ..."
                      value={form.telefon}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="kategorie" className={labelClass}>
                      Kategorie
                    </label>
                    <select
                      id="kategorie"
                      name="kategorie"
                      value={form.kategorie}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Bitte wählen…
                      </option>
                      <option value="termin">Terminanfrage</option>
                      <option value="schulungen">Frage zu Schulungen</option>
                      <option value="shop">Hilfe zum Onlineshop</option>
                      <option value="allgemein">Allgemeine Fragen</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="nachricht" className={labelClass}>
                      Nachricht
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      rows={4}
                      placeholder="Wie können wir dir helfen?"
                      value={form.nachricht}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold rounded-full w-full py-3 font-body font-medium text-sm cursor-pointer"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Right — Info */}
            <FadeIn direction="left" delay={0.1}>
              <div>
                {/* Contact card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <p className="font-heading text-xl text-charcoal mb-1">Studio of Glamour</p>
                  <p className="font-body text-xs text-gold-dark tracking-widest uppercase mb-6">
                    Beauty &amp; Lash Studio
                  </p>

                  <ul className="space-y-4 font-body text-sm text-charcoal/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 text-gold" aria-hidden="true">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </span>
                      <span>
                        Humboldtstr. 40
                        <br />
                        81543 München
                      </span>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-gold" aria-hidden="true">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </span>
                      <a
                        href="tel:+491737921999"
                        className="hover:text-gold transition-colors"
                      >
                        +49 173 792 1999
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-gold" aria-hidden="true">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </span>
                      <a
                        href="mailto:info@studioofglamour.de"
                        className="hover:text-gold transition-colors"
                      >
                        info@studioofglamour.de
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <span className="text-gold" aria-hidden="true">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.533 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 22a9.94 9.94 0 0 1-5.347-1.555l-.383-.23-3.355.878.896-3.27-.249-.397A9.94 9.94 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
                        </svg>
                      </span>
                      <a
                        href="https://wa.me/491737921999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold transition-colors"
                      >
                        WhatsApp schreiben
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Opening hours card */}
                <div className="bg-cream rounded-2xl p-8 mt-6">
                  <h3 className="font-heading text-lg text-charcoal mb-4">Öffnungszeiten</h3>
                  <ul className="space-y-2 font-body text-sm">
                    <li className="flex justify-between text-charcoal/80">
                      <span className="font-medium">Mo – Sa</span>
                      <span>Nur nach Vereinbarung</span>
                    </li>
                    <li className="flex justify-between text-charcoal/50">
                      <span className="font-medium">Sonntag</span>
                      <span>Geschlossen</span>
                    </li>
                  </ul>
                </div>

                {/* Social links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://instagram.com/studio_of_glamour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow font-body text-sm text-charcoal/80 hover:text-gold"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com/@studio_of_glamour"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow font-body text-sm text-charcoal/80 hover:text-gold"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="w-full h-64 bg-cream-dark relative overflow-hidden flex items-center justify-center">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--color-charcoal) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Crosshair dot */}
        <div className="absolute w-3 h-3 rounded-full bg-gold shadow-lg" />
        <div className="absolute w-8 h-8 rounded-full border-2 border-gold/50 animate-ping" />

        <div className="relative z-10 text-center">
          <p className="font-body text-sm font-medium text-charcoal/70 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm">
            📍 Humboldtstr. 40, 81543 München
          </p>
          <a
            href="https://maps.google.com/?q=Humboldtstr.+40,+81543+München"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-body text-xs text-gold hover:text-gold-dark transition-colors underline underline-offset-2"
          >
            In Google Maps öffnen
          </a>
        </div>
      </section>
    </div>
  );
}
