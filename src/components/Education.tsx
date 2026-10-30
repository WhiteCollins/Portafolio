import { usePreferences } from '../i18n/preferences'
import { SectionHeading } from './SectionHeading'

export function Education() {
  const { t } = usePreferences()

  return (
    <section id="formacion">
      <div className="wrap py-16">
        <SectionHeading title={t.education.title} subtitle={t.education.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2">
          {t.education.items.map((item) => (
            <div key={item.title} className="reveal grid gap-1.5 border-t-2 border-accent pt-4">
              <span className="font-mono text-[0.8rem] text-muted">{item.when}</span>
              <h3>{item.title}</h3>
              <p className="text-muted">{item.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
