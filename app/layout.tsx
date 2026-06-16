import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

// Chakra Petch: tipografía técnica con cortes angulares; lee como un HUD de
// juego competitivo. Se usa con restricción en titulares y cifras.
const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Inter para cuerpo: neutra y muy legible en densidades altas de datos.
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dota Patch-Aware Coach",
  description: "Asistente de draft, parches y análisis post-partida para Dota 2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
