import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Poppins({
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focar Seguros | Seguros em Americana/SP",
  description:
    "Focar Seguros: proteção para carro, moto, frota, vida, residência, viagem e motoristas de aplicativo. Cotação rápida e atendimento humano em Americana/SP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
