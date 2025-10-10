import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Center, Stack, Icon, Text, ShimmerText, GlowBox } from './ui'

const LoadingScreenLuxury = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 10
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <Center className="fixed inset-0 z-50 bg-brand-dark">
      <Stack spacing="large" align="center">
        {/* Logo with glow effect */}
        <GlowBox variant="luxury" intensity="high" padding="none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon name="sun" size="xlarge" className="text-brand-gold animate-pulse" />
          </motion.div>
        </GlowBox>

        {/* Brand name */}
        <ShimmerText variant="luxury" speed="slow">
          <Text size="2xl" weight="bold" className="font-display">
            Sunshine Blinds
          </Text>
        </ShimmerText>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-brand-dark-lighter rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-gold to-brand-gold-light"
            initial={{ x: '-100%' }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading text */}
        <Text size="small" color="muted" className="animate-pulse">
          Preparing luxury experience...
        </Text>
      </Stack>
    </Center>
  )
}

export default LoadingScreenLuxury