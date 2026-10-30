import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { useScramble } from '../hooks/useScramble'
import { usePreferences } from '../i18n/preferences'
import { rich } from '../lib/rich'
import { Sigil } from './Sigil'

const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties

export function Hero() {
  const { t, paletteChanges } = usePreferences()
  const [line1, line2] = useScramble([profile.firstLine, profile.secondLine], paletteChanges)

  return (
    <section id="inicio" className="hero relative overflow-hidden">
      <div className="wrap grid items-center gap-9 py-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:gap-12 md:pt-[72px] md:pb-16">
        <div>
          <p className="mark-before animate-rise font-mono text-[0.8rem] uppercase tracking-[0.14em] text-detail" style={delay(0.05)}>
            {t.hero.eyebrow}
          </p>
          <h1
            className="text-display animate-rise mt-[18px] mb-3.5 uppercase"
            style={delay(0.15)}
            aria-label={`${profile.firstLine} ${profile.secondLine}`}
          >
            <span className="block" aria-hidden="true">{line1}</span>
            <span className="hero-name-accent block text-accent-text" aria-hidden="true">{line2}</span>
          </h1>
          <p className="animate-rise mb-[22px] font-mono text-[0.95rem] text-detail" style={delay(0.3)}>
            {profile.role}
            <span className="animate-blink ml-1 inline-block h-[1.1em] w-[0.6em] bg-accent align-[-0.2em]" aria-hidden="true" />
          </p>
          <p className="animate-rise max-w-[58ch] text-[1.1rem] text-muted" style={delay(0.4)}>
            {rich(t.hero.pitch)}
          </p>
          <div className="animate-rise mt-[30px] flex flex-wrap gap-3" style={delay(0.5)}>
            <a href="#proyectos" className="btn btn-primary cut">{t.hero.cta}</a>
            <a href={profile.github.url} target="_blank" rel="noopener" className="btn btn-ghost cut">GitHub ↗</a>
            <a href={profile.linkedin.url} target="_blank" rel="noopener" className="btn btn-ghost cut">LinkedIn ↗</a>
          </div>
        </div>

        <div className="grid justify-items-center gap-[18px]">
          <Sigil flashKey={paletteChanges} />
          <div className="cut animate-rise w-full border border-line bg-surface px-[22px] py-5" style={delay(0.65)}>
            <div className="mb-1.5 flex justify-between border-b border-line pb-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted">
              <span>{t.panel.title}</span>
              <b className="font-medium text-accent-text">{t.panel.status}</b>
            </div>
            <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 text-[0.92rem]">
              {t.panel.rows.map((row) => (
                <div key={row.label} className="contents">
                  <dt className="pt-[3px] font-mono text-[0.78rem] text-muted">{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
