import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 sm:flex-row sm:py-28">
        <div className="flex flex-1 flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Cuidado e carinho para o seu melhor amigo
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70">
            Na Camilo&apos;s Petshop, seu pet encontra banho, tosa, consultas
            veterinárias e tudo que precisa para viver com mais saúde e
            felicidade.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-brand-foreground transition-colors hover:opacity-90"
            >
              Conheça nossos serviços
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/[.1] px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-black/[.04] dark:border-white/[.15] dark:hover:bg-white/[.06]"
            >
              Fale conosco
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="https://picsum.photos/seed/camilos-petshop-hero/640/480"
            alt="Cachorro feliz sendo cuidado na Camilo's Petshop"
            width={640}
            height={480}
            priority
            className="w-full max-w-md rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
