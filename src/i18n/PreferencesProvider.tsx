import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { withViewTransition, type Origin } from '../lib/viewTransition'
import { en } from './en'
import { es } from './es'
import { PreferencesContext } from './preferences'
import type { Lang, PaletteId } from './types'

const CONTENT = { es, en }
const PALETTES: PaletteId[] = ['zero', 'britannia', 'guren']
const THEME_COLOR: Record<PaletteId, string> = { zero: '#1a162b', britannia: '#13366c', guren: '#121e20' }
const LANG_KEY = 'ejc-lang'
const PALETTE_KEY = 'ejc-palette'

function read(key: string) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Almacenamiento bloqueado (modo privado): la preferencia solo dura esta visita.
  }
}

function isPalette(value: string | null): value is PaletteId {
  return PALETTES.includes(value as PaletteId)
}

function initialLang(): Lang {
  const saved = read(LANG_KEY)
  if (saved === 'es' || saved === 'en') return saved
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

function initialPalette(): PaletteId {
  const fromHash = location.hash.slice(1)
  if (isPalette(fromHash)) return fromHash
  const saved = read(PALETTE_KEY)
  return isPalette(saved) ? saved : 'zero'
}

function applyPaletteToDocument(palette: PaletteId) {
  document.documentElement.dataset.palette = palette
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[palette])
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [palette, setPaletteState] = useState<PaletteId>(initialPalette)
  const [paletteChanges, setPaletteChanges] = useState(0)
  const t = CONTENT[lang]

  useEffect(() => {
    applyPaletteToDocument(palette)
  }, [palette])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang, t])

  useEffect(() => {
    const onHash = () => {
      const next = location.hash.slice(1)
      if (isPalette(next)) setPaletteState(next)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const setLang = useCallback((next: Lang) => {
    write(LANG_KEY, next)
    withViewTransition(() => setLangState(next))
  }, [])

  const setPalette = useCallback((next: PaletteId, origin?: Origin) => {
    write(PALETTE_KEY, next)
    history.replaceState(null, '', `#${next}`)
    withViewTransition(() => {
      // Se aplica al documento dentro de la transición para que la captura "nueva" ya tenga los colores.
      applyPaletteToDocument(next)
      setPaletteState(next)
      setPaletteChanges((n) => n + 1)
    }, origin)
  }, [])

  const value = useMemo(
    () => ({ lang, palette, paletteChanges, t, setLang, setPalette }),
    [lang, palette, paletteChanges, t, setLang, setPalette],
  )

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}
