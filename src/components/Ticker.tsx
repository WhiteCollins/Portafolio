import { ticker } from '../data/profile'

export function Ticker() {
  return (
    <div className="ticker overflow-hidden border-y border-line py-3.5" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex">
            {ticker.map((item) => (
              <li
                key={item}
                className="flex items-center gap-9 whitespace-nowrap px-[18px] font-display text-[0.95rem] uppercase tracking-[0.1em] text-muted"
                style={{ fontWeight: 'var(--p-display-weight)' }}
              >
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
