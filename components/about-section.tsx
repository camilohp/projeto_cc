const differentiators = [
  {
    title: "Equipe especializada",
    description:
      "Profissionais treinados e apaixonados por animais cuidam do seu pet com atenção total.",
    icon: <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />,
  },
  {
    title: "Atendimento humanizado",
    description:
      "Cada pet é único — respeitamos o tempo e as necessidades de cada um.",
    icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.78 0L12 5.62l-1.02-1.02a5.5 5.5 0 1 0-7.78 7.78l1.02 1.02L12 21l7.78-7.6 1.02-1.02a5.5 5.5 0 0 0 0-7.78Z" />,
  },
  {
    title: "Produtos de qualidade",
    description:
      "Selecionamos marcas confiáveis de ração, higiene e acessórios para o seu pet.",
    icon: <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Por que escolher a Camilo&apos;s Petshop
          </h2>
          <p className="mt-3 text-foreground/70">
            Mais de cuidado, mais de confiança, mais de carinho.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
