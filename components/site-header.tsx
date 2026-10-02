import Link from "next/link";
import { UserNav } from "@/components/user-nav";

const navLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.06] bg-background/95 backdrop-blur dark:border-white/[.08]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="#" className="text-lg font-bold tracking-tight text-brand">
          Camilo&apos;s Petshop
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-foreground/80">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <UserNav />
      </div>
    </header>
  );
}
