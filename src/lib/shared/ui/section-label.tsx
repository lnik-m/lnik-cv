import type { PropsWithChildren } from 'react'

export const SectionLabel = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
        {children}
      </span>
      <div className="flex-1 h-px bg-blue-900/50" />
    </div>
  )
}
