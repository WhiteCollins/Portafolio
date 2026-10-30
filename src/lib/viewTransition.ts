import { flushSync } from 'react-dom'

export interface Origin {
  x: number
  y: number
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Aplica un cambio de estado dentro de una View Transition. Con `origin`, el
 * estado nuevo se revela en un círculo que crece desde ese punto.
 * Sin soporte del navegador (o con movimiento reducido) el cambio es inmediato.
 */
export function withViewTransition(update: () => void, origin?: Origin) {
  if (!document.startViewTransition || reducedMotion()) {
    update()
    return
  }
  const transition = document.startViewTransition(() => flushSync(update))
  if (!origin) return
  transition.ready.then(() => {
    const { x, y } = origin
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 750, easing: 'cubic-bezier(.7,0,.25,1)', pseudoElement: '::view-transition-new(root)' },
    )
  })
}
