# Portfólio — Otavio Augusto Takaki Collere

Portfólio pessoal de **Desenvolvedor Full Stack Pleno**, com tema dark, visual premium e responsivo.
Construído com **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## ✨ Recursos

- Tema **dark** moderno, minimalista e sofisticado (grafite/preto + cinza/branco + verde esmeralda como destaque).
- Navegação fixa com âncoras suaves e indicador de seção ativa.
- Animações sutis com Framer Motion (respeita `prefers-reduced-motion`).
- Seções: **Hero, Sobre, Experiência (timeline), Projetos (grid + modal), Stack (coverflow 3D), Competências, Contato**.
- **Modal de projeto acessível**: foco preso (focus trap), fecha com `Esc`, clique fora e botão; trava o scroll do fundo.
- Acessibilidade: contraste, foco visível por teclado, `aria-*` adequados e labels.
- Mobile pensado de verdade (menu drawer, layout repensado — não apenas comprimido).
- Conteúdo **100% centralizado** em `src/data/portfolio.ts`.

---

## 🚀 Como rodar

Pré-requisitos: **Node.js 18.18+** (recomendado 20+).

```bash
# 1. instalar dependências
npm install

# 2. ambiente de desenvolvimento
npm run dev
# abra http://localhost:3000

# 3. build de produção
npm run build
npm run start
```

---

## 📄 Adicionar o seu currículo (Baixar CV)

O botão **"Baixar CV"** aponta para `/curriculo.pdf`.

1. Renomeie o seu PDF para **`curriculo.pdf`**.
2. Coloque-o na pasta **`public/`** → o caminho final deve ser **`public/curriculo.pdf`**.
3. Pronto — o botão fará o download automaticamente.

> Há um arquivo `public/LEIA-ME-curriculo.txt` apenas como lembrete; pode apagá-lo.

---

## 🖼 Adicionar a sua foto (Sobre mim)

A seção **Sobre mim** tem um espaço reservado para a sua foto.

1. Renomeie a sua imagem para **`profile.jpg`** (ou `.png`).
2. Coloque-a na pasta **`public/`** → caminho final **`public/profile.jpg`**.
3. Se o nome/extensão for outro, ajuste `profile.photo` em `src/data/portfolio.ts`.

> Enquanto não houver foto, aparece um placeholder elegante no lugar.
> Os **logos das tecnologias** na seção Stack carregam automaticamente via
> [Simple Icons](https://simpleicons.org) (CDN) — sem dependências.

---

## ✏️ Editar o conteúdo

Todo o texto, experiências, projetos, skills e links ficam em:

```
src/data/portfolio.ts
```

- **Perfil / links / estatísticas** → objeto `profile`.
  - Para esconder o botão de e-mail, deixe `links.email: ""` (já está vazio).
- **Experiência** → array `experiences`.
- **Projetos** → array `projects`.
  - Há um objeto marcado com `isPlaceholder: true` como **template** — copie, preencha com um projeto real e **remova a flag** para que ele apareça.
  - Se o projeto não tiver repositório público, deixe `repo: ""` → o modal mostra **"Repositório privado"** em vez do botão.
- **Stack (tecnologias, coverflow)** → array `stack`. A **ordem importa**: o item do meio (índice 2) começa em destaque, à frente.
- **Competências (práticas/conceitos)** → array `competencies`.
- **Menu** → array `navItems`.

---

## 🗂 Estrutura

```
portfolio-nextjs/
├── public/
│   └── (coloque aqui: curriculo.pdf)
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Stack.tsx
│   │   ├── Competencies.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Reveal.tsx
│   │   └── icons.tsx
│   └── data/
│       └── portfolio.ts   ← edite o conteúdo aqui
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Personalizar o visual

- **Cor de destaque**: altere `accent` em `tailwind.config.ts`.
- **Fontes**: definidas em `src/app/layout.tsx` (Space Grotesk + Manrope + JetBrains Mono via `next/font`).
- **Cores de fundo / superfícies**: paleta `ink` em `tailwind.config.ts`.

---

## ☁️ Deploy

O jeito mais simples é a [Vercel](https://vercel.com):

1. Suba o repositório no GitHub.
2. Importe na Vercel → ela detecta Next.js automaticamente.
3. Deploy. (Não esqueça do `public/curriculo.pdf`.)
