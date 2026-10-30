import type { PaletteId } from '../i18n/types'

/** Fuentes que usa cada paleta (peso + familia), en el formato de `document.fonts.load`. */
const FONTS: Record<PaletteId, string[]> = {
  zero: ['800 1em Orbitron', '400 1em Barlow', '600 1em Barlow', '400 1em "JetBrains Mono"'],
  britannia: ['700 1em Cinzel', '400 1em "Source Serif 4"', '600 1em "Source Serif 4"', '400 1em "JetBrains Mono"'],
  guren: ['700 1em Rajdhani', '400 1em "Chakra Petch"', '600 1em "Chakra Petch"', '400 1em "Share Tech Mono"'],
}

// Incluye letras acentuadas para que también se descarguen esos glifos.
const SAMPLE = 'AÉÍÓÚÑaéíóúñ'

/**
 * Descarga las fuentes de una paleta antes de mostrarla, para que el texto no
 * cambie de tamaño al terminar de cargar. Nunca espera más de `timeout` ms.
 */
export function loadPaletteFonts(palette: PaletteId, timeout = 800): Promise<void> {
  if (!('fonts' in document)) return Promise.resolve()
  const loads = Promise.all(FONTS[palette].map((font) => document.fonts.load(font, SAMPLE))).then(() => undefined)
  const limit = new Promise<void>((resolve) => window.setTimeout(resolve, timeout))
  return Promise.race([loads, limit]).catch(() => undefined)
}
