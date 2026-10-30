import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Muestra `target` desde el inicio y, la primera vez que el elemento entra en
 * pantalla, lo cuenta desde 0 hasta `target`.
 */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1400) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const [value, setValue] = useState(target)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced || !('IntersectionObserver' in window)) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration)
          setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, duration, reduced])

  return { ref, value }
}
