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
  role: "Desenvolvedor Full Stack Pleno",
  tagline:
    "Construindo integrações, produtos escaláveis e automações inteligentes com Node.js, NestJS e TypeScript.",
  location: "Curitiba, Paraná, Brasil",
  about:
    "Desenvolvedor Full Stack / Back-end Pleno com +3 anos de experiência entregando sistemas críticos com Node.js, TypeScript, React, NestJS, PostgreSQL e APIs REST. Minha especialidade está na intersecção entre performance, arquitetura limpa e entrega orientada a negócio: já reduzi o tempo de autenticação em 62%, otimizei consultas de 16s para menos de 1s e liderei a migração de um sistema de autenticação que suportava mais de 1 milhão de usuários ativos.",
  delivers: [
    "APIs REST e microsserviços com Node.js, NestJS, TypeScript e Express",
    "Autenticação avançada: JWT, MFA com TOTP, Auth Service centralizado, OAuth",
    "Front-end com React.js e React Native (TypeScript)",
    "Banco de dados relacional e NoSQL: PostgreSQL, MongoDB, Redis",
    "CI/CD com GitHub Actions, Docker, testes unitários e E2E com Jest",
    "Integrações ERP, automações e filas assíncronas com BullMQ",
    "Arquitetura: Clean Architecture, DDD, SOLID, padrões de projeto",
  ],
  stats: [
    { value: "+3 anos", label: "de experiência" },
    { value: "62%", label: "redução no tempo de autenticação" },
    { value: "16s → <1s", label: "otimização de consultas críticas" },
    { value: "1M+", label: "usuários na plataforma" },
  ],
  resumeHref: "/otavio-takaki-cv-ptf.pdf",
  photo: "/otavio-foto.jfif",
  links: {
    linkedin: "https://www.linkedin.com/in/otavio-takaki",
    github: "https://github.com/OtavioCollere",
    whatsapp: "https://wa.me/5541996335828",
    email: "", // Sem e-mail no arquivo enviado → botão de e-mail fica oculto.
  },
};

/* -------------------------------------------------------------------------- */
/*  EXPERIÊNCIA                                                               */
/* -------------------------------------------------------------------------- */

