import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InsuranceCarousel } from "@/components/InsuranceCarousel";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <InsuranceCarousel />
        <About />
        <Partners />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
