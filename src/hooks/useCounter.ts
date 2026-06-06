import { useEffect, useRef, useState } from 'react'

interface UseCounterOptions {
  target: number
  duration?: number
  decimal?: boolean
  suffix?: string
  prefix?: string
  startOnVisible?: boolean
}

export function useCounter({
  target,
  duration = 2000,
  decimal = false,
  suffix = '',
  prefix = '',
  startOnVisible = true,
}: UseCounterOptions) {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!startOnVisible) {
      animate()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated])

  function animate() {
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = ease * target

      const formatted = decimal
        ? current.toFixed(1)
        : Math.round(current).toString()

      setDisplay(`${prefix}${formatted}${suffix}`)

      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return { display, ref }
}
