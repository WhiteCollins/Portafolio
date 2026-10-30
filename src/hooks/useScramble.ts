import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

// Solo mayúsculas: existen en todas las fuentes de título, así no se cuela una fuente de reserva.
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const DURATION = 1100

/**
 * Efecto de "descifrado": cada línea pasa de símbolos aleatorios a su texto
 * real, de izquierda a derecha. Se repite cada vez que cambia `trigger`.
 */
export function useScramble(lines: string[], trigger: unknown) {
  const reduced = useReducedMotion()
  const [frame, setFrame] = useState<string[] | null>(null)
  const key = lines.join('\n')

  useEffect(() => {
    if (reduced) return
    const finalLines = key.split('\n')
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION)
      setFrame(
        finalLines.map((text, i) => {
          const local = Math.max(0, Math.min(1, progress * 1.25 - i * 0.2))
          const shown = Math.floor(local * text.length)
          let out = text.slice(0, shown)
          for (let k = shown; k < text.length; k++) {
            out += text[k] === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          }
          return out
        }),
      )
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setFrame(null)
    }
    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, 150)
    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [key, trigger, reduced])

  return reduced || !frame ? lines : frame
}
