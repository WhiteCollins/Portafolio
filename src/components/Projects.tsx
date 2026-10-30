import { useRef, type PointerEvent } from 'react'
import { featured, projects, type Project } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePreferences } from '../i18n/preferences'
import { rich } from '../lib/rich'
import { Chips } from './Chips'
import { SectionHeading } from './SectionHeading'

function Stat({ value, label }: { value: number | string; label: string }) {
  const numeric = typeof value === 'number' ? value : 0
  const { ref, value: shown } = useCountUp<HTMLElement>(numeric)
  return (
    <div className="grid gap-0.5 bg-band p-[18px]">
      <b ref={ref} className="font-display text-[2rem] leading-none tabular-nums">
        {typeof value === 'number' ? shown : value}
      </b>
      <span className="text-[0.85rem] text-band-muted">{label}</span>
    </div>
  )
}

function Featured() {
  const { t } = usePreferences()
  const f = t.projects.featured

  return (
    <article className="cut reveal mb-7 grid gap-9 border-l-[3px] border-accent bg-band px-5 py-6 text-band-fg sm:p-9 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
      <div>
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-band-accent">{f.tag}</span>
        <h3 className="mt-2.5 mb-3 text-[clamp(1.6rem,3.4vw,2.3rem)] uppercase">{featured.name}</h3>
        <p className="max-w-[60ch] text-band-muted">{f.description}</p>
        <ul className="mt-4 mb-5 grid list-disc gap-1.5 pl-[1.1em] text-band-muted">
          {f.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <Chips items={featured.tech} onBand />
      </div>
      <div className="grid content-start gap-4">
        <div className="grid grid-cols-2 gap-px bg-band-fg/20">
          {featured.stats.map((s) => (
            <Stat key={s.id} value={s.value} label={f.stats[s.id]} />
          ))}
        </div>
        <span className="font-mono text-[0.78rem] text-band-muted">{f.private}</span>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = usePreferences()
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const item = t.projects.items[project.id]

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const card = ref.current
    if (!card || reduced || e.pointerType !== 'mouse') return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    card.style.setProperty('--mx', `${x * 100}%`)
    card.style.setProperty('--my', `${y * 100}%`)
    card.style.setProperty('--ry', `${((x - 0.5) * 6).toFixed(2)}deg`)
    card.style.setProperty('--rx', `${((0.5 - y) * 6).toFixed(2)}deg`)
  }
  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className="card cut reveal flex flex-col gap-3 p-6">
      <div className="flex justify-between gap-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-muted">
        <span className="text-detail">{item.kind}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="uppercase">{item.title}</h3>
      <p className="text-[0.97rem] text-muted">{item.description}</p>
      <div className="mt-auto pt-1.5">
        <Chips items={project.tech} />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-dashed border-line pt-3 text-[0.88rem]">
        {project.repo ? (
          <a href={project.repo} target="_blank" rel="noopener" className="font-semibold text-accent-text hover:underline">
            {t.projects.viewCode}
          </a>
        ) : (
          <span className="font-mono text-[0.78rem] text-muted">{t.projects.privateRepo}</span>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = usePreferences()

  return (
    <section id="proyectos">
      <div className="wrap py-16">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
        <Featured />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <p className="reveal mt-7 text-[0.95rem] text-muted">{rich(t.projects.more)}</p>
      </div>
    </section>
  )
}
