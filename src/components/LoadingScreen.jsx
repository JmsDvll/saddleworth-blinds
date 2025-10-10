import React, { useEffect, useState } from 'react'
import { Icon, Spinner, ProgressBar, Box, CornerDecoration, Center, Stack, Heading, Text } from './ui'

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
    <Box
      position="fixed"
      inset="0"
      className={`
        z-50 bg-brand-dark
        transition-all duration-500
        ${isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}
      `}
    >
      {/* Background pattern */}
      <Box position="absolute" inset="0" opacity="10">
        <Box 
          position="absolute" 
          inset="0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </Box>

      {/* Content */}
      <Center className="relative h-full">
        <Stack spacing="xlarge" align="center">
          {/* Logo animation */}
          <Box position="relative" className="mb-12">
            <Spinner size="xlarge" variant="gold" multiRing />
            
            {/* Center icon */}
            <Center className="absolute inset-0">
              <Box 
                size="16"
                className="bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-full shadow-lg shadow-brand-gold/50 animate-pulse-glow"
              >
                <Center className="w-full h-full">
                  <Icon name="sun" size="large" className="text-brand-dark" />
                </Center>
              </Box>
            </Center>
          </Box>

          {/* Brand name */}
          <Stack spacing="small" align="center">
            <Heading 
              as="h1" 
              size="4xl" 
              mdSize="5xl"
              className="font-display animate-fade-in"
            >
              Sunshine Blinds
            </Heading>
            <Text 
              size="large"
              className="text-brand-gold animate-fade-in animation-delay-200"
            >
              Saddleworth
            </Text>
          </Stack>

          {/* Progress bar */}
          <Stack spacing="medium" align="center" className="mt-12 w-64 max-w-full">
            <ProgressBar 
              value={progress} 
              max={100}
              size="medium"
              variant="primary"
              containerVariant="light"
              animated="none"
              barStyle={{
                transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            <Text 
              size="small" 
              color="muted" 
              align="center"
              className="animate-pulse"
            >
              {progress < 100 ? 'Loading premium experience...' : 'Ready!'}
            </Text>
          </Stack>
        </Stack>
      </Center>

      {/* Corner decorations */}
      <CornerDecoration corner="top-left" />
      <CornerDecoration corner="top-right" />
      <CornerDecoration corner="bottom-left" />
      <CornerDecoration corner="bottom-right" />
    </Box>
  )
}

export default LoadingScreen