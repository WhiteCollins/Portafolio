import { usePreferences } from '../i18n/preferences'
import { Chips } from './Chips'
import { SectionHeading } from './SectionHeading'

export function Stack() {
  const { t } = usePreferences()

  return (
    <section id="stack">
      <div className="wrap py-16">
        <SectionHeading title={t.stack.title} subtitle={t.stack.subtitle} />
        <dl className="grid gap-x-10 md:grid-cols-2">
          {t.stack.groups.map((g) => (
            <div key={g.label} className="reveal grid items-start gap-1.5 border-b border-line py-3.5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4">
              <dt className="pt-1 font-mono text-[0.8rem] uppercase tracking-[0.08em] text-detail">{g.label}</dt>
              <dd>
                <Chips items={g.items} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
