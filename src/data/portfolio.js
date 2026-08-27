export const profile = {
  name: "Sheraz Ali",
  role: "Full Stack Developer (MERN)",
  tagline:
    "I design, build and ship scalable web platforms — from AI-powered agents to real-time SaaS dashboards.",
  location: "Pakistan",
  phone: "0317 7656698",
  email: "asherazali121823@gmail.com",
  github: "https://github.com/aliSheraz",
  linkedin: "https://www.linkedin.com/in/sheraz-ali-a760b1250/",
  resumeUrl: "/Sheraz-Ali-CV.pdf",
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "Kotlin", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "NestJS", "Express", "Spring Boot", "Angular"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM", "TypeORM"],
  },
  {
    title: "AI / LLM",
    items: ["RAG", "Vector DBs (Milvus, pgvector)", "Prompt Engineering", "MCP", "Multi-Agent Systems"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, SQS)", "Nginx", "Docker-ready deploys"],
  },
  {
    title: "Integrations",
    items: ["Stripe", "HubSpot", "LinkedIn Ads API", "Zoho CRM", "Webhooks"],
  },
];

export const experience = [
  {
    company: "Innovation Insight",
    role: "Full Stack Developer (MERN)",
    period: "March 2026 — Present",
    points: [
      "Building web apps with Next.js, React, Framer Motion, Material UI, ShadCN and Tailwind CSS.",
      "Maintaining backend services with Node.js/NestJS across MongoDB, MySQL and PostgreSQL.",
      "Deploying and managing applications on AWS EC2 with Nginx reverse proxy.",
    ],
  },
  {
    company: "TechVention, UAE (Remote)",
    role: "Full Stack Developer (MERN)",
    period: "March 2025 — Feb 2026",
    points: [
      "Shipped production features across Next.js/React frontends and NestJS backends.",
      "Integrated AWS EC2 / S3 and optimized server performance with Nginx.",
      "Collaborated cross-functionally with designers and project leads on feature delivery.",
    ],
  },
  {
    company: "Binarysentinels, Islamabad",
    role: "Java Developer",
    period: "July 2023 — Feb 2025",
    points: [
      "Built scalable backend services in Java and Spring Boot with microservices architecture.",
      "Added Redis caching and Elasticsearch-powered search.",
      "Followed SOLID principles; deployed and managed applications on AWS.",
    ],
  },
  {
    company: "myproperly, Malaysia (Remote)",
    role: "MEAN Stack Developer",
    period: "June 2022 — June 2023",
    points: [
      "Built Angular frontends wired to Node.js/Express backends.",
      "Shipped real-time chat with WebSockets and JWT-based auth.",
      "Focused on responsive, user-friendly UI/UX.",
    ],
  },
];

export const projects = [
  {
    name: "TAMTracker",
    url: "https://tamtracker.io",
    stack: ["NestJS", "React", "TanStack Start", "Hono.js", "PostgreSQL", "Drizzle ORM", "AWS", "Stripe"],
    description:
      "B2B market intelligence platform for tracking Total Addressable Market via automated data integrations — monorepo with agency/user frontends, Lambda REST API, SQS/ECS job pipelines, multi-tenant auth and Stripe usage billing.",
  },
  {
    name: "HMS AI Agent",
    url: "https://health.techvention.ae",
    stack: ["NestJS", "Prisma", "pgvector", "OpenAI", "RAG", "Milvus"],
    description:
      "AI agent for a Hospital Management System with a RAG pipeline over pgvector, enabling conversational appointment booking and secure internal knowledge queries for staff and patients.",
  },
  {
    name: "Hospital Management System",
    url: "https://health.techvention.ae",
    stack: ["NestJS", "Prisma", "PostgreSQL", "React"],
    description:
      "Full HMS covering patients, doctors, appointments, OT scheduling, pharmacy, inventory and billing with multi-role dashboards and real-time updates.",
  },
  {
    name: "Epoxy CMS",
    url: "http://dev-server.techvention.ae",
    stack: ["Node.js", "NestJS", "Prisma", "PostgreSQL", "React"],
    description:
      "Headless-style CMS with a dynamic admin dashboard for managing content, roles and live-reflected page updates.",
  },
  {
    name: "Voice-to-Text SOAP Notes",
    url: null,
    stack: ["Node.js", "Whisper", "GPT API", "MongoDB"],
    description:
      "Converts doctor-patient conversations into structured SOAP notes in real time using Whisper transcription and GPT-based NLP analysis.",
  },
  {
    name: "Logihub",
    url: "https://website.dev.logihub.sa/en#contact",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Redis"],
    description:
      "Logistics platform with shipment tracking, JWT-based RBAC, and integrations with Routech, Zoho and Al-Rajhi payment gateway.",
  },
];

export const education = {
  school: "Fast National University, CFD Campus",
  degree: "Bachelor in Computer Science",
  period: "2019 — 2023",
  detail: "Major coursework: OOP, Data Structures, Databases, Artificial Intelligence, Software Engineering.",
};

export const certifications = [
  { name: "Secure Full Stack MEAN Developer", issuer: "Coursera", date: "September 2023" },
];
