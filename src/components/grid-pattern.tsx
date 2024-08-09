export function GridPattern() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 grid grid-cols-2 md:grid-cols-3">
      <div className="border border-zinc-400 border-opacity-20" />
      <div className="border border-zinc-400 border-opacity-20" />
      <div className="border border-zinc-400 border-opacity-20" />
      <div className="border border-zinc-400 border-opacity-20" />
      <div className="hidden border border-zinc-400 border-opacity-20 md:block" />
      <div className="hidden border border-zinc-400 border-opacity-20 md:block" />
    </div>
  )
}
