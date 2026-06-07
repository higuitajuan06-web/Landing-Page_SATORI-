/** Smooth Bezier circuit paths connecting chip-card connector dots to the hub edges */

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

  // Grid: [leftCol ~320px] [hub ~60px] [rightCol ~320px]
  const hubW = 60
  const leftColW = (viewW - hubW) / 2
  const hubLeftX = leftColW
  const hubRightX = leftColW + hubW
  const hubCenterY = viewH / 2

  // Connector dots sit at the inner edge of each card column
  const leftDotX = leftColW
  const rightDotX = hubRightX

  const distributeY = (count: number, index: number) => {
    const top = 48
    const bottom = viewH - 48
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
              d={bezierPath(leftDotX, ty, hubLeftX, hubCenterY)}
              fill="none"
              stroke="url(#int-grad-l)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#int-glow)"
              opacity="0.65"
            />
          </g>
        )
      })}

      {Array.from({ length: rightCount }, (_, i) => {
        const ty = distributeY(rightCount, i)
        return (
          <g key={`r-${i}`}>
            <path
              d={bezierPath(rightDotX, ty, hubRightX, hubCenterY)}
              fill="none"
              stroke="url(#int-grad-r)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#int-glow)"
              opacity="0.65"
            />
          </g>
        )
      })}
    </svg>
  )
}