export const experiences: ExperienceItem[] = [
  {
    company: "Suplos",
    role: "Desenvolvedor Full Stack",
    type: "Freelance",
    period: "Fev 2026 – Presente",
    location: "Remoto",
    summary:
      "Desenvolvimento e evolução de uma plataforma SaaS, com foco em integrações, automações e qualidade de dados entre sistemas externos e a aplicação principal.",
    highlights: [
      "Desenvolvi e mantive rotinas críticas de integração ERP (sincronização de dados, bulk inserts, transformação e validação), garantindo consistência entre sistemas externos e a plataforma.",
      "Criei e integrei o módulo de Equipamentos, conectando dados operacionais ao fluxo da plataforma e estruturando o controle de cadastro, uso e rastreabilidade de recursos.",
      "Implementei o módulo de Kits de Materiais, estruturando fluxos de composição, consulta e utilização de insumos nos processos produtivos.",
      "Desenvolvi sistema de NPS para coleta de feedback de usuários, fornecendo ao time dados para priorização de melhorias e identificação de pontos críticos de experiência.",
      "Desenvolvi chatbot inteligente com modelo OpenAI para responder perguntas de FAQ e consultas sobre o sistema, utilizando cache com Redis para reduzir latência e chamadas repetidas.",
      "Implementei rate limit com Redis para proteger endpoints, controlar volume de requisições e aumentar a resiliência da aplicação.",
      "Evoluí integrações com APIs externas aplicando o padrão Strategy para desacoplar regras de negócio por ERP, melhorando rastreabilidade e manutenibilidade.",
      "Atuo na resolução de tickets de produção: análise de dados, integrações, regras de negócio e comportamento da aplicação em ambiente real.",
    ],
    stack: ["Node.js", "React.js", "TypeScript", "PostgreSQL", "Redis", "OpenAI", "APIs REST", "Git"],
  },
  {
    company: "Podium Educação",
    role: "Engenheiro de Software",
    type: "Tempo Integral",
    period: "Dez 2025 – Fev 2026",
    location: "Curitiba, PR · Presencial",
    summary:
      "Modernização da infraestrutura de autenticação da plataforma Cashbarber, da Podium Educação, com mais de 1.000.000 de usuários ativos, liderando a migração de um sistema legado em Laravel para Auth Service + API Gateway em Node.js.",
    highlights: [
      "Reduzi o tempo médio de autenticação em 62% (de 1,8s para 0,68s) após implementação do gateway externo e eliminação de validações redundantes.",
      "Centralizei o fluxo de autenticação, reduzindo de 6 pontos de validação espalhados para 1 serviço único, simplificando manutenção e aumentando confiabilidade.",
      "Aumentei a cobertura de testes dos fluxos críticos de autenticação para 80% com Jest (unitários e E2E).",
      "Implementei MFA com TOTP, verificação por e-mail via token, JWT com rotação de chaves e validação de schemas com Zod.",
      "Construí pipelines de CI/CD com GitHub Actions, reduzindo o tempo médio de deploy em 40%.",
      "Implementei processamento assíncrono com BullMQ para jobs de notificação, melhorando disponibilidade operacional.",
      "Documentei contratos de API com Swagger/OpenAPI e padronizei fluxos de integração entre serviços.",
      "Apliquei SOLID, Clean Code e padrões de projeto na refatoração da base de código legada em Laravel/PHP.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "React.js",
      "JWT",
      "BullMQ",
      "Zod",
      "Jest",
      "GitHub Actions",
      "Docker",
      "Swagger",
    ],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack Pleno",
    type: "Tempo Integral",
    period: "Abr 2025 – Dez 2025",
    location: "São José dos Pinhais, PR",
    summary:
      "Modernização da infraestrutura tecnológica, liderando migração de ERP, integração de sistemas legados e otimização de performance em ambiente de produção industrial.",
    highlights: [
      "Reduzi o tempo médio de resposta de consultas críticas de 16s para menos de 1s (redução de 94%) com refatoração de queries, índices e introdução de cache com Redis.",
      "Reduzi a carga no banco relacional em 70% e o consumo de infraestrutura de 16 vCPU/20GB para 4 vCPU/8GB, com Redis como cache e MongoDB como armazenamento auxiliar.",
      "Desenvolvi API REST em Node.js para comunicação entre sistema legado em PHP e novo ERP, garantindo continuidade operacional durante a migração.",
      "Aumentei a taxa de sucesso das sincronizações entre sistemas para 98% com validações robustas e monitoramento contínuo.",
      "Construí painel interno de TI com NestJS e DDD, centralizando a gestão de ativos tecnológicos da empresa.",
      "Automatizei builds e deploys com Docker e GitHub Actions, reduzindo erros manuais e padronizando entregas do time.",
      "Reduzi o tempo de manutenção e setup de máquinas industriais em 50% com criação de imagens Docker otimizadas.",
      "Conduzi code reviews e acompanhei entregas do time, promovendo boas práticas de arquitetura limpa e testes.",
    ],
    stack: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Clean Architecture",
      "DDD",
    ],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack JR",
    type: "Tempo Integral",
    period: "Out 2023 – Abr 2025",
    location: "São José dos Pinhais, PR",
    summary:
      "Assumi progressivamente responsabilidades de desenvolvimento e melhoria de sistemas internos críticos para a operação industrial.",
    highlights: [
      "Liderei o desenvolvimento do sistema interno de gestão de treinamentos do RH, digitalizando processos manuais e centralizando histórico de capacitação, reduzindo o tempo de busca de informações de horas para segundos.",
      "Desenvolvi interface de análise de produção por operador, aumentando visibilidade em 40% e contribuindo para redução de horas extras em 18%.",
      "Reduzi o tempo médio de resposta de consultas críticas em 70% com refatorações, índices e otimizações de queries no MongoDB e PostgreSQL.",
      "Contribuí para reduzir bugs em produção em 60% por meio de revisões de código e implementação de testes automatizados.",
      "Criei pipelines de CI/CD com Docker e GitHub Actions para acelerar ciclos de testes e integração.",
      "Mentorei estagiário, conduzindo code reviews e orientando boas práticas de versionamento com Git.",
      "Participei de refinamentos de backlog e alinhamento técnico com o negócio em metodologia ágil.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Docker",
      "GitHub Actions",
      "Jest",
    ],
  },
  {
    company: "Toroid do Brasil",
    role: "Desenvolvedor Full Stack — Estágio",
    type: "Estágio",
    period: "Nov 2022 – Out 2023",
    location: "São José dos Pinhais, PR",
    summary:
      "Iniciei como estagiário de suporte e evolui para desenvolvimento, modernizando interfaces legadas e contribuindo para a estabilidade dos sistemas de produção.",
    highlights: [
      "Reduzi em 45% o número de chamados relacionados a interfaces legadas após modernizações de UI com JavaScript, HTML e CSS.",
      "Desenvolvi e corrigi features em aplicações web para estabilizar fluxos de produção industrial.",
      "Versionei código com Git e apoiei o time com testes, validações e correções em produção.",
      "Aumentei o tempo médio de disponibilidade das estações de trabalho em 30% com manutenção preventiva.",
      "Documentei processos e guias internos no Confluence para facilitar onboarding de novos colaboradores.",
      "Contribuí para reduzir o tempo de treinamento de novos usuários em 20% com documentação simplificada.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Git", "Figma", "Confluence"],
  },
  {
    company: "Americanas S.A.",
    role: "Aprendiz de Auxiliar Administrativo",
    type: "Meio período",
    period: "Fev 2022 – Out 2022",
    location: "São José dos Pinhais, PR",
    summary:
      "Atendimento a clientes, processamento de documentos, suporte administrativo e controle de SLA (95% de cumprimento), com uso de SAP, Excel, Google Drive e Outlook.",
    highlights: [],
    stack: ["SAP", "Excel", "Google Drive", "Outlook"],
    muted: true,
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
    category: "Frontend",
    items: ["React.js", "React Native", "HTML", "CSS"],
  },
  {
    category: "Banco de Dados",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose", "Drizzle ORM"],
  },
  {
    // Card central (em destaque).
    category: "Backend",
    items: ["Node.js", "NestJS", "TypeScript", "JavaScript", "Express", "Fastify"],
  },
  {
    category: "Cloud / DevOps",
    items: [
      "Docker",
      "GitHub Actions",
      "AWS (ECS Fargate, S3/R2, ALB)",
      "Google Cloud (GCP)",
      "CI/CD",
      "Pulumi",
    ],
  },
  {
    category: "Automação / IA",
    items: ["BullMQ", "RabbitMQ", "Streams Node.js", "Integrações ERP", "IA Aplicada"],
  },
];

/**
 * Competências (práticas e conceitos) — sem logos, exibidas em cartões.
 * `icon` referencia um dos ícones definidos em Competencies.tsx.
 */
export const competencies: Competency[] = [
  {
    group: "Arquitetura & Design",
    items: [
      "Clean Architecture",
      "Domain-Driven Design",
      "SOLID",
      "Microsserviços",
      "API Gateway",
      "Event-Driven",
      "Padrões de Projeto",
    ],
  },
  {
    group: "Performance & Infraestrutura",
    items: [
      "Otimização de Queries",
      "Cache com Redis",
      "Docker",
      "AWS ECS Fargate",
      "GitHub Actions CI/CD",
      "Integrações ERP",
      "Filas Assíncronas (BullMQ)",
    ],
  },
  {
    group: "Qualidade & Segurança",
    items: [
      "JWT + MFA (TOTP)",
      "Zod (validação)",
      "Jest / Vitest",
      "Testes E2E",
      "Swagger / OpenAPI",
      "Code Review",
      "Metodologia Ágil",
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
