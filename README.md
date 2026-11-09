# Portfólio — Thiago Eduardo Alves

Site em React, TypeScript e Next.js, com visual escuro e verde-lima, animação de ondas, projetos filtráveis e layout responsivo.

## Personalizar

Edite `lib/portfolio.ts`: apresentação, biografia, tecnologias, projetos, e-mail, GitHub e LinkedIn. Links vazios ficam ocultos. Os projetos e tecnologias iniciais são exemplos, sem alegações sobre experiência profissional.

- Layout e seções: `app/page.tsx`
- Cores, fontes e responsividade: `app/globals.css`
- Título e descrição: `app/layout.tsx`
- Ícone: `public/favicon.svg`

## Executar

Requer Node.js 22.13 ou superior.

```sh
npm ci
npm run dev
```

```sh
npm run build
```

O build gera o site estático na pasta `out/`.

## Publicar no Netlify

O `netlify.toml` da raiz configura a pasta base `portfolio-thiago`, o comando `npm run build` e a publicação de `out`. Se o conteúdo desta pasta estiver diretamente na raiz do seu repositório remoto, use o `netlify.toml` interno, que não define uma pasta base.

O projeto usa exportação estática (`output: "export"`), com `NETLIFY_NEXT_PLUGIN_SKIP=true`. Não publique `.next` e não é necessário enviar `.openai/hosting.json` ao Netlify. Faça commit/push destas alterações e execute um novo deploy.

A configuração alternativa do Sites permanece disponível em `.openai/hosting.json` e nos comandos `npm run dev:sites` e `npm run build:sites`.

O componente SpotlightCard é do React Bits; sua licença acompanha os arquivos em `components/react-bits/`.
