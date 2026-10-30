import { usePreferences } from '../i18n/preferences'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { t, palette } = usePreferences()

  return (
    <footer>
      <div className="wrap flex flex-wrap justify-between gap-2 py-6 font-mono text-[0.78rem] text-muted">
        <span>© {YEAR} Eric Alberto Jiménez Collins</span>
        <span>
          {t.controls.palette}: {t.controls.paletteNames[palette]}
        </span>
      </div>
    </footer>
  )
}
