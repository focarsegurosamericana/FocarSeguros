import {
  Zap,
  Users,
  ShieldCheck,
  LifeBuoy,
  Wallet,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const benefits = [
  {
    icon: Zap,
    title: "Cotação rápida",
    description: "Você envia os dados e recebe as opções sem enrolação.",
  },
  {
    icon: Users,
    title: "Atendimento humano",
    description: "Um corretor de verdade te acompanha do início ao fim.",
  },
  {
    icon: ShieldCheck,
    title: "Seguradoras confiáveis",
    description: "Comparamos as principais seguradoras do mercado por você.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte em sinistros",
    description: "Se precisar acionar o seguro, estamos ao seu lado.",
  },
  {
    icon: Wallet,
    title: "Preço justo",
    description: "Condições de pagamento que cabem no seu bolso.",
  },
  {
    icon: MapPin,
    title: `Atendimento local`,
    description: `Baseados em ${siteConfig.city}/${siteConfig.state}, perto de você.`,
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-500)]">
              Sobre a {siteConfig.name}
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[var(--color-navy-900)] sm:text-4xl">
              Uma corretora feita para cuidar do que é seu
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-slate-600)]">
              A {siteConfig.name} é uma corretora de seguros em{" "}
              {siteConfig.city}/{siteConfig.state}, dedicada a ajudar pessoas
              e empresas a protegerem o que mais importa: o carro, a moto, a
              casa, a frota e, principalmente, a família. Comparamos as
              melhores seguradoras do mercado para encontrar a cobertura
              certa, no preço certo, com gente de verdade te atendendo.
            </p>
            <a
              href="#contato"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-navy-900)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-blue-700)]"
            >
              Falar com um corretor
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] p-6 transition-colors hover:border-[var(--color-sky-400)] hover:bg-white"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-navy-900)] text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-base font-bold text-[var(--color-navy-900)]">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-slate-600)]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
