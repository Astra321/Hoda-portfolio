'use client'

import { useEffect } from 'react'
import GlitchText from '@/components/glitch-text'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <GlitchText text="Error" className="text-6xl mb-4" />
      <h2 className="text-2xl variable mb-8">{"< something_went_wrong />"}</h2>
      <p className="comment mb-8">An unexpected error has occurred.</p>
      <button
        onClick={reset}
        className="neon-button neon-magenta"
      >
        Try again
      </button>
    </div>
  )
} 