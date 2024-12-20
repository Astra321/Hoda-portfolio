import React from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle>about_me</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="comment mb-4">
            <TypingAnimation text="...Passionate web developer with 5+ years of experience in creating responsive and user-friendly websites. Skilled in both front-end and back-end technologies, with a keen eye for design and a commitment to clean, efficient code." />
          </p>
          <p className="mb-4">My journey in web development began with a fascination for creating interactive user experiences. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various frameworks like React and Node.js. I believe in the power of continuous learning and staying up-to-date with the latest web technologies and best practices.</p>
        </div>
        <div>
          <Image
            src="/images/about/profile.jpg"
            alt="About Me"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl mb-8 variable">{"what drives my work"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Innovation', desc: 'Constantly exploring new technologies and approaches to solve complex problems.' },
            { title: 'User-Centric Design', desc: 'Focusing on creating intuitive and accessible interfaces for the best user experience.' },
            { title: 'Code Quality', desc: 'Writing clean, maintainable, and well-documented code for long-term project success.' },
            { title: 'Continuous Learning', desc: 'Always eager to learn and adapt to the ever-evolving web development landscape.' }
          ].map((item, index) => (
            <div key={index} className="border border-[#333] p-6 rounded-lg">
              <h4 className="variable mb-4">{`{${index + 1}}`}</h4>
              <p className="comment">{item.title}</p>
              <p className="mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

