/**
 * ============================================================================
 *  CONTEÚDO DO PORTFÓLIO  —  edite este arquivo para atualizar o site.
 * ============================================================================
 *  Todo o conteúdo exibido na página vem daqui. Nenhum dado é fixado nos
 *  componentes, então você consegue manter o portfólio apenas editando este
 *  único arquivo.
 *
 *  Itens marcados com  // PLACEHOLDER  são exemplos para você copiar/editar.
 * ============================================================================
 */

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  about: string;
  delivers: string[];
  /** Estatísticas de destaque (somente números reais do seu histórico). */
  stats: { value: string; label: string }[];
  /** Caminho do CV dentro de /public. Coloque o arquivo em public/curriculo.pdf */
  resumeHref: string;
  /** Foto de perfil em /public. Coloque o arquivo em public/profile.jpg (deixe "" para mostrar o placeholder). */
  photo: string;
  links: {
    linkedin: string;
    github: string;
    whatsapp: string;
    /** Deixe vazio ("") para esconder o botão de e-mail. */
    email: string;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Define ênfase visual reduzida (ex.: cargos não-técnicos). */
  muted?: boolean;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string[];
  results: string[];
  tech: string[];
  /** Deixe vazio ("") quando o repositório for privado / não existir. */
  repo: string;
  /** Quando true, o card não é renderizado (use como template). */
  isPlaceholder?: boolean;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Competency = {
  group: string;
  items: string[];
};

/* -------------------------------------------------------------------------- */
/*  PERFIL                                                                    */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  name: "Otavio Augusto Takaki Collere",
  role: "Backend & Cloud Engineer",
  tagline:
    "Backend em Node.js/TypeScript e PostgreSQL, infraestrutura em GCP com Kubernetes, Terraform e Argo CD.",
  location: "Curitiba, Paraná, Brasil",
  about:
    "Engenheiro de software backend e cloud com 4 anos de experiência em Node.js/TypeScript e PostgreSQL. Hoje conduzo a migração de produtos em produção de Cloud Run para Kubernetes (GKE) com Terraform e Argo CD, e otimizo consultas e APIs: um relatório sobre 15 milhões de posições de GPS caiu de 180 s para 4,5 s, e uma plataforma de cursos do governo federal passou de 3.500 para 700 mil usuários simultâneos sem erros. Antes disso, trabalhei com autenticação para mais de 1M de usuários, integrações com ERPs e sistemas industriais.",
  delivers: [
    "Infraestrutura em GCP: GKE, Cloud Run, Cloud SQL, Secret Manager, Workload Identity",
    "Infraestrutura como código e GitOps com Terraform, Argo CD, Helm e Kustomize",
    "APIs REST e WebSocket com Node.js, NestJS, Fastify e TypeScript",
    "Performance de PostgreSQL: EXPLAIN ANALYZE, índices, pré-cálculo e cache com Redis",
    "Testes de carga com k6 e observabilidade com Cloud Monitoring e Prometheus",
    "CI/CD com GitHub Actions e Docker, com alertas de deploy por ambiente",
    "Autenticação (JWT RS256, MFA/TOTP), integrações com ERPs e serviços externos",
  ],
  stats: [
    { value: "4 anos", label: "de experiência" },
    { value: "12 apps", label: "migradas para Kubernetes (GKE)" },
    { value: "180s → 4,5s", label: "relatório com 15M de posições GPS" },
    { value: "700 mil", label: "usuários simultâneos no teste de carga" },
  ],
  resumeHref: "/Otavio_Takaki_CV.pdf",
  photo: "/otavio-foto.jfif",
  links: {
    linkedin: "https://www.linkedin.com/in/otavio-takaki",
    github: "https://github.com/OtavioCollere",
    whatsapp: "https://wa.me/5541996335828",
    email: "otaviosk59@gmail.com",
  },
};

/* -------------------------------------------------------------------------- */
/*  EXPERIÊNCIA                                                               */
/* -------------------------------------------------------------------------- */

