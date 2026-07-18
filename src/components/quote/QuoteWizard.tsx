"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import type { QuoteField } from "@/lib/quote-types";
import { whatsappHref, siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons";
import { maskCpfCnpj, maskCep, maskDate, maskPhone } from "./masks";

type Values = Record<string, string>;
type Checklists = Record<string, string[]>;

const maskFor: Partial<Record<QuoteField["type"], (v: string) => string>> = {
  cpfCnpj: maskCpfCnpj,
  cep: maskCep,
  date: maskDate,
  phone: maskPhone,
};

function fieldKey(stepId: string, fieldName: string) {
  return `${stepId}.${fieldName}`;
}

function isFieldFilled(field: QuoteField, values: Values, checklists: Checklists, stepId: string) {
  const key = fieldKey(stepId, field.name);
  if (field.type === "checklist") return true;
  if (field.required === false) return true;
  return Boolean(values[key]?.trim());
}

type WizardCategory = {
  slug: string;
  title: string;
  subtitle: string;
  steps: { id: string; label: string; fields: QuoteField[] }[];
};

export function QuoteWizard({ category }: { category: WizardCategory }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [checklists, setChecklists] = useState<Checklists>({});
  const [sent, setSent] = useState(false);

  const steps = category.steps;
  const isLastStep = stepIndex === steps.length - 1;

  const setValue = (stepId: string, name: string, raw: string, type: QuoteField["type"]) => {
    const mask = maskFor[type];
    const key = fieldKey(stepId, name);
    setValues((v) => ({ ...v, [key]: mask ? mask(raw) : raw }));
  };

  const toggleChecklist = (stepId: string, name: string, option: string) => {
    const key = fieldKey(stepId, name);
    setChecklists((c) => {
      const current = c[key] ?? [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...c, [key]: next };
    });
  };

  const currentStep = steps[stepIndex];
  const canAdvance = currentStep.fields.every((f) =>
    isFieldFilled(f, values, checklists, currentStep.id)
  );

  const goNext = () => {
    if (!canAdvance) return;
    if (isLastStep) {
      handleSubmit();
      return;
    }
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const handleSubmit = () => {
    const lines = [`Olá! Quero uma cotação de *${category.title}*.`];
    for (const step of steps) {
      for (const field of step.fields) {
        const key = fieldKey(step.id, field.name);
        if (field.type === "checklist") {
          const selected = checklists[key];
          if (selected?.length) lines.push(`${field.label}: ${selected.join(", ")}`);
          continue;
        }
        const value = values[key];
        if (value?.trim()) lines.push(`${field.label}: ${value}`);
      }
    }
    setSent(true);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[var(--color-mist-50)]">
      <div className="bg-[var(--color-navy-950)]">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-5 py-4 sm:px-8">
          <Link
            href="/cotacao"
            aria-label="Voltar para os tipos de seguro"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <span className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-white">
            Focar<span className="text-[var(--color-sky-400)]">Seguros</span>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-navy-900)] sm:text-3xl">
          {category.title}
        </h1>
        <p className="mt-1 text-[var(--color-slate-600)]">{category.subtitle}</p>

        {sent ? (
          <div className="mt-10 rounded-[1.75rem] bg-white p-8 text-center shadow-xl shadow-[var(--color-navy-950)]/5 sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-mist-100)] text-[var(--color-navy-900)]">
              <Check className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-[var(--color-navy-900)]">
              Cotação enviada!
            </h2>
            <p className="mx-auto mt-2 max-w-sm text-[var(--color-slate-600)]">
              Abrimos o WhatsApp com os dados que você preencheu. É só enviar a
              mensagem para nossa equipe dar continuidade à sua cotação.
            </p>
            <Link
              href="/cotacao"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--color-mist-200)] px-6 py-3 text-sm font-semibold text-[var(--color-navy-900)] transition-colors hover:border-[var(--color-sky-400)]"
            >
              Solicitar outra cotação
            </Link>
          </div>
        ) : (
          <div className="mt-10 rounded-[1.75rem] bg-white p-6 shadow-xl shadow-[var(--color-navy-950)]/5 sm:p-9">
            <ol>
              {steps.map((step, i) => {
                const isActive = i === stepIndex;
                const isDone = i < stepIndex;
                const isLast = i === steps.length - 1;
                return (
                  <li key={step.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <button
                        type="button"
                        disabled={i > stepIndex}
                        onClick={() => isDone && setStepIndex(i)}
                        aria-current={isActive ? "step" : undefined}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                          isActive
                            ? "bg-[var(--color-navy-900)] text-white"
                            : isDone
                              ? "cursor-pointer bg-[var(--color-sky-400)] text-white"
                              : "bg-[var(--color-mist-200)] text-[var(--color-slate-400)]"
                        }`}
                      >
                        {isDone ? <Check className="h-4 w-4" /> : i + 1}
                      </button>
                      {!isLast && (
                        <div
                          className={`w-px flex-1 ${
                            isDone ? "bg-[var(--color-sky-400)]" : "bg-[var(--color-mist-200)]"
                          }`}
                        />
                      )}
                    </div>

                    <div className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}>
                      <p
                        className={`pt-1 text-sm font-bold uppercase tracking-wide ${
                          isActive || isDone
                            ? "text-[var(--color-navy-900)]"
                            : "text-[var(--color-slate-400)]"
                        }`}
                      >
                        {step.label}
                      </p>

                      {isActive && (
                        <div className="mt-5">
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {step.fields.map((field) => (
                              <FieldInput
                                key={field.name}
                                field={field}
                                stepId={step.id}
                                value={values[fieldKey(step.id, field.name)] ?? ""}
                                selected={checklists[fieldKey(step.id, field.name)] ?? []}
                                onChange={(raw) => setValue(step.id, field.name, raw, field.type)}
                                onToggleOption={(option) =>
                                  toggleChecklist(step.id, field.name, option)
                                }
                              />
                            ))}
                          </div>

                          <div className="mt-7 flex items-center gap-3">
                            {stepIndex > 0 && (
                              <button
                                type="button"
                                onClick={goBack}
                                className="rounded-full border border-[var(--color-mist-200)] px-6 py-3 text-sm font-semibold text-[var(--color-navy-900)] transition-colors hover:border-[var(--color-sky-400)]"
                              >
                                Voltar
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={goNext}
                              disabled={!canAdvance}
                              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-900)] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-blue-700)] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              {isLastStep && <WhatsAppIcon className="h-4 w-4" />}
                              {isLastStep ? "Solicitar Cotação" : "Próximo"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-[var(--color-slate-400)]">
          Prefere falar direto?{" "}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-blue-700)] hover:underline"
          >
            Fale com a Focar Seguros pelo WhatsApp
          </a>{" "}
          ({siteConfig.city}/{siteConfig.state})
        </p>
      </div>
    </div>
  );
}

function FieldInput({
  field,
  value,
  selected,
  onChange,
  onToggleOption,
}: {
  field: QuoteField;
  stepId: string;
  value: string;
  selected: string[];
  onChange: (raw: string) => void;
  onToggleOption: (option: string) => void;
}) {
  const spanClass = field.span === 2 ? "sm:col-span-2" : "";
  const baseInput =
    "rounded-xl border border-[var(--color-mist-200)] bg-[var(--color-mist-50)] px-4 py-3 text-sm text-[var(--color-navy-900)] outline-none transition-colors focus:border-[var(--color-sky-400)] focus:bg-white";

  if (field.type === "checklist") {
    return (
      <div className={`flex flex-col gap-2 ${spanClass}`}>
        <span className="text-sm font-medium text-[var(--color-navy-900)]">{field.label}</span>
        <div className="flex flex-wrap gap-2">
          {field.options?.map((option) => {
            const isChecked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => onToggleOption(option)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                  isChecked
                    ? "border-[var(--color-navy-900)] bg-[var(--color-navy-900)] text-white"
                    : "border-[var(--color-mist-200)] bg-[var(--color-mist-50)] text-[var(--color-slate-600)] hover:border-[var(--color-sky-400)]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className={`flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)] ${spanClass}`}>
        {field.label}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          rows={3}
          className={`resize-none ${baseInput}`}
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className={`flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)] ${spanClass}`}>
        {field.label}
        <select value={value} onChange={(e) => onChange(e.target.value)} className={baseInput}>
          <option value="" disabled>
            Selecione
          </option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  const inputType = field.type === "email" ? "email" : field.type === "text" ? "text" : "tel";

  return (
    <label className={`flex flex-col gap-1.5 text-sm font-medium text-[var(--color-navy-900)] ${spanClass}`}>
      {field.label}
      <input
        type={inputType}
        inputMode={field.type === "email" || field.type === "text" ? undefined : "numeric"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className={baseInput}
      />
    </label>
  );
}
