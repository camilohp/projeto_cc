export function CtaSection() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-brand-foreground">
          Seu pet merece o melhor cuidado
        </h2>
        <p className="max-w-xl text-brand-foreground/90">
          Agende agora mesmo um horário para banho, tosa ou consulta e
          garanta mais saúde e bem-estar para o seu companheiro.
        </p>
        <a
          href="#contact"
          className="rounded-full bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:opacity-90"
        >
          Agende um horário
        </a>
      </div>
    </section>
  );
}
