# Camilo's Petshop

Site institucional de um petshop, com landing page (serviços, sobre, contato) e área de cliente com autenticação via Supabase (cadastro, login e conta).

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- TailwindCSS 4 + shadcn/ui (primitivos baseados em `@base-ui/react`) + `lucide-react`
- React Hook Form + Zod (formulários e validação)
- Supabase (`@supabase/ssr`, `@supabase/supabase-js`) para autenticação
- Server Components por padrão; mutações via Server Actions

## Funcionalidades

- **Landing page** (`/`): hero, serviços, sobre, CTA, header e footer
- **Cadastro** (`/signup`) e **login** (`/login`) com e-mail e senha
- **Área do cliente** (`/account`): rota protegida, exibe os dados do usuário e permite sair
- **`proxy.ts`**: atualiza a sessão do Supabase a cada requisição (convenção do Next.js 16, substitui `middleware.ts`)

## Getting Started

Pré-requisitos: Node.js 20+ e um projeto no [Supabase](https://supabase.com).

```bash
npm install
cp .env.example .env.local   # preencha as variáveis abaixo
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave pública (anon) do Supabase |

Use `NEXT_PUBLIC_*` apenas para valores seguros no client. Segredos ficam somente em Server Actions ou Route Handlers.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build de produção |
| `npm run start` | Inicia o build de produção |
| `npm run lint` | ESLint |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`) |

Após uma série de mudanças, rode `npm run type-check && npm run lint`.

## Estrutura do projeto

```
app/
├── (auth)/             # Rotas de autenticação (login, signup)
├── account/            # Área do cliente (protegida)
├── layout.tsx
├── page.tsx            # Landing page
└── globals.css         # Tailwind e design tokens
actions/                # Server Actions (ex.: auth.ts)
components/
├── ui/                 # Primitivos shadcn (button, card, field, input...)
└── *.tsx               # Componentes de feature (hero, services, forms...)
lib/
├── supabase/           # Clients: client.ts (browser), server.ts (cookies), middleware.ts
└── utils.ts
types/                  # Tipos globais e schemas Zod (ex.: auth.ts)
proxy.ts                # Refresh de sessão Supabase
```

## Convenções

- Server Components por padrão; `'use client'` só com hooks, eventos ou browser APIs
- Nunca acessar o banco diretamente em Client Components — use Server Actions
- Formulários: shadcn/ui + React Hook Form + Zod
- Sem `any` explícito (use `unknown` + type guard); apenas Tailwind para estilos
- Arquivos em kebab-case, componentes em PascalCase
- Branches: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits em inglês, no imperativo (ex.: `add OAuth callback handler`)
- Imagens externas exigem domínio autorizado em `next.config.ts` (`remotePatterns`)

Mais detalhes em [`CLAUDE.md`](./CLAUDE.md) e [`.claude/rules/`](./.claude/rules).
