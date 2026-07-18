"use client";

import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/site-config";

const navLinks = [
  { href: "#seguros", label: "Seguros" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_20px_rgba(6,21,50,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#topo" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-navy-900)] text-white">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-navy-900)]">
            Focar<span className="text-[var(--color-sky-500)]">Seguros</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-slate-600)] transition-colors hover:text-[var(--color-navy-900)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-900)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--color-blue-700)] hover:shadow-md"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fazer cotação
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-navy-900)] md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-mist-200)] bg-white px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-navy-900)] hover:bg-[var(--color-mist-50)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-navy-900)] px-5 py-3 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Fazer cotação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
