'use client'

import React, { useState, useEffect } from 'react'

interface TerminalTextProps {
  commands: string[];
  className?: string;
}

export default function TerminalText({ commands, className = '' }: TerminalTextProps) {
  const [currentCommand, setCurrentCommand] = useState(0)
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentCommand >= commands.length) return

    let index = 0
    const command = commands[currentCommand]
    
    const typingInterval = setInterval(() => {
      if (index <= command.length) {
        setText(command.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentCommand(prev => prev + 1)
        }, 1000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentCommand, commands])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className={`terminal-text ${className}`}>
      <span className="text-[#40E0D0]">$ </span>
      {text}
      {showCursor && <span className="cursor">_</span>}
    </div>
  )
} 