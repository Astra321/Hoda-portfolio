import Link from 'next/link'
import GlitchText from '@/components/glitch-text'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <GlitchText text="404" className="text-8xl mb-4" />
      <h2 className="text-2xl variable mb-8">{"< page_not_found />"}</h2>
      <p className="comment mb-8">The page you're looking for has been deleted or never existed.</p>
      <Link href="/" className="neon-button neon-cyan">
        Return Home
      </Link>
    </div>
  )
} 