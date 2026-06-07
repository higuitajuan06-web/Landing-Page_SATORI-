/** Smooth Bezier circuit paths from chip connector dots to the hub edges */

function bezierPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): string {
  const dx = toX - fromX
  const sign = dx > 0 ? 1 : -1
  const cpOffset = Math.abs(dx) * 0.4

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

  // Grid: [leftCol 304px] [gap 16px] [hub 60px] [gap 16px] [rightCol 304px]
  // Proportions match the Tailwind layout: 1fr | auto(60px) | 1fr, gap-4
  const hubW = 60
  const gap = 16
  const colW = (viewW - hubW - gap * 2) / 2

  const leftColEnd = colW            // right edge of left column = 304
  const hubStart = colW + gap        // left edge of hub = 320
  const hubEnd = hubStart + hubW     // right edge of hub = 380
  const rightColStart = hubEnd + gap // left edge of right column = 396
  const hubCenterY = viewH / 2

  const distributeY = (count: number, index: number) => {
    const top = 52
    const bottom = viewH - 52
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
            <circle cx={leftColEnd} cy={ty} r="3" fill="#D946EF" opacity="0.8" />
            <path
              d={bezierPath(leftColEnd, ty, hubStart, hubCenterY)}
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
            <circle cx={rightColStart} cy={ty} r="3" fill="#3B82F6" opacity="0.8" />
            <path
              d={bezierPath(rightColStart, ty, hubEnd, hubCenterY)}
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
