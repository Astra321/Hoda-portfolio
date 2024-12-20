import React from 'react'
import Link from 'next/link'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'

export default function Services() {
  const services = [
    { 
      title: 'web design', 
      description: 'Creating visually appealing and user-friendly website designs tailored to your brand and target audience. Focusing on responsive layouts, intuitive navigation, and engaging user experiences.',
      link: '/contact'
    },
    { 
      title: 'front-end development', 
      description: 'Building interactive and dynamic user interfaces using modern technologies like React, Vue.js, and Angular. Ensuring smooth performance and cross-browser compatibility.',
      link: '/contact'
    },
    { 
      title: 'back-end development', 
      description: 'Developing robust server-side applications and APIs using Node.js, Python, or PHP. Implementing secure authentication, database management, and efficient data processing.',
      link: '/contact'
    },
    { 
      title: 'full-stack solutions', 
      description: 'Offering end-to-end web development services, from concept to deployment. Integrating front-end and back-end technologies to create cohesive, scalable web applications.',
      link: '/contact'
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle>services</SectionTitle>
      <p className="comment mb-12">
        <TypingAnimation text="...Comprehensive web development services tailored to your unique needs. From design to deployment, I've got you covered." />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div key={index} className="border border-[#333] p-6 rounded-lg">
            <h3 className="text-xl mb-4 variable">{`{${index + 1}} < ${service.title} >`}</h3>
            <p className="comment mb-4">{service.description}</p>
            <Link href={service.link} className="pixel-button inline-block">
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

