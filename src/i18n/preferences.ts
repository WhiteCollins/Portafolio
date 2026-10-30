import { createContext, useContext } from 'react'
import type { Origin } from '../lib/viewTransition'
import type { Content, Lang, PaletteId } from './types'

export interface Preferences {
  lang: Lang
  palette: PaletteId
  /** Contador que sube en cada cambio de paleta, para relanzar animaciones. */
  paletteChanges: number
  t: Content
  setLang: (lang: Lang) => void
  setPalette: (palette: PaletteId, origin?: Origin) => void
}

export const PreferencesContext = createContext<Preferences | null>(null)

export function usePreferences() {
  const value = useContext(PreferencesContext)
  if (!value) throw new Error('usePreferences debe usarse dentro de <PreferencesProvider>')
  return value
}
