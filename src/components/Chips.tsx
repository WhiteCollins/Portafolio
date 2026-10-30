export function Chips({ items, onBand = false }: { items: string[]; onBand?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className={onBand ? 'chip chip-band' : 'chip'}>
          {item}
        </li>
      ))}
    </ul>
  )
}
