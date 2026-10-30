import type { Content } from './types'

export const en: Content = {
  meta: {
    title: 'Eric Jiménez Collins · Software Developer',
    description:
      'Portfolio of Eric Alberto Jiménez Collins, Full Stack developer (.NET, React, Oracle) based in Santo Domingo, Dominican Republic.',
  },
  nav: {
    aria: 'Sections',
    experience: 'Experience',
    projects: 'Projects',
    stack: 'Stack',
    contact: 'Contact',
  },
  controls: {
    language: 'Language',
    paletteAria: 'Choose palette',
    palette: 'Palette',
    paletteNames: {
      zero: 'Zero & the Black Knights',
      britannia: 'Holy Empire of Britannia',
      guren: 'C.C. & Guren',
    },
  },
  hero: {
    eyebrow: 'Software developer · Santo Domingo, DR',
    pitch:
      'I build web applications end to end: **React and Angular interfaces**, **.NET APIs with Clean Architecture and CQRS**, and business logic on **Oracle (PL/SQL) and SQL Server**. I focus on maintainable code and on turning business needs into concrete solutions.',
    cta: 'View projects',
  },
  panel: {
    title: 'Dossier',
    status: '● Active',
    rows: [
      { label: 'Role', value: 'Programmer Analyst · Grupo Humano' },
      { label: 'Since', value: 'February 2026' },
      { label: 'Education', value: 'Software Development Technologist, ITLA' },
      { label: 'Core', value: '.NET 10 · React 19 · Oracle · SQL Server' },
      { label: 'GitHub', value: '25 repositories · @WhiteCollins' },
    ],
  },
  experience: {
    title: 'Experience',
    subtitle: 'Where I work today',
    when: '02/2026 – Present',
    role: 'Programmer Analyst',
    bullets: [
      'Building a **high-performance internal portal** that gives Humano Seguros agents a 360° view of each customer, consolidating data from multiple sources.',
      'Modules for **active policies, claims, collections, per-policy billing, payment history** and customer journey.',
      'Integrated the **customer segmentation model (Premium / Regular)** into the customer profile.',
      'APIs in **.NET 10 with Clean Architecture and CQRS/MediatR**, using Dapper over SQL Server, Oracle and MongoDB.',
      "Hands-on work in the insurer's core systems with **Oracle Database, PL/SQL and ORDS**.",
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Selected from 25 GitHub repositories',
    featured: {
      tag: 'Main project · 2026 · In development',
      description:
        'SaaS point-of-sale platform for businesses in the Dominican Republic: sales, cash register, inventory, branches, users and roles, electronic invoicing (e-CF) and DGII tax reports. Restaurants are the first vertical.',
      bullets: [
        'Multi-tenant architecture, closed by default: every endpoint declares its permission.',
        'Nx monorepo with Zod contracts shared by backend and frontend.',
        'Money stored as integer cents, with totals computed by a single domain library on the POS, admin panel and server.',
        'Local-first PWA point of sale with IndexedDB; split payments, X report and Z close.',
      ],
      stats: {
        models: 'data models',
        modules: 'API modules',
        tests: 'automated tests',
        phase: 'phase 1 blocks done',
      },
      private: '🔒 Private repository · demo available on request',
    },
    items: {
      finanzas: {
        kind: 'Web · PWA',
        title: 'Personal Finance',
        description:
          'Tracks income, expenses, category budgets and savings goals. Scans receipts and produces a financial diagnosis with Gemini; stores data in libSQL and syncs with Turso. Installable as an app.',
      },
      smartdinnerV1: {
        kind: 'Web + Mobile + AI',
        title: 'SmartDinner v1',
        description:
          'Final project built by a team of three at ITLA: table reservations, digital menu, orders and an admin panel, plus a Python service that forecasts dish demand to optimize inventory.',
      },
      northwind: {
        kind: 'Backend',
        title: 'Northwind by context',
        description:
          '.NET 8 API split by bounded context (products, suppliers and shippers). Each one has its own domain, application, persistence and API layers, with centralized dependency injection.',
      },
      dwh: {
        kind: 'Data · ETL',
        title: 'Data warehouse loader',
        description:
          'Worker Service that extracts data from Northwind and loads the dimensions of an orders data warehouse: categories, customers, employees and more, with typed services and results.',
      },
      flowerClassifier: {
        kind: 'Web · AI',
        title: 'Flower classifier',
        description:
          'Upload photos in batches, compress them in the browser, classify them with a custom model trained on Azure Custom Vision and download the results sorted into folders as a ZIP.',
      },
      flowerShop: {
        kind: 'Web',
        title: 'Flower Shop Manager',
        description:
          'Inventory management for a flower shop: catalog by category, stock control, validated forms and a statistics page with distribution charts.',
      },
      toolbox: {
        kind: 'Mobile',
        title: 'Toolbox',
        description:
          'Flutter app that consumes public APIs: predicts gender and age from a name, finds universities by country and shows weather, Pokémon and news.',
      },
      utilities: {
        kind: 'Mobile · Android',
        title: 'Utilities app',
        description:
          'Web app with a calculator, multiplication tables and a translator, packaged as a native Android app with Capacitor.',
      },
    },
    privateRepo: 'Private repository',
    viewCode: 'View code ↗',
    more:
      'Also on GitHub: SOLID principles exercises in C# ([SRP](https://github.com/WhiteCollins/SRP1), [OCP](https://github.com/WhiteCollins/ocp), [LSP](https://github.com/WhiteCollins/LSP)), an [Azure DevOps extension](https://github.com/WhiteCollins/Proyfinal) in React and the first steps of [SmartDinner mobile](https://github.com/WhiteCollins/SmartDinner-new) in React Native.',
  },
  stack: {
    title: 'Stack',
    subtitle: 'What I work with',
    groups: [
      { label: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'PL/SQL', 'Dart'] },
      { label: 'Frontend', items: ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'shadcn/ui', 'Zustand'] },
      { label: 'Backend', items: ['.NET', 'NestJS', 'Node.js', 'Oracle ORDS'] },
      { label: 'Architecture', items: ['Clean Architecture', 'CQRS / MediatR', 'Multi-tenant', 'Unit & E2E testing'] },
      { label: 'Data', items: ['Oracle', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Dapper', 'Prisma', 'EF Core'] },
      { label: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Vercel', 'Docker', 'GitHub Actions'] },
      { label: 'Tools', items: ['Git', 'GitHub', 'Azure DevOps', 'Jira'] },
      { label: 'Applied AI', items: ['AI-assisted development', 'Prompt engineering', 'Gemini API', 'Azure Custom Vision'] },
    ],
  },
  education: {
    title: 'Education',
    subtitle: 'Studies',
    items: [
      { when: '05/2023 – 12/2025', title: 'Software Development Technologist', school: 'Instituto Tecnológico de Las Américas (ITLA)' },
      { when: '07/2025 – 10/2025', title: 'Introduction to Digital Skills', school: 'IMMUNE Technology Institute' },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "I'm looking for projects and teams where I can build software that solves real business problems. Write to me and I'll get back to you soon.",
    email: 'Email',
    copy: 'Copy',
    copied: 'Copied',
    selected: 'Selected',
  },
}
