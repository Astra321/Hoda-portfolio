'use client'

import { useEffect } from 'react'

export default function DynamicFavicon() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const setFavicon = () => {
      const svg = `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <style>
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            .pixel {
              animation: pulse 2s infinite;
              transform-origin: center;
            }
          </style>
          <rect width="32" height="32" fill="#1E1E1E"/>
          <rect class="pixel" x="8" y="8" width="16" height="16" fill="#40E0D0"/>
        </svg>
      `

      const encodedSvg = encodeURIComponent(svg)
      const faviconUrl = `data:image/svg+xml,${encodedSvg}`

      let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']")
      
      if (!link) {
        link = document.createElement('link')
        link.rel = 'icon'
        document.head.appendChild(link)
      }

      link.href = faviconUrl
    }

    setFavicon()

    // No cleanup needed as we're just updating an existing element
  }, [])

  return null
} 