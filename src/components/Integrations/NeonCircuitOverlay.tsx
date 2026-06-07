/** Smooth Bezier circuit paths from chip-card edges to the hub circle */

function bezierPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): string {
  const dx = toX - fromX
  const sign = dx > 0 ? 1 : -1
  const cpOffset = Math.abs(dx) * 0.38

  return [
    `M ${fromX} ${fromY}`,
    `C ${fromX + sign * cpOffset} ${fromY}, ${toX - sign * cpOffset} ${toY}, ${toX} ${toY}`,
  ].join(' ')
}

interface NeonCircuitOverlayProps {
  leftCount: number
  rightCount: number
}

export function NeonCircuitOverlay({ leftCount, rightCount }: NeonCircuitOverlayProps) {
  const viewW = 700
  const viewH = 400

  // Grid layout: [leftCol] [gap] [hubCol] [gap] [rightCol]
  // gap-4 = 16px, hub column = 60px
  const gap = 16
  const hubColW = 60
  const colW = (viewW - hubColW - gap * 2) / 2

  const leftColRight = colW                 // 304 - right edge of left column
  const rightColLeft = colW + gap + hubColW + gap // 396 - left edge of right column

  // Hub circle: 64px diameter centered within the 60px column
  // Center = leftColRight + gap + hubColW/2 = 304 + 16 + 30 = 350
  const hubCX = 350
  const hubCY = viewH / 2
  const hubRadius = 32
  const hubLeftEdge = hubCX - hubRadius     // 318
  const hubRightEdge = hubCX + hubRadius    // 382

  const distributeY = (count: number, index: number) => {
    const top = 56
    const bottom = viewH - 56
    if (count <= 1) return viewH / 2
    return top + ((bottom - top) / (count - 1)) * index
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox={`0 0 ${viewW} ${viewH}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="int-grad-l" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="int-grad-r" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.85" />
        </linearGradient>
        <filter id="int-glow" x="-20%" y="-20%" width="140%" height="140%">
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
          <g key={`l-${i}`}>
            <path
              d={bezierPath(leftColRight, ty, hubLeftEdge, hubCY)}
              fill="none"
              stroke="url(#int-grad-l)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#int-glow)"
              opacity="0.65"
            />
            <circle cx={leftColRight} cy={ty} r="3" fill="#D946EF" opacity="0.8" />
          </g>
        )
      })}

      {Array.from({ length: rightCount }, (_, i) => {
        const ty = distributeY(rightCount, i)
        return (
          <g key={`r-${i}`}>
            <path
              d={bezierPath(rightColLeft, ty, hubRightEdge, hubCY)}
              fill="none"
              stroke="url(#int-grad-r)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#int-glow)"
              opacity="0.65"
            />
            <circle cx={rightColLeft} cy={ty} r="3" fill="#3B82F6" opacity="0.8" />
          </g>
        )
      })}
    </svg>
  )
}
