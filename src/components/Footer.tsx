import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon } from "./icons";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { insuranceTypes } from "@/lib/insurance-types";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy-950)] pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-white">
                Focar<span className="text-[var(--color-sky-400)]">Seguros</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Corretora de seguros em {siteConfig.city}/{siteConfig.state}.
              Proteção para o que mais importa, com atendimento de verdade.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              aria-label="Instagram da Focar Seguros"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Seguros</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {insuranceTypes.slice(0, 6).map((t) => (
                <li key={t.slug}>
                  <Link href="/#seguros" className="hover:text-white">
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Institucional</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/#sobre" className="hover:text-white">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/#parceiros" className="hover:text-white">
                  Seguradoras parceiras
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contato</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Feito com cuidado em {siteConfig.city}/{siteConfig.state}.</p>
        </div>
      </div>
    </footer>
  );
}