export const experiences: ExperienceItem[] = [
  {
    company: "Smartcitizen",
    role: "Backend & Cloud Engineer",
    type: "Tempo Integral",
    period: "Ago 2026 – Presente",
    location: "Remoto",
    summary:
      "Plataforma multi-tenant de gestão operacional em GCP, com clientes no setor público e privado. Atuo em backend (Node.js/TypeScript, PostgreSQL) e infraestrutura, da feature ao deploy em produção.",
    highlights: [
      "Conduzi a migração de dois produtos de Cloud Run para Kubernetes (GKE): 12 aplicações em 3 clusters, com Terraform, Argo CD (GitOps), GitHub Actions (CI/CD) e IAM por serviço (Workload Identity). Estado todo versionado em Git.",
      "Conduzi os testes de carga (k6) e a otimização do Qualifica Pro, plataforma de cursos de um programa do governo federal: a capacidade passou de cerca de 3.500 para 700 mil usuários simultâneos, sem erros, com cache compartilhado (Redis) e otimização de consultas e gravações no PostgreSQL.",
      "Projetei e provisionei a infraestrutura do Qualifica Pro no GCP com Terraform, Kubernetes (GKE) e Argo CD (GitOps).",
      "Otimizei relatórios com PostgreSQL (EXPLAIN ANALYZE, índices, pré-cálculo por viagem): de 180 s para 4,5 s num relatório de 15 milhões de posições de GPS e de 8 s para menos de 1 s num endpoint, mantendo as respostas idênticas às do código antigo.",
      "Reduzi em 73% (de 33 GB para 8,8 GB) a maior tabela do banco de produção de um sistema de rastreamento de caminhões por GPS, sem interromper o sistema e sem perder dados. Uma consulta caiu de 31 s para menos de 1 ms e a CPU do banco de até 25% para 3%.",
      "Migrei 1,3 milhão de objetos (458 GB) entre S3 e GCS com integridade validada e reescrevi mais de 624 mil registros em produção, sem indisponibilidade.",
      "Reduzi custos no GCP: banco de desenvolvimento redimensionado por uso medido (US$ 295 → 156/mês) e clusters de dev/hml desligados fora do expediente (-67% de horas de máquina).",
      "Implementei do zero o monitoramento e os alertas dos sistemas (Cloud Monitoring, Prometheus) e alertas de deploy no Discord integrando GitHub Actions, Argo CD e Cloud Run (8 repositórios, 15 workflows).",
      "Preparei a plataforma de manutenção e vistoria das escolas estaduais do Paraná para 3.500 usuários simultâneos, corrigindo uma falha de rede nas conexões com o banco e otimizando as consultas mais pesadas, sem aumentar os servidores.",
      "Construí o backend de cadastro do SOMA (NestJS, PostgreSQL, Redis, JWT RS256, WebSocket com agente de IA) com integrações Serpro (CNPJ) e Zenvia (SMS/OTP).",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Kubernetes (GKE)",
      "Terraform",
      "Argo CD",
      "GitHub Actions",
      "k6",
      "Prometheus",
    ],
  },
  {
    company: "Suplos",
    role: "Desenvolvedor Full Stack",
    type: "Freelance",
    period: "Fev 2026 – Jul 2026",
    location: "Remoto",
    summary:
      "Plataforma SaaS, com foco em integrações com ERPs, novos módulos e qualidade de dados entre sistemas externos e a aplicação principal.",
    highlights: [
      "Desenvolvi e mantive integrações com sistemas externos (ERPs) e serviços de terceiros, garantindo integridade dos dados e alta disponibilidade.",
      "Liderei a criação e integração do módulo de Equipamentos, conectando dados operacionais ao fluxo da plataforma e garantindo consistência entre cadastro, uso e controle de recursos.",
      "Liderei a criação e integração do módulo de Kits de Materiais, estruturando composição, consulta e utilização de conjuntos de insumos.",
      "Implementei sistema de NPS para coleta de feedback de usuários, apoiando o time na identificação de pontos críticos de experiência.",
      "Evoluí integrações com APIs externas e internas com o padrão Strategy para desacoplar regras específicas de cada ERP, melhorando rastreabilidade e manutenibilidade.",
      "Investiguei e resolvi problemas em produção: gargalos de processamento, inconsistências de dados e falhas de integração.",
    ],
    stack: ["Node.js", "Fastify", "TypeScript", "PostgreSQL", "Drizzle ORM", "React.js", "APIs REST"],
  },
  {
    company: "Podium Educação",
    role: "Software Engineer",
    type: "Tempo Integral",
    period: "Dez 2025 – Fev 2026",
    location: "Curitiba, PR · Presencial",
    summary:
      "Reestruturação da autenticação de uma plataforma com mais de 1 milhão de usuários ativos, migrando de um legado em Laravel para um fluxo único em Node.js/TypeScript.",
    highlights: [
      "Liderei a reestruturação arquitetural do sistema de autenticação em Node.js/TypeScript para mais de 1M de usuários ativos.",
      "Reduzi o tempo médio de autenticação em 62%, eliminando gargalos no fluxo de sessão.",
      "Centralizei validações espalhadas em vários serviços num fluxo único de autenticação, reduzindo pontos de falha.",
      "Desenvolvi APIs REST com JWT, MFA (TOTP) e validação de schemas com Zod.",
      "Planejei a modernização do legado em Laravel: migração para sessões externas e remoção do Sanctum.",
      "Implementei processamento assíncrono com BullMQ para desacoplar rotinas e aumentar a disponibilidade.",
      "Estruturei pipelines de CI/CD com GitHub Actions, reduzindo o tempo de deploy em 40%.",
      "Elevei a cobertura de testes para 80% com testes unitários e E2E em Jest.",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "JWT", "BullMQ", "Zod", "Jest", "GitHub Actions", "Laravel"],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack Pleno",
    type: "Tempo Integral",
    period: "Abr 2025 – Dez 2025",
    location: "São José dos Pinhais, PR",
    summary:
      "APIs e integrações entre sistemas em ambiente de produção industrial, com foco em performance e organização do código.",
    highlights: [
      "Desenvolvi APIs REST em Node.js/TypeScript para integração entre sistemas, com código testável e de fácil manutenção.",
      "Modelei dados em MongoDB com Mongoose, criando índices e otimizando queries críticas.",
      "Reduzi em 70% o tempo de resposta de consultas sensíveis com refatoração e otimização de acesso a dados.",
      "Implementei cache e estratégias de consistência para reduzir carga em fluxos críticos.",
      "Apliquei arquitetura em camadas, DDD e Clean Architecture em módulos do sistema.",
      "Construí painel interno com NestJS, com integração front-back.",
      "Criei pipelines com Docker e GitHub Actions, reduzindo erros manuais.",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "MongoDB", "Mongoose", "Redis", "Docker", "GitHub Actions"],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack JR",
    type: "Tempo Integral",
    period: "Out 2023 – Abr 2025",
    location: "São José dos Pinhais, PR",
    summary:
      "Desenvolvimento de APIs e telas internas para sistemas da operação industrial.",
    highlights: [
      "Desenvolvi API REST em Node.js/TypeScript para registro e consulta de dados, padronizando contratos entre serviços.",
      "Modelei dados em MongoDB e implementei consultas com Mongoose, com índices e otimização de performance.",
      "Reduzi em 70% o tempo médio de resposta de consultas críticas com refatorações e melhorias de query.",
      "Desenvolvi módulos de análise e telas internas (SPA) para indicadores operacionais, conectadas a APIs REST.",
      "Implementei validações e boas práticas de código, reduzindo falhas em produção.",
      "Criei pipelines com Docker e GitHub Actions, acelerando ciclos de teste e integração.",
    ],
    stack: ["Node.js", "TypeScript", "MongoDB", "Mongoose", "React.js", "Docker", "GitHub Actions"],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack — Estágio",
    type: "Estágio",
    period: "Nov 2022 – Out 2023",
    location: "São José dos Pinhais, PR",
    summary:
      "Desenvolvimento e correção de aplicações web, modernizando interfaces legadas.",
    highlights: [
      "Desenvolvi funcionalidades e corrigi bugs em aplicações web, estabilizando fluxos críticos.",
      "Modernizei interfaces com JavaScript, HTML e CSS, aplicando componentização, o que reduziu chamados ligados a telas legadas.",
      "Apoiei o time com testes, validações e correções em produção.",
      "Versionei código com Git e documentei processos no Confluence para onboarding e suporte.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Git", "Confluence"],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROJETOS                                                                  */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: "saas-clinic",
    title: "SaaS Clinic — Backend API",
    tagline: "Plataforma multi-tenant para gestão de clínicas de estética.",
    description:
      "Backend de uma plataforma SaaS multi-tenant para gestão de clínicas de estética, projetada com foco em segurança, escalabilidade e qualidade arquitetural, preparada para múltiplas clínicas e franquias.",
    challenge:
      "Construir um backend multi-tenant capaz de atender múltiplas clínicas e franquias com segurança, escalabilidade e qualidade arquitetural — mantendo o domínio isolado de frameworks.",
    solution: [
      "Arquitetura baseada em Clean Architecture e DDD, com separação clara entre domínio, aplicação e infraestrutura.",
      "Autenticação segura com JWT (RS256), gerenciamento de sessões e MFA (TOTP).",
      "Modelagem de domínio com entidades e casos de uso isolados de frameworks.",
      "Processamento assíncrono com Redis e BullMQ.",
      "Rate limiting distribuído e validação rigorosa de dados com Zod.",
      "Observabilidade em produção com logging estruturado e APM.",
      "Deploy automatizado com Docker, AWS ECS (Fargate), ALB e CI/CD.",
    ],
    results: [
      "Domínio totalmente desacoplado de frameworks, facilitando testes e evolução.",
      "Camada de autenticação robusta com MFA e rotação de chaves.",
      "Pipeline de deploy contínuo automatizado na AWS ECS Fargate.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "JWT",
      "Zod",
      "Docker",
      "AWS ECS",
      "GitHub Actions",
      "Vitest",
    ],
    repo: "https://github.com/OtavioCollere/saas-clinic",
  },

  {
    id: "clinic-full-stack",
    title: "SaaS Clinic — Frontend",
    tagline: "Dashboard multi-tenant com agendamentos, pacientes e profissionais.",
    description:
      "Frontend de uma plataforma SaaS multi-tenant para gestão de clínicas de estética. Cobre portais distintos para admin, profissional e paciente, com autenticação por cookies httpOnly, troca automática de token e controle de acesso granular por papel.",
    challenge:
      "Construir um frontend multi-tenant que servisse três perfis de usuário diferentes (admin, profissional, paciente) com rotas protegidas, estado global consistente e experiência fluida — sem expor tokens no cliente.",
    solution: [
      "Rotas dinâmicas por slug de clínica (`/[tenant]/dashboard`) com middleware Next.js protegendo cada portal.",
      "Autenticação via httpOnly cookies com interceptor Axios que renova o access token automaticamente em 401.",
      "AuthContext e FranchiseContext mantendo estado global de usuário e franquia selecionada.",
      "Service layer tipada (uma função por endpoint) desacoplando a UI da camada HTTP.",
      "Validação de CPF/CNPJ com máscara em tempo real e políticas RBAC client-side por permissão.",
    ],
    results: [
      "Três portais independentes num único app Next.js, sem colisão de estado entre perfis.",
      "Zero tokens expostos no cliente — fluxo de refresh transparente e invisível ao usuário.",
      "Onboarding de clínica completo: da criação ao primeiro agendamento, sem reload de página.",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Radix UI",
      "Axios",
      "Sonner",
      "Biome",
      "pnpm",
    ],
    repo: "https://github.com/OtavioCollere/clinic-full-stack",
  },

  {
    id: "lumi-energy-invoices",
    title: "Lumi — Processamento de Faturas com IA",
    tagline: "Extração automática de dados de faturas de energia via GPT-4o.",
    description:
      "Sistema full stack para processar faturas de energia elétrica em PDF usando IA multimodal. O usuário envia o PDF, o GPT-4o extrai os dados estruturados (consumo, valores, GD), as regras de negócio são aplicadas e o resultado fica disponível numa dashboard com filtros e agregações.",
    challenge:
      "Extrair dados estruturados de PDFs de faturas de energia com layouts variáveis, sem pré-processamento de OCR, garantindo consistência, deduplicação e observabilidade em produção.",
    solution: [
      "Upload direto do PDF para o GPT-4o (multimodal), usando JSON Mode para forçar saída estruturada.",
      "Prompt engineering em português com regras de negócio embutidas (energia compensada, economia GD, consumo total).",
      "Constraint de unicidade no banco prevenindo faturas duplicadas (mesmo cliente + mês de referência).",
      "Endpoints REST para upload, biblioteca com filtros, dashboard com agregações e listagem de clientes.",
      "Métricas Prometheus (latência p95) e testes E2E com schema PostgreSQL isolado por suite.",
      "Deploy no Google Cloud Run com CI/CD via GitHub Actions.",
    ],
    results: [
      "Processamento confiável de faturas com layouts variáveis, sem etapa manual de extração.",
      "Detecção automática de duplicatas, eliminando reprocessamentos acidentais.",
      "Dashboard com agregações em tempo real: consumo total, economia GD e filtros por cliente/período.",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI GPT-4o",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prometheus",
      "Vitest",
      "Google Cloud Run",
      "GitHub Actions",
    ],
    repo: "https://github.com/OtavioCollere/lumi-energy-invoices",
  },

  {
    id: "reactivate-cliniker",
    title: "Reactivate Cliniker — Agente de Reativação via WhatsApp",
    tagline: "Automatiza a identificação de pacientes inativos e o envio de mensagens personalizadas com IA.",
    description:
      "Agente Python que roda diariamente via cron, busca pacientes inativos no sistema SaaS da clínica, gera mensagens personalizadas com OpenAI (mencionando o último procedimento e histórico de visitas) e envia via WhatsApp através da Evolution API. Deduplicação via PostgreSQL evita reenvios.",
    challenge:
      "Clínicas de estética perdem receita recorrente quando não fazem acompanhamento de pacientes sumidos. O processo manual é repetitivo, demorado e raramente acontece com consistência.",
    solution: [
      "Arquitetura em camadas (adapters / agent / services) com responsabilidades isoladas e substituíveis.",
      "Autenticação com saas-clinic via cookie HttpOnly — extrai o JWT do Set-Cookie e reutiliza como Bearer token.",
      "Cache de procedimentos por franquia (O(1)) para evitar N+1 nas chamadas de API.",
      "Seletor com priorização: mais inativo primeiro, depois mais fiel — via ordenação composta.",
      "DRY_RUN=true por padrão: testa o fluxo completo (incluindo OpenAI) sem risco de envio acidental.",
      "Deduplicação por PostgreSQL: exclui telefones contatados nos últimos 30 dias antes de selecionar.",
    ],
    results: [
      "Geração de mensagens contextualizada funcionando com dados mock — integração com SaaS em validação.",
      "Fluxo end-to-end testável localmente sem dependências externas além de Docker e chave OpenAI.",
      "Deploy desenhado para Railway com cron diário sem servidor persistente.",
    ],
    tech: [
      "Python 3.11",
      "OpenAI GPT-4o-mini",
      "Pydantic v2",
      "PostgreSQL",
      "httpx",
      "Evolution API",
      "Google Sheets",
      "Railway",
      "Docker",
    ],
    repo: "https://github.com/OtavioCollere/reactivate-cliniker",
  },
];

