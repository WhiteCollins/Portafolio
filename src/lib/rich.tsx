import { Fragment, type ReactNode } from 'react'

const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g

/** Convierte **negrita** y [enlaces](https://…) de los textos traducidos en JSX. */
export function rich(text: string, linkClassName = 'text-accent-text underline-offset-2 hover:underline'): ReactNode {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(TOKEN)) {
    const index = match.index ?? 0
    if (index > last) parts.push(text.slice(last, index))
    if (match[1] !== undefined) {
      parts.push(<strong key={index} className="font-semibold text-fg">{match[1]}</strong>)
    } else {
      parts.push(
        <a key={index} href={match[3]} target="_blank" rel="noopener" className={linkClassName}>
          {match[2]}
        </a>,
      )
    }
    last = index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.map((part, i) => <Fragment key={i}>{part}</Fragment>)
}
