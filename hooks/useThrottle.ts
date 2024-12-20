import { useCallback, useRef } from 'react'

export function useThrottle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const lastCallRef = useRef<number>(0)

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now()

    if (lastCallRef.current && now - lastCallRef.current < wait) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        lastCallRef.current = now
        func(...args)
      }, wait)
    } else {
      lastCallRef.current = now
      func(...args)
    }
  }, [func, wait]) as T
} 