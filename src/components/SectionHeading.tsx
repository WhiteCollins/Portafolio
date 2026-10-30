export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="sec-head reveal mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-3.5">
      <h2 className="mark-before text-[clamp(1.5rem,3vw,2.1rem)] uppercase">{title}</h2>
      <p className="text-[0.95rem] text-muted">{subtitle}</p>
    </div>
  )
}
