"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { insuranceTypes } from "@/lib/insurance-types";
import { whatsappHref } from "@/lib/site-config";

export function InsuranceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const distance = (card?.offsetWidth ?? 280) + 20;
    track.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <section id="seguros" className="bg-[var(--color-mist-50)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-500)]">
              Nossas coberturas
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[var(--color-navy-900)] sm:text-4xl">
              Seguros para todos os
              <br className="hidden sm:block" /> momentos da sua vida
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-slate-600)]">
            Toque ou passe o mouse sobre um cartão para conhecer a cobertura.
            Qualquer veículo ou bem que você tenha — ou deseja ter — com um
            seguro de alta qualidade.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-6 pt-3"
          >
            {insuranceTypes.map(({ slug, title, description, icon: Icon }) => (
              <a
                key={slug}
                data-card
                href={whatsappHref(`Olá! Quero uma cotação de ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-[240px] shrink-0 snap-start flex-col justify-between rounded-[1.75rem] border border-[var(--color-mist-200)] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.06] hover:border-transparent hover:bg-[linear-gradient(160deg,var(--color-navy-900),var(--color-blue-600)_65%,var(--color-sky-500))] hover:shadow-2xl hover:shadow-[var(--color-blue-600)]/30 focus-visible:-translate-y-1.5 focus-visible:scale-[1.06] focus-visible:border-transparent focus-visible:bg-[linear-gradient(160deg,var(--color-navy-900),var(--color-blue-600)_65%,var(--color-sky-500))] focus-visible:shadow-2xl focus-visible:outline-none sm:w-[260px]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-mist-100)] text-[var(--color-navy-900)] transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white group-focus-visible:bg-white/15 group-focus-visible:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <BadgeCheck className="h-5 w-5 text-[var(--color-mist-200)] transition-colors duration-300 group-hover:text-[var(--color-sky-300)] group-focus-visible:text-[var(--color-sky-300)]" />
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-bold leading-snug text-[var(--color-navy-900)] transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-slate-600)] opacity-100 transition-opacity duration-300 group-hover:text-white/85 group-hover:opacity-100 group-focus-visible:text-white/85 group-focus-visible:opacity-100 sm:opacity-0">
                    {description}
                  </p>
                </div>

                <span className="mt-6 inline-flex h-9 w-9 items-center justify-center self-end rounded-full bg-[var(--color-mist-100)] text-[var(--color-navy-900)] transition-all duration-300 group-hover:bg-white group-hover:text-[var(--color-navy-900)] group-focus-visible:bg-white group-focus-visible:text-[var(--color-navy-900)]">
                  <ChevronRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-2 hidden items-center justify-end gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Ver seguros anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-mist-200)] bg-white text-[var(--color-navy-900)] transition-colors hover:border-[var(--color-sky-400)] hover:text-[var(--color-blue-700)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Ver próximos seguros"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-mist-200)] bg-white text-[var(--color-navy-900)] transition-colors hover:border-[var(--color-sky-400)] hover:text-[var(--color-blue-700)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
