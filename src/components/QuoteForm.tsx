"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "./icons";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { insuranceTypes } from "@/lib/insurance-types";

const contactItems = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: `+${siteConfig.whatsappNumber.replace(
      /^55(\d{2})(\d{5})(\d{4})$/,
      "$1 $2-$3"
    )}`,
    href: whatsappHref(),
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: siteConfig.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horário",
    value: siteConfig.hours,
    href: undefined,
  },
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [insurance, setInsurance] = useState(insuranceTypes[0].title);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá! Meu nome é ${name || "—"}.`,
      `Tenho interesse em: ${insurance}.`,
      phone ? `Meu telefone para contato: ${phone}.` : null,
      message ? `Mensagem: ${message}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="bg-[var(--color-mist-50)] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-500)]">
              Fale com a gente
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-[var(--color-navy-900)] sm:text-4xl">
              Peça sua cotação sem compromisso
            </h2>
            <p className="mt-4 max-w-md text-[var(--color-slate-600)]">
              Preencha o formulário e conversamos pelo WhatsApp, ou fale
              direto com a gente pelos canais abaixo.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-mist-200)] bg-white p-4 transition-colors hover:border-[var(--color-sky-400)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-navy-900)] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[var(--color-slate-400)]">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-[var(--color-navy-900)]">
                        {value}
                      </p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[var(--color-mist-200)] bg-white p-4 transition-colors hover:border-[var(--color-sky-400)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-navy-900)] text-white">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[var(--color-slate-400)]">
                    Instagram
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-navy-900)]">
                    @focar_seguros
                  </p>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-7 shadow-xl shadow-[var(--color-navy-950)]/5 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)]">
                Nome
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="rounded-xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] px-4 py-3 text-sm text-[var(--color-navy-900)] outline-none transition-colors focus:border-[var(--color-sky-400)] focus:bg-white"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)]">
                Telefone / WhatsApp
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(19) 99999-9999"
                  className="rounded-xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] px-4 py-3 text-sm text-[var(--color-navy-900)] outline-none transition-colors focus:border-[var(--color-sky-400)] focus:bg-white"
                />
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)] sm:col-span-2">
                Tipo de seguro
                <select
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="rounded-xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] px-4 py-3 text-sm text-[var(--color-navy-900)] outline-none transition-colors focus:border-[var(--color-sky-400)] focus:bg-white"
                >
                  {insuranceTypes.map((t) => (
                    <option key={t.slug} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)] sm:col-span-2">
                Mensagem (opcional)
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte um pouco mais sobre o que você precisa"
                  rows={4}
                  className="resize-none rounded-xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] px-4 py-3 text-sm text-[var(--color-navy-900)] outline-none transition-colors focus:border-[var(--color-sky-400)] focus:bg-white"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-navy-900)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--color-blue-700)]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
