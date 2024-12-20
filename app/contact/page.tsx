'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '@/components/section-title'
import TypingAnimation from '@/components/typing-animation'
import { emailConfig } from '@/lib/emailjs-config'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    try {
      // Send notification to you
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        data,
        emailConfig.publicKey
      )

      // Send auto-reply to the sender
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.autoReplyTemplateId,
        {
          to_email: data.email,
          to_name: data.name,
        },
        emailConfig.publicKey
      )

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <SectionTitle>contact_me</SectionTitle>
      <p className="comment mb-12">
        <TypingAnimation text="...Ready to start your next web project? Get in touch and let's create something amazing together!" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" 
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`pixel-button w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-400 mt-4">Message sent successfully! Check your email for confirmation.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 mt-4">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="mt-12">
            <h3 className="text-xl mb-4 variable">{"< contact_info >"}</h3>
            <p className="comment mb-2">Email: huda@example.com</p>
            <p className="comment mb-2">Phone: +20 (100) 123-4567</p>
            <p className="comment mb-2">Location: Cairo, Egypt</p>
            <div className="mt-8">
              <h3 className="text-xl mb-4 variable">{"< working_hours >"}</h3>
              <p className="comment mb-2">Sunday - Thursday: 9:00 AM - 5:00 PM (EET)</p>
              <p className="comment mb-2">Friday - Saturday: Closed</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl mb-4 variable">{"< social_media >"}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
                <a href="#" className="text-blue-400 hover:text-blue-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="border border-[#333] rounded-lg overflow-hidden map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55258.64451394161!2d31.3106521!3d30.0464592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ec17d4a84eb%3A0x615428a1c70960f2!2z2KvYp9mGINmF2K_ZitmG2Kkg2YbYtdix2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1734732247294!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
          
          <div className="border border-[#333] p-6 rounded-lg">
            <h3 className="text-xl variable mb-4">{"< location_info >"}</h3>
            <p className="comment mb-2">Nasr City, Cairo, Egypt</p>
            <p className="text-gray-400">Located in the vibrant district of Nasr City, our office is easily accessible from major roads and landmarks. We're conveniently situated near public transportation hubs and shopping centers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

