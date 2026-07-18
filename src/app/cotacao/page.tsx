import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { quoteCategories } from "@/lib/quote-types";

export const metadata: Metadata = {
  title: "Cotação Online | Focar Seguros",
  description:
    "Peça sua cotação de seguro online com a Focar Seguros. Escolha o tipo de seguro e preencha o formulário em poucos passos.",
};

export default function CotacaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[var(--color-navy-950)] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-300)]">
            Cotação online
          </span>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl">
            Qual seguro você deseja cotar?
          </h1>
          <p className="mt-3 max-w-xl text-white/70">
            Escolha o tipo de seguro abaixo e preencha um formulário rápido.
            Nossa equipe recebe seus dados e te retorna com a melhor cotação.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {quoteCategories.map(({ slug, title, icon: Icon }) => (
              <Link
                key={slug}
                href={`/cotacao/${slug}`}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-transparent hover:bg-[linear-gradient(160deg,var(--color-navy-900),var(--color-blue-600)_65%,var(--color-sky-500))] hover:shadow-xl hover:shadow-[var(--color-blue-600)]/30"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors group-hover:bg-white/15">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-white">
                  {title.replace("Seguro ", "")}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-[var(--color-sky-300)] opacity-0 transition-opacity group-hover:opacity-100">
                  Cotar agora <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
