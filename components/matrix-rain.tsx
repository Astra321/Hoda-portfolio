'use client'

import React, { useEffect, useRef, useMemo } from 'react'
import { useThrottle } from '@/hooks/useThrottle'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Memoize characters array
  const charArray = useMemo(() => {
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789'
    return chars.split('')
  }, [])

  const draw = useThrottle((ctx: CanvasRenderingContext2D, drops: number[], columns: number) => {
    ctx.fillStyle = 'rgba(30, 30, 30, 0.05)'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    
    ctx.fillStyle = '#40E0D0'
    ctx.font = '16px monospace'
    
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)]
      ctx.fillText(char, i * 16, drops[i] * 16)
      
      if (drops[i] * 16 > ctx.canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
  }, 33) // ~30fps

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.width * dpr
    canvas.height = canvas.height * dpr
    ctx.scale(dpr, dpr)
    
    const columns = canvas.width / 16
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -100)
    
    let animationFrameId: number

    const animate = () => {
      draw(ctx, drops, columns)
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animate()

    const handleResize = () => {
      resizeCanvas()
      drops.length = Math.ceil(canvas.width / 16)
      while (drops.length < columns) {
        drops.push(Math.random() * -100)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [draw, charArray])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        opacity: 0.3,
        willChange: 'transform',
      }}
    />
  )
} 