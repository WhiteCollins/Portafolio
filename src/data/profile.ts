import type { PaletteId, ProjectId, StatId } from '../i18n/types'

/** Datos que no cambian con el idioma: enlaces, tecnologías y cifras. */
export const profile = {
  firstLine: 'Eric Alberto',
  secondLine: 'Jiménez Collins',
  role: 'Full Stack · .NET · React · Oracle',
  company: 'Grupo Humano',
  location: 'Santo Domingo',
  email: 'collinsjcwhite@gmail.com',
  github: { url: 'https://github.com/WhiteCollins', handle: 'WhiteCollins' },
  linkedin: {
    url: 'https://linkedin.com/in/eric-alberto-jimenez-collins',
    handle: 'eric-alberto-jimenez-collins',
  },
}

export const ticker = [
  '.NET', 'C#', 'React', 'Angular', 'TypeScript', 'Oracle', 'PL/SQL', 'SQL Server',
  'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Flutter', 'MongoDB', 'Docker', 'Azure',
]

export const experienceTech = [
  'React 19', 'Vite', 'Tailwind CSS 4', 'shadcn/ui', 'Zustand', '.NET 10', 'Dapper', 'SQL Server', 'Oracle', 'MongoDB',
]

export const featured = {
  name: 'SmartDinner',
  tech: ['TypeScript', 'NestJS', 'Angular', 'PostgreSQL 17', 'Prisma', 'Better Auth', 'Nx', 'Zod', 'Dexie'],
  stats: [
    { id: 'models', value: 55 },
    { id: 'modules', value: 24 },
    { id: 'tests', value: 558 },
    { id: 'phase', value: '3/8' },
  ] satisfies { id: StatId; value: number | string }[],
}

export interface Project {
  id: ProjectId
  year: number
  /** URL pública del repositorio; `null` si es privado. */
  repo: string | null
  tech: string[]
}

export const projects: Project[] = [
  { id: 'finanzas', year: 2026, repo: null, tech: ['React', 'TypeScript', 'Tailwind', 'Recharts', 'Express', 'Turso', 'Gemini API', 'Vercel'] },
  { id: 'smartdinnerV1', year: 2025, repo: null, tech: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'Python', 'scikit-learn', 'Docker'] },
  { id: 'northwind', year: 2024, repo: 'https://github.com/WhiteCollins/Northwind-1-', tech: ['C#', '.NET 8', 'ASP.NET Core', 'EF Core', 'SQL Server'] },
  { id: 'dwh', year: 2025, repo: 'https://github.com/WhiteCollins/dimensiones-del-almacen-de-datos', tech: ['C#', '.NET 8', 'Worker Service', 'EF Core', 'SQL Server'] },
  { id: 'flowerClassifier', year: 2024, repo: 'https://github.com/WhiteCollins/project', tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Azure Custom Vision', 'JSZip'] },
  { id: 'flowerShop', year: 2025, repo: 'https://github.com/WhiteCollins/flower-shop1', tech: ['Next.js', 'TypeScript', 'shadcn/ui', 'Recharts', 'React Hook Form', 'Zod'] },
  { id: 'toolbox', year: 2025, repo: 'https://github.com/WhiteCollins/Tarea6mov', tech: ['Flutter', 'Dart', 'REST APIs', 'Material Design'] },
  { id: 'utilities', year: 2025, repo: 'https://github.com/WhiteCollins/Appandroid', tech: ['React', 'Material UI', 'React Router', 'Capacitor', 'Android'] },
]

export const palettes: { id: PaletteId; label: string; swatch: [string, string, string] }[] = [
  { id: 'zero', label: 'Zero', swatch: ['#1a162b', '#2e313a', '#ad2748'] },
  { id: 'britannia', label: 'Britannia', swatch: ['#fdfbf7', '#13366c', '#d3c482'] },
  { id: 'guren', label: 'C.C. & Guren', swatch: ['#121e20', '#30746b', '#e12a3c'] },
]
