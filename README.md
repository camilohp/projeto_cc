# Projeto01

Aplicação Next.js (App Router) com React 19, TypeScript e TailwindCSS 4.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- TailwindCSS 4, shadcn/ui
- React Hook Form + Zod (validação)
- Server Component First

## Getting Started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Commands

- `npm run dev` — servidor local (porta 3000)
- `npm run build` — build de produção
- `npm run start` — inicia o build de produção
- `npm run type-check && npm run lint` — checagem de tipos e lint
- `npm run test -- NomeDoArquivo` — roda um teste específico

## Architecture

- App Router: rotas em `app/`, agrupadas por `(grupo)/`
- Server Components por padrão — `'use client'` só quando usar hooks/eventos/browser APIs
- Mutações via Server Actions em `actions/` — nunca chamar DB direto em Client Components
- `components/ui/` — primitivos reutilizáveis (shadcn)
- `components/` — componentes de feature
- `lib/` — helpers, clients (Supabase, Stripe), configurações
- `types/` — tipos globais e schemas Zod compartilhados

## Code Style

- Sem `any` explícito — usar `unknown` + type guard
- Imports via ES modules (import/export)
- Tailwind only — sem CSS inline, sem styled-components
- Novos design tokens em `tailwind.config.ts` antes de usar
- Arquivos em kebab-case, componentes em PascalCase

## Environment Variables

- `NEXT_PUBLIC_*` apenas para valores seguros no client
- Segredos (DB, API keys) apenas em Server Actions ou Route Handlers
- Copiar `.env.example` para `.env.local` ao clonar

Veja mais detalhes de convenções e gotchas em [`CLAUDE.md`](./CLAUDE.md).
