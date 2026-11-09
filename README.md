# Portfólio — Thiago Eduardo Alves

Site em React, TypeScript e Vinext, com visual escuro e verde-lima, animação de ondas, projetos filtráveis e layout responsivo.

## Personalizar

Edite `lib/portfolio.ts`: apresentação, biografia, tecnologias, projetos, e-mail, GitHub e LinkedIn. Links vazios ficam ocultos. Os projetos e tecnologias iniciais são exemplos, sem alegações sobre experiência profissional.

- Layout e seções: `app/page.tsx`
- Cores, fontes e responsividade: `app/globals.css`
- Título e descrição: `app/layout.tsx`
- Ícone: `public/favicon.svg`

## Executar

Requer Node.js 22.13 ou superior.

```sh
npm run install:ci
npm run dev
```

```sh
npm run build
```

A configuração de hospedagem está em `.openai/hosting.json`. O componente SpotlightCard é do React Bits; sua licença acompanha os arquivos em `components/react-bits/`.
