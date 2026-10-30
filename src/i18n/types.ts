export type Lang = 'es' | 'en'
export type PaletteId = 'zero' | 'britannia' | 'guren'
export type ProjectId =
  | 'finanzas'
  | 'smartdinnerV1'
  | 'northwind'
  | 'dwh'
  | 'flowerClassifier'
  | 'flowerShop'
  | 'toolbox'
  | 'utilities'
export type StatId = 'models' | 'modules' | 'tests' | 'phase'

/**
 * Todo el texto visible del sitio. Admite **negrita** y [enlaces](https://…)
 * mediante el helper `rich()`.
 */
export interface Content {
  meta: { title: string; description: string }
  nav: { aria: string; experience: string; projects: string; stack: string; contact: string }
  controls: {
    language: string
    paletteAria: string
    palette: string
    paletteNames: Record<PaletteId, string>
  }
  hero: { eyebrow: string; pitch: string; cta: string }
  panel: {
    title: string
    status: string
    rows: { label: string; value: string }[]
  }
  experience: {
    title: string
    subtitle: string
    when: string
    role: string
    bullets: string[]
  }
  projects: {
    title: string
    subtitle: string
    featured: {
      tag: string
      description: string
      bullets: string[]
      stats: Record<StatId, string>
      private: string
    }
    items: Record<ProjectId, { kind: string; title: string; description: string }>
    privateRepo: string
    viewCode: string
    more: string
  }
  stack: {
    title: string
    subtitle: string
    groups: { label: string; items: string[] }[]
  }
  education: {
    title: string
    subtitle: string
    items: { when: string; title: string; school: string }[]
  }
  contact: {
    title: string
    text: string
    email: string
    copy: string
    copied: string
    selected: string
  }
}
