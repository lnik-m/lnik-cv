interface Props {
  label: string
}

export const TechBadge = ({ label }: Props) => {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-950/60 text-blue-300 border border-blue-800/40 hover:border-blue-500/60 transition-colors">
      {label}
    </span>
  )
}
