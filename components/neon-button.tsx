'use client'

import React from 'react'

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'cyan' | 'yellow' | 'magenta';
}

export default function NeonButton({ 
  children, 
  onClick, 
  className = '',
  color = 'cyan'
}: NeonButtonProps) {
  const colorMap = {
    cyan: 'neon-cyan',
    yellow: 'neon-yellow',
    magenta: 'neon-magenta'
  }

  return (
    <button 
      onClick={onClick}
      className={`neon-button ${colorMap[color]} ${className}`}
    >
      {children}
    </button>
  )
} 