import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Large 404 */}
        <p className="font-heading text-[120px] md:text-[160px] leading-none text-gold select-none">
          404
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/40 mx-auto my-6" />

        {/* Title */}
        <h1 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
          Seite nicht gefunden
        </h1>

        {/* Description */}
        <p className="font-body text-charcoal/60 text-base leading-relaxed mb-10">
          Diese Seite existiert leider nicht. Vielleicht wurde sie verschoben
          oder der Link ist fehlerhaft.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="btn-gold rounded-full px-8 py-4 font-body font-medium text-base inline-block"
        >
          Zurück zur Startseite
        </Link>

        {/* Secondary link */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="font-body text-sm text-charcoal/40 hover:text-gold transition-colors"
          >
            Hilfe? Kontaktiere uns →
          </Link>
        </div>
      </div>
    </div>
  );
}
