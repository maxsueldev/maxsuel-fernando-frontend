export interface JourneyItem {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  tags?: string[];
}

export interface JourneySection {
  id: string;
  label: string;
  description: string;
  items: JourneyItem[];
}

export const journeySections: JourneySection[] = [
  {
    id: "skills",
    label: "Habilidades técnicas",
    description:
      "Tecnologias e recursos utilizados no desenvolvimento Front-End.",
    items: [
      {
        id: "frontend",
        label: "Front-End",
        title: "Desenvolvimento Front-End",
        description:
          "Conhecimentos voltados à construção de interfaces web utilizando tecnologias modernas.",
        tags: ["React", "TypeScript", "JavaScript", "HTML5"],
      },
      {
        id: "styling",
        label: "Estilização",
        title: "Estilização e interfaces responsivas",
        description:
          "Construção e organização visual de interfaces, buscando consistência, responsividade e boa experiência de uso.",
        tags: [
          "CSS3",
          "Tailwind CSS",
          "Sass",
          "CSS Modules",
          "Styled Components",
        ],
      },
      {
        id: "libraries",
        label: "Bibliotecas e recursos",
        title: "Bibliotecas e recursos do ecossistema React",
        description:
          "Utilização de bibliotecas para facilitar a construção, organização e manutenção de aplicações.",
        tags: [
          "React Hooks",
          "React Router",
          "React Hook Form",
          "Context API",
          "React Icons",
          "Material UI",
        ],
      },
      {
        id: "integration",
        label: "Integração",
        title: "Integração com serviços e APIs",
        description:
          "Integração de aplicações com serviços externos e recursos de autenticação e armazenamento de dados.",
        tags: ["Fetch API", "REST API"],
      },
      {
        id: "tools",
        label: "Ferramentas",
        title: "Ferramentas de desenvolvimento",
        description:
          "Ferramentas utilizadas durante o desenvolvimento, versionamento e publicação de projetos.",
        tags: ["Git", "GitHub", "VS Code", "Vercel", "Figma"],
      },
      {
        id: "complementary",
        label: "Complementares",
        title: "Conhecimentos complementares",
        description:
          "Habilidades e conhecimentos que complementam minha atuação profissional.",
        tags: ["Fundamentos de UX/UI", "Acessibilidade", "Design Responsivo"],
      },
    ],
  },
  {
    id: "experience",
    label: "Experiências profissionais",
    description:
      "Minha trajetória profissional e experiências em diferentes áreas.",
    items: [
      {
        id: "professor-penedo",
        label: "Professor",
        title: "Professor de Informática Básica - EJA",
        subtitle: "Prefeitura de Penedo – AL (Abr/2024 - Dez/2024)",
        description:
          "Experiência com ensino de informática básica, compartilhamento de conhecimentos e orientação de alunos no uso de ferramentas digitais.",
        tags: ["Informática", "Ensino", "Comunicação"],
      },
      {
        id: "empreendedor-update",
        label: "Empreendedor",
        title: "Empreendedor",
        subtitle: "Update Personalizados (Out/2020 - Dez/2024)",
        description:
          "Atuação com personalização de camisetas e canecas por meio de sublimação, criação de layouts personalizados, atendimento ao cliente e gestão financeira e operacional do negócio",
        tags: [
          "Empreendedorismo",
          "Sublimação",
          "Personalização",
          "Atendimento ao cliente",
        ],
      },
      {
        id: "caixa-ps",
        label: "Operador de caixa",
        title: "Operador de caixa",
        subtitle: "Ponto do Suco (Out/2021 - Abr/2022)",
        description:
          "Atendimento ao cliente, registro de transações e conferência e fechamento de caixa",
        tags: [
          "Atendimento ao cliente",
          "Fechamento de caixa",
          "Operações financeiras",
        ],
      },
      {
        id: "estagiario-serveal",
        label: "Estagiário de suporte",
        title: "Estagiário de suporte técnico",
        subtitle: "SERVEAL (Dez/2015 - Nov/2016)",
        description:
          "Atendimento a usuários, diagnóstico de problemas e suporte na instalação, configuração e manutenção de softwares e equipamentos",
        tags: [
          "Manutenção de computadores",
          "Help Desk",
          "Hardware",
          "Software",
          "Instalação",
          "Configuração",
          "Windows",
          "Office",
          "Redes",
          "Diagnóstico",
        ],
      },
      {
        id: "estagiario-pratica",
        label: "Estagiário Back-End",
        title: "Estagiário de desenvolvimento Back-End",
        subtitle: "Prática STI (Jun/2015 - Nov/2015)",
        description:
          "Desenvolvimento de funcionalidades com PHP, JavaScript e PL/SQL, integração com banco de dados e correção de erros em colaboração com a equipe de Front-End",
        tags: ["PHP", "JavaScript", "PL/SQL", "Resolução de problemas"],
      },
      {
        id: "estagiario-semtabes",
        label: "Estagiário de suporte",
        title: "Estagiário de suporte técnico",
        subtitle: "SEMTABES (Nov/2013 - Out/2015)",
        description:
          "Suporte a usuários, configuração de softwares e redes internas, manutenção de computadores e resolução de problemas técnicos",
        tags: [
          "Manutenção de computadores",
          "Help Desk",
          "Hardware",
          "Software",
          "Instalação",
          "Configuração",
          "Windows",
          "Office",
          "Redes",
          "Diagnóstico",
        ],
      },
    ],
  },
  {
    id: "education",
    label: "Formação acadêmica",
    description: "Formações acadêmicas e especializações.",
    items: [
      {
        id: "ai-data",
        label: "Inteligência Artificial e Ciência de Dados",
        title: "Especialização em Inteligência Artificial e Ciência de Dados",
        subtitle: "Centro Universitário CESMAC (Out/2026 - Atualmente)",
        description:
          "Formação em andamento com foco nas áreas de Inteligência Artificial e Ciências de Dados.",
        tags: ["Inteligência Artificial", "Ciência de Dados"],
      },
      {
        id: "frontend-specialization",
        label: "Desenvolvimento Front-End",
        title: "Pós-graduação em Desenvolvimento Front-End",
        subtitle: "Anhanguera (Jan/2025 - Nov/2025)",
        description:
          "Especialização voltada ao desenvolvimento de interfaces e aplicações para a web.",
        tags: ["Front-End", "Desenvolvimento Web"],
      },
      {
        id: "systems",
        label: "Sistemas de Informação",
        title: "Bacharelado em Sistemas de Informação",
        subtitle: "Centro Universitário CESMAC (Jul/2012 - Jul/2016)",
        description: "Formação acadêmica na área de tecnologia da informação.",
        tags: ["Tecnologia", "Sistemas de Informação"],
      },
    ],
  },
  {
    id: "courses",
    label: "Cursos",
    description: "Estudos complementares e conhecimentos desenvolvidos.",
    items: [
      {
        id: "typescript-courses",
        label: "TypeScript",
        title: "Estudos em TypeScript",
        description:
          "Aprendizado sobre tipagem estática e utilização de TypeScript no desenvolvimento de aplicações.",
        details: [
          "React: desenvolva aplicações tipadas e escaláveis com TypeScript - Alura",
        ],
      },
      {
        id: "react-courses",
        label: "React",
        title: "Estudos em React",
        description:
          "Aprofundamento no desenvolvimento de aplicações com React, componentes, Hooks, rotas e integração com APIs.",
        details: [
          "React: gerencie estados globalmente com Context API - Alura",
          "React: construindo SPAs com React Router - Alura",
          "React: praticando o consumo de APIs - Alura",
        ],
      },
      {
        id: "tailwind-courses",
        label: "Tailwind CSS",
        title: "Estudos em Tailwind CSS",
        description:
          "Aprimoramento de conhecimentos em JavaScript, HTML, CSS e recursos utilizados no desenvolvimento web.",
        details: [
          "React: utilizando CSS Modules e Tailwind para estilização de componentes - Alura",
          "Tailwind CSS: estilizando a sua página com classes utilitárias - Alura",
        ],
      },
      {
        id: "web-design-courses",
        label: "Web Design",
        title: "Estudos em Web Design",
        description:
          "Aprendizado sobre tipagem estática e utilização de TypeScript no desenvolvimento de aplicações.",
        details: ["Web Design - Origamid"],
      },
    ],
  },
];
