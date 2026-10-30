import { useEffect, useRef, type CSSProperties } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const WINGS: { d: string; delay: string }[] = [
  { d: 'M100 62 C 80 40, 50 30, 8 34 C 40 44, 62 58, 76 76 Z', delay: '.45s' },
  { d: 'M100 62 C 120 40, 150 30, 192 34 C 160 44, 138 58, 124 76 Z', delay: '.45s' },
  { d: 'M88 82 C 72 90, 54 104, 42 124 C 64 110, 80 101, 95 97 Z', delay: '.6s' },
  { d: 'M112 82 C 128 90, 146 104, 158 124 C 136 110, 120 101, 105 97 Z', delay: '.6s' },
  { d: 'M100 38 L 110 66 L 100 108 L 90 66 Z', delay: '.3s' },
]

/** Sigilo del Geass; vuelve a "activarse" cada vez que cambia `flashKey`. */
export function Sigil({ flashKey }: { flashKey: number }) {
  const ref = useRef<SVGSVGElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const svg = ref.current
    if (!svg || flashKey === 0 || reduced) return
    svg.classList.remove('flash')
    void svg.getBoundingClientRect()
    svg.classList.add('flash')
  }, [flashKey, reduced])

  return (
    <svg
      ref={ref}
      className="sigil w-[min(230px,72%)]"
      viewBox="0 0 200 140"
      aria-hidden="true"
      onAnimationEnd={(e) => e.animationName === 'activate' && ref.current?.classList.remove('flash')}
    >
      <circle className="orbit" cx="100" cy="70" r="69" />
      <circle className="ring" cx="100" cy="70" r="62" />
      <g fill="currentColor">
        {WINGS.map((w) => (
          <path key={w.d} className="wing" d={w.d} style={{ '--d': w.delay } as CSSProperties} />
        ))}
      </g>
    </svg>
  )
}
