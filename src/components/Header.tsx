import { palettes } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { usePreferences } from '../i18n/preferences'
import type { Lang } from '../i18n/types'

const SECTIONS = ['experiencia', 'proyectos', 'stack', 'contacto'] as const
const LANGS: { id: Lang; title: string }[] = [
  { id: 'es', title: 'Español' },
  { id: 'en', title: 'English' },
]

export function Header() {
  const { t, lang, palette, setLang, setPalette } = usePreferences()
  const active = useActiveSection([...SECTIONS])
  const labels = {
    experiencia: t.nav.experience,
    proyectos: t.nav.projects,
    stack: t.nav.stack,
    contacto: t.nav.contact,
  }

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="wrap flex flex-wrap items-center gap-x-5 gap-y-3 py-3">
        <a href="#inicio" className="font-display text-[1.05rem] tracking-[0.12em] text-detail" style={{ fontWeight: 'var(--p-display-weight)' }}>
          EJC<span className="text-accent-text">.dev</span>
        </a>

        <nav aria-label={t.nav.aria} className="mr-auto hidden flex-wrap gap-x-[18px] gap-y-1 text-[0.95rem] sm:flex">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="seg ml-auto sm:ml-0" role="group" aria-label={t.controls.language}>
          {LANGS.map((l) => (
            <button
              key={l.id}
              type="button"
              title={l.title}
              aria-pressed={lang === l.id}
              onClick={() => lang !== l.id && setLang(l.id)}
              className="font-mono tracking-[0.08em]"
            >
              {l.id.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex w-full items-center gap-2 sm:w-auto" role="group" aria-label={t.controls.paletteAria}>
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">{t.controls.palette}</span>
          <div className="seg flex-1 sm:flex-none">
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={palette === p.id}
                className="flex-1 justify-center sm:flex-none"
                onClick={(e) => {
                  if (palette === p.id) return
                  const box = e.currentTarget.getBoundingClientRect()
                  setPalette(p.id, { x: box.left + box.width / 2, y: box.top + box.height / 2 })
                }}
              >
                <span className="inline-flex" aria-hidden="true">
                  {p.swatch.map((c) => (
                    <i key={c} className="block h-3.5 w-[9px]" style={{ background: c }} />
                  ))}
                </span>
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="progress absolute inset-x-0 -bottom-px h-0.5 bg-accent" aria-hidden="true" />
    </header>
  )
}
