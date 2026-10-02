const quickLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-black/[.06] dark:border-white/[.08]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-brand">Camilo&apos;s Petshop</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">
            Cuidado, saúde e carinho para o seu melhor amigo, todos os dias.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            <li>Rua das Flores, 123 — São Paulo, SP</li>
            <li>(11) 4002-8922</li>
            <li>contato@camilospetshop.com.br</li>
            <li>Seg. a Sáb., 8h às 19h</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Links rápidos</p>
          <ul className="mt-3 space-y-2 text-sm text-foreground/70">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/[.06] px-6 py-6 text-center text-xs text-foreground/60 dark:border-white/[.08]">
        © {new Date().getFullYear()} Camilo&apos;s Petshop. Todos os direitos reservados.
      </div>
    </footer>
  );
}
