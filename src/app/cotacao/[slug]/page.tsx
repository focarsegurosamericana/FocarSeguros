import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { getQuoteCategory, quoteCategories } from "@/lib/quote-types";

export function generateStaticParams() {
  return quoteCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getQuoteCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | Cotação Online | Focar Seguros`,
    description: category.subtitle,
  };
}

export default async function CotacaoCategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getQuoteCategory(slug);
  if (!category) notFound();

  return (
    <QuoteWizard
      category={{
        slug: category.slug,
        title: category.title,
        subtitle: category.subtitle,
        steps: category.steps,
      }}
    />
  );
}
