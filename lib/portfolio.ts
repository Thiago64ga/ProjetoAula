// Personalize seu portfólio aqui. Links vazios ficam ocultos no site.
export const portfolio = {
  tagline:
    "Explorando a interseção entre desenvolvimento, criatividade e experiências digitais.",

  about: `
    Sou estudante do 8º período de Sistemas de Informação, apaixonado por tecnologia, programação e desenvolvimento de soluções digitais.

    Tenho conhecimentos em desenvolvimento Frontend e Backend, utilizando tecnologias como Java, Spring Boot, JavaScript, TypeScript, Angular, React, Python e PostgreSQL.

    Ao longo da minha trajetória acadêmica, venho desenvolvendo projetos que envolvem criação de aplicações web, integração de APIs, bancos de dados e computação em nuvem.

    Busco constantemente aprimorar meus conhecimentos, explorar novas tecnologias e transformar ideias em soluções práticas e inovadoras.

    Meu objetivo é construir uma carreira sólida na área de desenvolvimento de software, contribuindo para projetos que gerem impacto real.
  `,
  
email: "Thiago.edu.alves502@gmail.com",
  github: "https://github.com/Thiago64ga",
  linkedin: "https://www.linkedin.com/in/thiago-eduardo-626b54276/",
  technologies: [
    { name: "HTML & CSS", description: "Estrutura & estilo" },
    { name: "JavaScript", description: "Lógica & interação" },
    { name: "React", description: "Interfaces & componentes" },
    { name: "TypeScript", description: "Código & organização" },
    { name: "Git & GitHub", description: "Versões & colaboração" },
  ],
  projects: [
  {
    id: 1,
    category: "Aplicações",
    title: "Rede Comercial Aurora",
    description:
      "Sistema de Business Intelligence para análise de vendas, faturamento e indicadores comerciais, com dashboards interativos e integração com banco de dados.",

    tags: ["Python", "Flask", "PostgreSQL", "Chart.js"],

    details:
      "Projeto acadêmico desenvolvido em equipe, no qual participei como colaborador. A aplicação permite acompanhar indicadores comerciais, analisar faturamento, receitas, custos, margens de lucro e desempenho de produtos e filiais. O sistema utiliza Python e Flask no backend, PostgreSQL para armazenamento e consultas SQL, além de JavaScript e Chart.js para visualização dos dados em dashboards interativos.",

    github:
      "https://github.com/SauloOliveira358/projeto-comercial",

    role: "Desenvolvimento colaborativo",

    type: "Projeto acadêmico",
  },

  {
    id: 2,
    category: "Aplicações",
    title: "MedFlow — Gestão de Saúde",
    description:
      "Plataforma web para gerenciamento de consultas médicas, agendamentos e prontuários, com integração entre frontend, backend e banco de dados.",

    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],

    details:
      "Projeto acadêmico desenvolvido em equipe, com participação colaborativa no desenvolvimento de uma plataforma de gestão de saúde. O sistema possui áreas específicas para pacientes, médicos e clínicas, permitindo realizar agendamentos, gerenciar consultas, visualizar agendas e organizar prontuários. A arquitetura utiliza React no frontend, Java com Spring Boot no backend e PostgreSQL/Supabase para persistência dos dados. O projeto também implementa mecanismos de controle de concorrência para evitar conflitos em agendamentos simultâneos.",

    github:
      "https://github.com/SauloOliveira358/MedFlow",

    role: "Desenvolvimento colaborativo",

    type: "Projeto acadêmico",
  },

  {
    id: 3,
    category: "Web",
    title: "Indiana Jhones — Jogo Web",
    description:
      "Jogo interativo desenvolvido para navegador, explorando lógica de programação, animações, movimentação de personagens e interações com cenários.",

    tags: ["JavaScript", "HTML5", "CSS3", "Games"],

    details:
      "Projeto de desenvolvimento de um jogo web interativo, realizado de forma colaborativa. A aplicação utiliza HTML, CSS e JavaScript para construir a interface, controlar interações e apresentar elementos visuais e animações. O projeto reúne personagens, plataformas, cenários e recursos multimídia, proporcionando uma experiência prática com lógica de programação e desenvolvimento de jogos para navegadores.",

    github:
      "https://github.com/SauloOliveira358/idianajhones",

    role: "Desenvolvimento colaborativo",

    type: "Projeto acadêmico",
  },
],
};
