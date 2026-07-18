import Image from "next/image";

const partners = [
  { name: "Suhai Seguradora", logo: "/partners/suhai-seguradora.png" },
  { name: "Bradesco Seguros", logo: "/partners/bradesco-seguros.png" },
  { name: "Azul Seguros", logo: "/partners/azul-seguros.png" },
  { name: "Porto Seguro", logo: "/partners/porto-seguro.png" },
  { name: "Mapfre", logo: "/partners/mapfre.png" },
  { name: "Allianz", logo: "/partners/allianz.png" },
  { name: "HDI Seguros", logo: "/partners/hdi-seguros.png" },
  { name: "Itaú Seguros", logo: "/partners/itau-seguros.png" },
  { name: "Marítima Seguros", logo: "/partners/maritima-seguros.png" },
  { name: "Tokio Marine Seguros", logo: "/partners/tokio-marine.png" },
  { name: "SulAmérica Seguros", logo: "/partners/sulamerica.png" },
  { name: "Sompo Seguros", logo: "/partners/sompo-seguros.png" },
];

// Duplicamos a lista para o loop do marquee ficar contínuo (a animação anda 50%).
const track = [...partners, ...partners];

export function Partners() {
  return (
    <section id="parceiros" className="bg-[var(--color-navy-950)] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-sky-300)]">
          Trabalhamos com as principais seguradoras do mercado
        </p>

        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-4">
            {track.map(({ name, logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-4 shadow-sm sm:h-24 sm:w-48"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    sizes="192px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
