/** Trazado tipo circuito desde el hub central hacia cada tarjeta lateral */
function circuitPath(
  cx: number,
  cy: number,
  tx: number,
  ty: number,
  side: 'left' | 'right'
): string {
  const elbowX = side === 'left' ? cx - 42 : cx + 42
  return `M ${cx} ${cy} L ${elbowX} ${cy} L ${elbowX} ${ty} L ${tx} ${ty}`
}

interface NeonCircuitOverlayProps {
  leftCount: number
  rightCount: number
}

export function NeonCircuitOverlay({ leftCount, rightCount }: NeonCircuitOverlayProps) {
  const cx = 350
  const cy = 200
  const leftX = 28
  const rightX = 672

  const distributeY = (count: number, index: number) => {
    const top = 52
    const bottom = 348
    if (count <= 1) return cy
    return top + ((bottom - top) / (count - 1)) * index
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 700 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="integrations-neon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.95" />
        </linearGradient>
        <filter id="integrations-neon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {Array.from({ length: leftCount }, (_, i) => {
        const ty = distributeY(leftCount, i)
        return (
          <g key={`left-${i}`}>
            <path
              d={circuitPath(cx, cy, leftX, ty, 'left')}
              fill="none"
              stroke="url(#integrations-neon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#integrations-neon-glow)"
              opacity="0.85"
            />
            <circle cx={leftX} cy={ty} r="2.5" fill="#a855f7" opacity="0.9" />
          </g>
        )
      })}

      {Array.from({ length: rightCount }, (_, i) => {
        const ty = distributeY(rightCount, i)
        return (
          <g key={`right-${i}`}>
            <path
              d={circuitPath(cx, cy, rightX, ty, 'right')}
              fill="none"
              stroke="url(#integrations-neon-grad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#integrations-neon-glow)"
              opacity="0.85"
            />
            <circle cx={rightX} cy={ty} r="2.5" fill="#38bdf8" opacity="0.9" />
          </g>
        )
      })}
    </svg>
  )
}
