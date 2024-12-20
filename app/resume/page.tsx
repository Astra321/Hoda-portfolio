import React from 'react'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'

export default function Resume() {
  const experience = [
    {
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: [
        "Led development of enterprise-level web applications using React and Node.js",
        "Managed team of 5 developers and implemented Agile methodologies",
        "Improved application performance by 40% through optimization techniques"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: [
        "Developed and maintained multiple client websites using modern web technologies",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with UX designers to create intuitive user interfaces"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2018 - 2019",
      description: [
        "Built responsive websites using HTML5, CSS3, and JavaScript",
        "Worked with WordPress and custom PHP frameworks",
        "Optimized websites for maximum speed and scalability"
      ]
    }
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      period: "2017 - 2018",
      description: "Specialized in Web Technologies and Cloud Computing"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      period: "2013 - 2017",
      description: "Major in Software Engineering, Minor in UI/UX Design"
    }
  ]

  const skills = {
    technical: [
      "JavaScript/TypeScript",
      "React.js",
      "Node.js",
      "Next.js",
      "HTML5/CSS3",
      "TailwindCSS",
      "Git",
      "AWS",
      "MongoDB",
      "PostgreSQL"
    ],
    soft: [
      "Team Leadership",
      "Project Management",
      "Problem Solving",
      "Communication",
      "Agile Methodologies"
    ]
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle>resume</SectionTitle>
      <p className="comment mb-12">
        <TypingAnimation text="...Professional experience and qualifications in web development and software engineering." />
      </p>

      {/* Experience Section */}
      <div className="mb-16">
        <h2 className="text-2xl variable mb-8">{"< work_experience >"}</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border border-[#333] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl variable">{job.title}</h3>
                  <p className="comment">{job.company}</p>
                </div>
                <span className="text-sm text-gray-400">{job.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.description.map((item, i) => (
                  <li key={i} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-2xl variable mb-8">{"< education >"}</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="border border-[#333] p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl variable">{edu.degree}</h3>
                  <p className="comment">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl variable mb-8">{"< skills >"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="border border-[#333] p-6 rounded-lg">
            <h3 className="text-xl variable mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#333] rounded-full text-sm comment"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="border border-[#333] p-6 rounded-lg">
            <h3 className="text-xl variable mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-[#333] rounded-full text-sm comment"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="mt-12 text-center">
        <a 
          href="/resume.pdf" 
          download 
          className="pixel-button inline-block"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  )
} 