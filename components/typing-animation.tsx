'use client'

import React, { useState, useEffect } from 'react'

export default function TypingAnimation({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    setDisplayText('')
    setIsTypingComplete(false)
    let index = 0
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [text])

  return (
    <span style={{ display: 'inline-block', minWidth: '1ch' }}>
      {displayText}
      {!isTypingComplete && (
        <span style={{ animation: 'blink 0.7s infinite' }}>|</span>
      )}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>
    </span>
  )
}

