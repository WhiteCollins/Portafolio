import { useRef, useState } from 'react'
import { profile } from '../data/profile'
import { usePreferences } from '../i18n/preferences'

function CopyEmail() {
  const { t } = usePreferences()
  const [status, setStatus] = useState<'idle' | 'copied' | 'selected'>('idle')
  const emailRef = useRef<HTMLSpanElement>(null)

  const flash = (next: 'copied' | 'selected') => {
    setStatus(next)
    window.setTimeout(() => setStatus('idle'), 1800)
  }
  const selectText = () => {
    if (!emailRef.current) return
    const range = document.createRange()
    range.selectNodeContents(emailRef.current)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
    flash('selected')
  }
  const copy = () => {
    if (!navigator.clipboard) return selectText()
    navigator.clipboard.writeText(profile.email).then(() => flash('copied'), selectText)
  }

  const label = status === 'copied' ? t.contact.copied : status === 'selected' ? t.contact.selected : t.contact.copy

  return (
    <div className="channel cut flex items-center justify-between gap-3 px-4 py-3.5">
      <div>
        <small className="block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-band-muted">{t.contact.email}</small>
        <span ref={emailRef} className="select-all [overflow-wrap:anywhere]">{profile.email}</span>
      </div>
      <button type="button" onClick={copy} className="shrink-0 cursor-pointer bg-accent px-3 py-[7px] text-[0.8rem] font-semibold text-accent-ink" aria-live="polite">
        {label}
      </button>
    </div>
  )
}

function Channel({ href, label, value }: { href: string; label: string; value: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="channel cut flex items-center justify-between gap-3 px-4 py-3.5">
      <div>
        <small className="block font-mono text-[0.72rem] uppercase tracking-[0.1em] text-band-muted">{label}</small>
        <span className="[overflow-wrap:anywhere]">{value}</span>
      </div>
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export function Contact() {
  const { t } = usePreferences()

  return (
    <section id="contacto" className="bg-band text-band-fg">
      <div className="wrap grid items-center gap-10 py-16 md:grid-cols-2">
        <div className="reveal">
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] uppercase">{t.contact.title}</h2>
          <p className="mt-3 max-w-[48ch] text-band-muted">{t.contact.text}</p>
        </div>
        <div className="reveal grid gap-2.5">
          <CopyEmail />
          <Channel href={profile.linkedin.url} label="LinkedIn" value={profile.linkedin.handle} />
          <Channel href={profile.github.url} label="GitHub" value={profile.github.handle} />
        </div>
      </div>
    </section>
  )
}
