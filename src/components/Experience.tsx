import { experienceTech, profile } from '../data/profile'
import { usePreferences } from '../i18n/preferences'
import { rich } from '../lib/rich'
import { Chips } from './Chips'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const { t } = usePreferences()
  const e = t.experience

  return (
    <section id="experiencia">
      <div className="wrap py-16">
        <SectionHeading title={e.title} subtitle={e.subtitle} />
        <article className="reveal grid gap-2.5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
          <div className="flex gap-4 font-mono text-[0.85rem] text-muted md:grid md:content-start md:gap-1">
            <span className="text-accent-text">{e.when}</span>
            <span>{profile.location}</span>
          </div>
          <div>
            <h3 className="text-[1.35rem]">
              {e.role} <span className="text-detail">· {profile.company}</span>
            </h3>
            <ul className="job-list mt-3.5 mb-[18px] grid max-w-[70ch] list-outside gap-2 pl-[1.1em] text-muted">
              {e.bullets.map((b) => (
                <li key={b}>{rich(b)}</li>
              ))}
            </ul>
            <Chips items={experienceTech} />
          </div>
        </article>
      </div>
    </section>
  )
}