/* -------------------------------------------------------------------------- */
/*  STACK & COMPETÊNCIAS                                                       */
/* -------------------------------------------------------------------------- */

/**
 * Stack (tecnologias) — exibida como coverflow. A ORDEM importa: o card do
 * meio (índice 2) começa em destaque, à frente, e os demais recuam em
 * perspectiva para os lados.
 */
export const stack: SkillCategory[] = [
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Drizzle ORM", "Prisma ORM", "Mongoose"],
  },
  {
    category: "Backend",
    items: ["Node.js", "TypeScript", "NestJS", "Fastify", "Express", "WebSocket", "BullMQ"],
  },
  {
    // Card central (em destaque).
    category: "Cloud & Infraestrutura",
    items: [
      "Google Cloud (GCP)",
      "Kubernetes (GKE)",
      "Terraform",
      "Argo CD",
      "Helm",
      "Kustomize",
      "AWS (S3)",
    ],
  },
  {
    category: "DevOps & Observabilidade",
    items: ["GitHub Actions", "Docker", "Linux", "Bash", "Prometheus", "Cloud Monitoring", "k6"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
];

/**
 * Competências (práticas e conceitos) — sem logos, exibidas em cartões.
 * `icon` referencia um dos ícones definidos em Competencies.tsx.
 */
export const competencies: Competency[] = [
  {
    group: "Cloud & Infraestrutura",
    items: [
      "Migração Cloud Run → GKE",
      "Infraestrutura como código",
      "GitOps",
      "IAM por serviço (Workload Identity)",
      "Gestão de segredos (Secret Manager)",
      "FinOps / redução de custo",
      "Monitoramento e alertas",
    ],
  },
  {
    group: "Performance & Dados",
    items: [
      "EXPLAIN ANALYZE e índices",
      "Pré-cálculo e cache com Redis",
      "Testes de carga (k6)",
      "Migração de dados sem indisponibilidade",
      "Paridade de resposta antes de subir",
      "Integrações com ERPs e APIs externas",
      "Filas assíncronas (BullMQ)",
    ],
  },
  {
    group: "Arquitetura & Qualidade",
    items: [
      "Clean Architecture",
      "Domain-Driven Design",
      "SOLID e padrões de projeto",
      "JWT RS256 + MFA (TOTP)",
      "Validação com Zod",
      "Jest (unitários e E2E)",
      "Swagger / OpenAPI",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  NAVEGAÇÃO                                                                 */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Competências", href: "#competencias" },
  { label: "Contato", href: "#contato" },
];
