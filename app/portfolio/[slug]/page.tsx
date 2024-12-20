import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/section-title'
import { notFound } from 'next/navigation'

// Project data - In a real app, this would come from a database
const projectsData = {
  'ecommerce-platform': {
    name: "E-commerce Platform",
    desc: "Full-stack online store with secure payments",
    fullDescription: `A comprehensive e-commerce solution built with modern web technologies. This platform provides a seamless shopping experience with features like real-time inventory management, secure payment processing, and an intuitive admin dashboard.`,
    image: "/images/portfolio/ecommerce.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order tracking and management",
      "Admin dashboard for inventory management"
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Ensuring secure payment processing",
      "Optimizing performance for large product catalogs"
    ],
    liveSite: "https://example.com/ecommerce",
    github: "https://github.com/yourusername/ecommerce"
  },
  'portfolio-website': {
    name: "Portfolio Website",
    desc: "Responsive portfolio for a digital artist",
    fullDescription: `A modern portfolio website showcasing an artist's work with smooth animations and responsive design. Built with Next.js and TailwindCSS, featuring dynamic content loading and optimized image delivery.`,
    image: "/images/portfolio/portfolio.jpg",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    features: [
      "Responsive image gallery",
      "Smooth page transitions",
      "Contact form with email integration",
      "Dynamic content management",
      "SEO optimization"
    ],
    challenges: [
      "Implementing performant image loading",
      "Creating smooth animations",
      "Optimizing for mobile devices"
    ],
    liveSite: "https://example.com/portfolio",
    github: "https://github.com/yourusername/portfolio"
  },
  'task-management': {
    name: "Task Management App",
    desc: "React-based app with real-time updates",
    fullDescription: `A collaborative task management application with real-time updates using Firebase. Features include task assignment, progress tracking, and team collaboration tools.`,
    image: "/images/portfolio/task-manager.jpg",
    tech: ["React", "Firebase", "Material-UI"],
    features: [
      "Real-time task updates",
      "Team collaboration tools",
      "Task assignment and tracking",
      "Progress visualization",
      "Due date notifications"
    ],
    challenges: [
      "Implementing real-time synchronization",
      "Managing complex state",
      "Handling offline functionality"
    ],
    liveSite: "https://example.com/task-manager",
    github: "https://github.com/yourusername/task-manager"
  },
  'blog-platform': {
    name: "Blog Platform",
    desc: "Custom CMS with markdown support",
    fullDescription: `A full-featured blogging platform with markdown support, built using Next.js and PostgreSQL. Includes features like comment system, categories, and search functionality.`,
    image: "/images/portfolio/blog-platform.jpg",
    tech: ["Next.js", "PostgreSQL", "Prisma"],
    features: [
      "Markdown editor with preview",
      "Comment system",
      "Category management",
      "Search functionality",
      "RSS feed generation"
    ],
    challenges: [
      "Building a custom markdown editor",
      "Implementing efficient search",
      "Managing user comments"
    ],
    liveSite: "https://example.com/blog-platform",
    github: "https://github.com/yourusername/blog-platform"
  },
  'weather-dashboard': {
    name: "Weather Dashboard",
    desc: "Real-time weather data visualization",
    fullDescription: `A weather dashboard that provides real-time weather information with interactive visualizations. Features include hourly and weekly forecasts, weather maps, and location-based updates.`,
    image: "/images/portfolio/weather-app.jpg",
    tech: ["React", "D3.js", "Weather API"],
    features: [
      "Real-time weather updates",
      "Interactive weather maps",
      "Hourly and weekly forecasts",
      "Location-based weather",
      "Weather alerts"
    ],
    challenges: [
      "Creating interactive visualizations",
      "Managing real-time data updates",
      "Handling API rate limits"
    ],
    liveSite: "https://example.com/weather",
    github: "https://github.com/yourusername/weather"
  },
  'social-analytics': {
    name: "Social Media Analytics",
    desc: "Data-driven insights for social platforms",
    fullDescription: `A comprehensive analytics platform for social media data visualization and insights. Built with Vue.js and Python, featuring real-time data processing and interactive charts.`,
    image: "/images/portfolio/analytics.jpg",
    tech: ["Vue.js", "Python", "Chart.js"],
    features: [
      "Real-time analytics dashboard",
      "Custom report generation",
      "Social media integration",
      "Data export functionality",
      "Automated insights"
    ],
    challenges: [
      "Processing large datasets",
      "Creating meaningful visualizations",
      "Implementing real-time updates"
    ],
    liveSite: "https://example.com/analytics",
    github: "https://github.com/yourusername/analytics"
  }
}

type Params = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params: { slug } }: Params) {
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <Link href="/portfolio" className="pixel-button inline-block mb-8">
        ← Back to Portfolio
      </Link>

      <SectionTitle>{project.name}</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <Image
            src={project.image}
            alt={project.name}
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </div>
        <div>
          <p className="comment mb-6">{project.fullDescription}</p>
          <div className="mb-6">
            <h3 className="text-xl variable mb-3">{"< technologies >"}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#333] rounded-full text-sm comment"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a href={project.liveSite} target="_blank" rel="noopener noreferrer" className="pixel-button">
              View Live Site
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="pixel-button">
              View Source
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl variable mb-4">{"< features >"}</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-300">{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl variable mb-4">{"< challenges >"}</h3>
          <ul className="list-disc list-inside space-y-2">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="text-gray-300">{challenge}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 