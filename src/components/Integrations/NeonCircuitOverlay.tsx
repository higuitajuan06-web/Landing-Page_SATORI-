/** Smooth Bezier circuit paths from the hub central toward each side card */
function bezierCircuitPath(
  cx: number,
  cy: number,
  tx: number,
  ty: number,
  side: 'left' | 'right'
): string {
  const dx = tx - cx
  const cpOffset = Math.abs(dx) * 0.45

  if (side === 'left') {
    return [
      `M ${cx} ${cy}`,
      `C ${cx - cpOffset} ${cy}, ${tx + cpOffset} ${ty}, ${tx} ${ty}`,
    ].join(' ')
  }

  return [
    `M ${cx} ${cy}`,
    `C ${cx + cpOffset} ${cy}, ${tx - cpOffset} ${ty}, ${tx} ${ty}`,
  ].join(' ')
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
    const top = 56
    const bottom = 344
    if (count <= 1) return cy
    return top + ((bottom - top) / (count - 1)) * index
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      viewBox="0 0 700 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="integrations-neon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.9" />
        </linearGradient>
        <filter id="integrations-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
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
              d={bezierCircuitPath(cx, cy, leftX, ty, 'left')}
              fill="none"
              stroke="url(#integrations-neon-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#integrations-neon-glow)"
              opacity="0.7"
            />
            <circle cx={leftX} cy={ty} r="3" fill="#D946EF" opacity="0.85" />
          </g>
        )
      })}

      {Array.from({ length: rightCount }, (_, i) => {
        const ty = distributeY(rightCount, i)
        return (
          <g key={`right-${i}`}>
            <path
              d={bezierCircuitPath(cx, cy, rightX, ty, 'right')}
              fill="none"
              stroke="url(#integrations-neon-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#integrations-neon-glow)"
              opacity="0.7"
            />
            <circle cx={rightX} cy={ty} r="3" fill="#3B82F6" opacity="0.85" />
          </g>
        )
      })}
    </svg>
  )
}
