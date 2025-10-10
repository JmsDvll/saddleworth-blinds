import React, { useEffect, useState } from 'react'
import { Icon } from './ui'

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(() => {
              if (onLoadComplete) onLoadComplete()
            }, 500)
          }, 200)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <div className={`
      fixed inset-0 z-50 bg-brand-dark
      transition-all duration-500
      ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
    `}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Logo animation */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 relative">
            {/* Rotating rings */}
            <div className="absolute inset-0 border-4 border-brand-gold/20 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-brand-gold/40 rounded-full animate-spin animate-reverse"></div>
            <div className="absolute inset-4 border-4 border-brand-gold/60 rounded-full animate-spin"></div>
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/50 animate-pulse-glow">
                <Icon name="sun" size="large" className="text-brand-dark" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-5xl font-display text-white mb-2 animate-fade-in">
          Sunshine Blinds
        </h1>
        <p className="text-brand-gold text-lg animate-fade-in animation-delay-200">
          Saddleworth
        </p>

        {/* Progress bar */}
        <div className="mt-12 w-64 max-w-full">
          <div className="h-1 bg-brand-dark-lighter rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4 animate-pulse">
            {progress < 100 ? 'Loading premium experience...' : 'Ready!'}
          </p>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-brand-gold/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-brand-gold/20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-brand-gold/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-brand-gold/20"></div>
    </div>
  )
}

export default LoadingScreen