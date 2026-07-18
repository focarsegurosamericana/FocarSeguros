// Placeholder até recebermos a lista real de seguradoras parceiras e seus logos.
// Basta trocar o array `partners` por { name, logoSrc } quando os logos chegarem.

import { ShieldCheck } from "lucide-react";

const partners = [
  "Seguradora Parceira",
  "Seguradora Parceira",
  "Seguradora Parceira",
  "Seguradora Parceira",
  "Seguradora Parceira",
  "Seguradora Parceira",
];

export function Partners() {
  return (
    <section id="parceiros" className="bg-[var(--color-navy-950)] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-300)]">
          Trabalhamos com as principais seguradoras do mercado
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center transition-colors hover:border-white/25 hover:bg-white/10"
            >
              <ShieldCheck className="h-6 w-6 text-white/40" />
              <span className="text-xs font-medium text-white/50">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
