const services = [
  {
    title: "Banho & Tosa",
    description:
      "Banho, tosa higiênica ou na tesoura com produtos hipoalergênicos e muito carinho.",
    icon: (
      <path d="M12 2a5 5 0 0 0-5 5v1.05A6 6 0 0 0 2 14v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a6 6 0 0 0-5-5.95V7a5 5 0 0 0-5-5Zm-3 5a3 3 0 1 1 6 0v1H9V7Z" />
    ),
  },
  {
    title: "Consultas Veterinárias",
    description:
      "Atendimento clínico completo com veterinários experientes, do check-up à vacinação.",
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c1.86 0 3.3 1 4 2.09C11.2 6 12.64 5 14.5 5 18 5 20.5 8.5 21.5 12.5 19 16.65 12 21 12 21Z" />
    ),
  },
  {
    title: "Hotel para Pets",
    description:
      "Hospedagem segura e confortável para o seu pet enquanto você viaja.",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" />
    ),
  },
  {
    title: "Loja de Produtos",
    description:
      "Ração, brinquedos, acessórios e tudo que seu pet precisa em um só lugar.",
    icon: (
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Zm0 8a3 3 0 0 0 6 0m0 0a3 3 0 0 0 6 0" />
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Nossos Serviços
        </h2>
        <p className="mt-3 text-foreground/70">
          Tudo que o seu pet precisa, com quem entende do assunto.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-start gap-4 rounded-2xl border border-black/[.06] p-6 dark:border-white/[.08]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-brand">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                {service.icon}
              </svg>
            </span>
            <h3 className="text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
