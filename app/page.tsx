import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'
import dynamic from 'next/dynamic'
import NeonButton from '@/components/neon-button'

const MatrixRain = dynamic(() => import('@/components/matrix-rain'), {
  ssr: false,
  loading: () => <div className="min-h-[80vh]" /> // Placeholder
})

const TerminalText = dynamic(() => import('@/components/terminal-text'))
const GlitchText = dynamic(() => import('@/components/glitch-text'))

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
        <MatrixRain />
        <div className="z-10">
          <div className="comment mb-4 glow-text">// Hi, I'm Huda, a...</div>
          <GlitchText 
            text="web designer" 
            className="text-4xl md:text-6xl mb-8 variable"
          />
          <TerminalText
            commands={[
              "Crafting digital experiences",
              "Building modern websites",
              "Creating responsive designs",
              "Developing web applications"
            ]}
            className="text-2xl md:text-3xl mb-8"
          />
          <NeonButton color="cyan" className="mr-4">
            View Portfolio
          </NeonButton>
          <NeonButton color="magenta">
            Contact Me
          </NeonButton>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20">
        <div className="code-container">
          <div className="line-numbers">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="pl-4">
            <SectionTitle>about_me</SectionTitle>
            <p className="comment mb-4">
              <TypingAnimation text="...Passionate web developer with 5+ years of experience in creating responsive and user-friendly websites. Skilled in both front-end and back-end technologies, with a keen eye for design and a commitment to clean, efficient code." />
            </p>
            <Link href="/about" className="pixel-button inline-block">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="code-container">
          <div className="line-numbers">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="pl-4">
            <SectionTitle>portfolio</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "E-commerce Platform", desc: "Full-stack online store with secure payments", image: "/images/portfolio/ecommerce.jpg" },
                { name: "Portfolio Website", desc: "Responsive portfolio for a digital artist", image: "/images/portfolio/portfolio.jpg" },
                { name: "Task Management App", desc: "React-based app with real-time updates", image: "/images/portfolio/task-manager.jpg" }
              ].map((project, i) => (
                <div key={i} className="relative group">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="variable text-xl mb-2">{project.name}</h3>
                      <p className="comment text-sm">{project.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/portfolio" className="pixel-button inline-block">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20">
        <div className="code-container">
          <div className="line-numbers">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="pl-4">
            <SectionTitle>contact_me</SectionTitle>
            <p className="comment mb-4">
              <TypingAnimation text="...Ready to bring your web project to life? Let's collaborate and create something amazing together!" />
            </p>
            <Link href="/contact" className="pixel-button inline-block">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

