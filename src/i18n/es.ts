import type { Content } from './types'

export const es: Content = {
  meta: {
    title: 'Eric Jiménez Collins · Desarrollador de software',
    description:
      'Portafolio de Eric Alberto Jiménez Collins, desarrollador Full Stack (.NET, React, Oracle) en Santo Domingo, República Dominicana.',
  },
  nav: {
    aria: 'Secciones',
    experience: 'Experiencia',
    projects: 'Proyectos',
    stack: 'Stack',
    contact: 'Contacto',
  },
  controls: {
    language: 'Idioma',
    paletteAria: 'Elegir paleta',
    palette: 'Paleta',
    paletteNames: {
      zero: 'Zero y los Caballeros Negros',
      britannia: 'Sacro Imperio de Britannia',
      guren: 'C.C. & Guren',
    },
  },
  hero: {
    eyebrow: 'Desarrollador de software · Santo Domingo, RD',
    pitch:
      'Construyo aplicaciones web de punta a punta: **interfaces en React y Angular**, **APIs en .NET con Clean Architecture y CQRS**, y lógica de negocio sobre **Oracle (PL/SQL) y SQL Server**. Me enfoco en código mantenible y en convertir necesidades del negocio en soluciones concretas.',
    cta: 'Ver proyectos',
  },
  panel: {
    title: 'Expediente',
    status: '● Activo',
    rows: [
      { label: 'Cargo', value: 'Analista Programador · Grupo Humano' },
      { label: 'Desde', value: 'Febrero 2026' },
      { label: 'Formación', value: 'Tecnólogo en Desarrollo de Software, ITLA' },
      { label: 'Núcleo', value: '.NET 10 · React 19 · Oracle · SQL Server' },
      { label: 'GitHub', value: '25 repositorios · @WhiteCollins' },
    ],
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Dónde trabajo hoy',
    when: '02/2026 – Actualidad',
    role: 'Analista Programador',
    bullets: [
      'Desarrollo de un **portal interno de alto rendimiento** que da a los agentes de Humano Seguros una vista 360° del cliente, consolidando información de múltiples orígenes de datos.',
      'Módulos de **pólizas vigentes, siniestros y reclamos, cobranza, facturación por póliza, historial de pagos** y customer journey.',
      'Integración del modelo de **segmentación de clientes (Premium / Regular)** en el perfil del cliente.',
      'APIs en **.NET 10 con Clean Architecture y CQRS/MediatR**, con Dapper sobre SQL Server, Oracle y MongoDB.',
      'Trabajo directo en el core de la aseguradora con **Oracle Database, PL/SQL y ORDS**.',
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Seleccionados de 25 repositorios en GitHub',
    featured: {
      tag: 'Proyecto principal · 2026 · En desarrollo',
      description:
        'Plataforma SaaS de punto de venta para negocios de República Dominicana: venta, caja, inventario, sucursales, usuarios y roles, facturación electrónica (e-CF) y reportes para la DGII. El restaurante es el primer vertical.',
      bullets: [
        'Arquitectura multi-organización con acceso cerrado por defecto: cada endpoint declara su permiso.',
        'Monorepo Nx con contratos Zod compartidos entre backend y frontend.',
        'Dinero en centavos enteros y totales calculados con una sola librería de dominio en POS, panel y servidor.',
        'POS como PWA local-first con IndexedDB; cobro mixto, reporte X y cierre Z.',
      ],
      stats: {
        models: 'modelos de datos',
        modules: 'módulos en el API',
        tests: 'pruebas automatizadas',
        phase: 'bloques de la fase 1 listos',
      },
      private: '🔒 Repositorio privado · demo disponible a solicitud',
    },
    items: {
      finanzas: {
        kind: 'Web · PWA',
        title: 'Finanzas Personales',
        description:
          'Controla ingresos, gastos, presupuestos por categoría y metas de ahorro. Escanea recibos y genera un diagnóstico financiero con Gemini; guarda en libSQL y sincroniza con Turso. Se instala como app.',
      },
      smartdinnerV1: {
        kind: 'Web + Móvil + IA',
        title: 'SmartDinner v1',
        description:
          'Proyecto final en equipo de tres en el ITLA: reservas de mesas, menú digital, pedidos y panel de administración, con un servicio en Python que predice la demanda de platillos para optimizar el inventario.',
      },
      northwind: {
        kind: 'Backend',
        title: 'Northwind por contextos',
        description:
          'API en .NET 8 dividida por contexto (productos, suplidores y transportistas). Cada uno tiene sus capas de dominio, aplicación, persistencia y API, con inyección de dependencias centralizada.',
      },
      dwh: {
        kind: 'Datos · ETL',
        title: 'Carga de almacén de datos',
        description:
          'Worker Service que extrae datos de Northwind y carga las dimensiones de un almacén de datos de órdenes: categorías, clientes, empleados y más, con servicios y resultados tipados.',
      },
      flowerClassifier: {
        kind: 'Web · IA',
        title: 'Clasificador de flores',
        description:
          'Sube fotos por lote, las comprime en el navegador, las clasifica con un modelo propio entrenado en Azure Custom Vision y descarga el resultado ordenado por carpetas en un ZIP.',
      },
      flowerShop: {
        kind: 'Web',
        title: 'Mi Floristería',
        description:
          'Gestión de inventario para una floristería: catálogo por categorías, control de stock, formularios validados y página de estadísticas con gráficos de distribución.',
      },
      toolbox: {
        kind: 'Móvil',
        title: 'Caja de herramientas',
        description:
          'App en Flutter que consume APIs públicas: predice género y edad a partir de un nombre, busca universidades por país y muestra clima, Pokémon y noticias.',
      },
      utilities: {
        kind: 'Móvil · Android',
        title: 'App de utilidades',
        description:
          'Aplicación web con sumadora, tablas de multiplicar y traductor, empaquetada como app nativa de Android con Capacitor.',
      },
    },
    privateRepo: 'Repositorio privado',
    viewCode: 'Ver código ↗',
    more:
      'También en GitHub: ejercicios de principios SOLID en C# ([SRP](https://github.com/WhiteCollins/SRP1), [OCP](https://github.com/WhiteCollins/ocp), [LSP](https://github.com/WhiteCollins/LSP)), una [extensión para Azure DevOps](https://github.com/WhiteCollins/Proyfinal) en React y el arranque de [SmartDinner móvil](https://github.com/WhiteCollins/SmartDinner-new) en React Native.',
  },
  stack: {
    title: 'Stack',
    subtitle: 'Con lo que trabajo',
    groups: [
      { label: 'Lenguajes', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'PL/SQL', 'Dart'] },
      { label: 'Frontend', items: ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'shadcn/ui', 'Zustand'] },
      { label: 'Backend', items: ['.NET', 'NestJS', 'Node.js', 'Oracle ORDS'] },
      { label: 'Arquitectura', items: ['Clean Architecture', 'CQRS / MediatR', 'Multi-organización', 'Pruebas unitarias y E2E'] },
      { label: 'Datos', items: ['Oracle', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Dapper', 'Prisma', 'EF Core'] },
      { label: 'Cloud y DevOps', items: ['Azure', 'AWS', 'Vercel', 'Docker', 'GitHub Actions'] },
      { label: 'Herramientas', items: ['Git', 'GitHub', 'Azure DevOps', 'Jira'] },
      { label: 'IA aplicada', items: ['Desarrollo asistido por IA', 'Prompt engineering', 'Gemini API', 'Azure Custom Vision'] },
    ],
  },
  education: {
    title: 'Formación',
    subtitle: 'Estudios',
    items: [
      { when: '05/2023 – 12/2025', title: 'Tecnólogo en Desarrollo de Software', school: 'Instituto Tecnológico de Las Américas (ITLA)' },
      { when: '07/2025 – 10/2025', title: 'Iniciación en Competencias Digitales', school: 'IMMUNE Technology Institute' },
    ],
  },
  contact: {
    title: 'Hablemos',
    text: 'Busco proyectos y equipos donde construir software que resuelva problemas reales del negocio. Escríbeme y te respondo pronto.',
    email: 'Correo',
    copy: 'Copiar',
    copied: 'Copiado',
    selected: 'Seleccionado',
  },
}
