import Link from "next/link";
import {
  Home,
  Car as CarIcon,
  Heart,
  MapPin,
  Sparkles,
  MousePointerClick,
} from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { whatsappHref, siteConfig } from "@/lib/site-config";

const heroCtaClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-blue-600)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--color-blue-600)]/20 transition-all hover:-translate-y-0.5 hover:bg-[var(--color-blue-700)] hover:shadow-xl";

const benefits = [
  {
    icon: Home,
    tone: "bg-[var(--color-navy-900)]",
    text: "Conforto e segurança para a sua família, sem burocracia.",
  },
  {
    icon: CarIcon,
    tone: "bg-[var(--color-blue-600)]",
    text: "Você dirigindo tranquilo, com o carro protegido de verdade.",
  },
  {
    icon: Heart,
    tone: "bg-[var(--color-navy-800)]",
    text: "Parceiro ideal para os seus planos de vida.",
  },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-white pt-14 pb-24 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(0,159,232,0.16),transparent)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-mist-100)] px-4 py-1.5 text-sm font-medium text-[var(--color-blue-700)]">
            <MapPin className="h-4 w-4" />
            Seguros em Americana/SP e região
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-navy-900)] sm:text-5xl lg:text-6xl">
            Com a gente,
            <br />
            você <span className="text-[var(--color-sky-500)]">protege mais</span>.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-slate-600)]">
            Carro, moto, frota, vida, residência, viagem ou app: a Focar
            Seguros encontra a cobertura certa para você, com atendimento
            próximo e cotação sem compromisso.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/cotacao" className={heroCtaClass}>
              <MousePointerClick className="h-5 w-5" />
              Cotação Online
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className={heroCtaClass}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fazer cotação com consultor - WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-[var(--color-slate-400)]">
            Atendimento humano, sem robôs. Fale agora com um corretor da{" "}
            {siteConfig.name}.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[linear-gradient(135deg,var(--color-navy-900),var(--color-blue-600)_55%,var(--color-sky-500))] opacity-95 blur-0" />
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-[radial-gradient(120%_100%_at_100%_0%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="relative m-6 rounded-[2rem] bg-white p-2 shadow-2xl shadow-[var(--color-navy-950)]/30">
            <div className="flex items-center justify-between rounded-2xl px-5 py-4">
              <span className="text-base font-semibold text-[var(--color-navy-900)]">
                Sobre nós
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-navy-900)] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[var(--color-blue-600)] px-5 py-4 text-white">
              <span className="text-base font-semibold">Benefícios</span>
            </div>

            <div className="px-5 pb-6 pt-5">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold leading-snug text-[var(--color-navy-900)]">
                Com a gente, você{" "}
                <span className="text-[var(--color-blue-600)]">
                  conquista mais
                </span>
              </p>

              <div className="mt-5 flex flex-col gap-4">
                {benefits.map(({ icon: Icon, tone, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${tone}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="pt-2 text-sm leading-relaxed text-[var(--color-slate-600)]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -right-6 top-6 hidden rotate-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-[var(--color-navy-950)]/20 sm:block">
            <p className="text-xs font-medium text-[var(--color-slate-400)]">
              Cotação
            </p>
            <p className="text-sm font-bold text-[var(--color-navy-900)]">
              Sem compromisso
            </p>
          </div>

          <div className="absolute -left-10 -bottom-6 hidden -rotate-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-[var(--color-navy-950)]/20 sm:block">
            <p className="text-xs font-medium text-[var(--color-slate-400)]">
              Atendimento
            </p>
            <p className="text-sm font-bold text-[var(--color-navy-900)]">
              Local, em Americana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
