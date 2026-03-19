"use client";

interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
  variant?: "gold" | "rose" | "dark";
}

const gradients = {
  gold: "from-gold/20 via-gold-light/30 to-cream-dark",
  rose: "from-rose via-rose/60 to-cream",
  dark: "from-charcoal via-charcoal/80 to-charcoal/60",
};

export function ImagePlaceholder({
  text = "",
  className = "",
  variant = "gold",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradients[variant]} flex items-center justify-center ${className}`}
    >
      {text && (
        <span className={`text-sm font-body ${variant === "dark" ? "text-white/40" : "text-charcoal/30"}`}>
          {text}
        </span>
      )}
    </div>
  );
}
