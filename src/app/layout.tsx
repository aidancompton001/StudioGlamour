import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import { ToastProvider } from "@/components/ui/Toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CartSidebar } from "@/components/shop/CartSidebar";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio of Glamour – Premium Wimpernverlängerung München",
  description:
    "Dein Traumblick beginnt hier. Premium Wimpernverlängerung, Lash Lifting und mehr im Herzen von München.",
  charset: "utf-8",
} as Metadata & { charset: string };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CartSidebar />
        </ToastProvider>
      </body>
    </html>
  );
}
