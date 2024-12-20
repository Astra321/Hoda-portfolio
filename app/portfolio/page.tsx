import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'
import { Metadata } from 'next'

const projects = [
  { 
    name: "E-commerce Platform", 
    desc: "Full-stack online store with secure payments",
    image: "/images/portfolio/ecommerce.jpg",
    link: "/portfolio/ecommerce-platform",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  { 
    name: "Portfolio Website", 
    desc: "Responsive portfolio for a digital artist",
    image: "/images/portfolio/portfolio.jpg",
    link: "/portfolio/portfolio-website",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"]
  },
  { 
    name: "Task Management App", 
    desc: "React-based app with real-time updates",
    image: "/images/portfolio/task-manager.jpg",
    link: "/portfolio/task-management",
    tech: ["React", "Firebase", "Material-UI"]
  },
  { 
    name: "Blog Platform", 
    desc: "Custom CMS with markdown support",
    image: "/images/portfolio/blog-platform.jpg",
    link: "/portfolio/blog-platform",
    tech: ["Next.js", "PostgreSQL", "Prisma"]
  },
  { 
    name: "Weather Dashboard", 
    desc: "Real-time weather data visualization",
    image: "/images/portfolio/weather-app.jpg",
    link: "/portfolio/weather-dashboard",
    tech: ["React", "D3.js", "Weather API"]
  },
  { 
    name: "Social Media Analytics", 
    desc: "Data-driven insights for social platforms",
    image: "/images/portfolio/analytics.jpg",
    link: "/portfolio/social-analytics",
    tech: ["Vue.js", "Python", "Chart.js"]
  }
]

export const metadata: Metadata = {
  title: 'Portfolio | My Projects',
  description: 'Explore my web development projects showcasing skills in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'Portfolio | My Projects',
    description: 'Explore my web development projects',
    images: ['/images/portfolio-og.jpg'],
  },
}

export default function Portfolio() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle>portfolio</SectionTitle>
      <p className="comment mb-12">
        <TypingAnimation text="...Showcasing a diverse range of web projects that demonstrate my skills in design, development, and problem-solving." />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#333] rounded-lg overflow-hidden cyber-card">
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              priority={index < 3}
              loading={index >= 3 ? 'lazy' : undefined}
              quality={85}
            />
            <div className="p-4">
              <h3 className="text-xl mb-2 variable">{project.name}</h3>
              <p className="comment text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-[#333] rounded-full text-xs variable"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={project.link} className="pixel-button inline-block">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

