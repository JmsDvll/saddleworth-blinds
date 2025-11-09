import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Center, GlowBox, Icon, ShimmerText, Stack, Text } from './ui'

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
    <Center background="dark">
      <Stack spacing="large" align="center">
        {/* Logo with glow effect */}
        <GlowBox variant="luxury" intensity="high" padding="none">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon name="sun" size="xlarge" effect="pulse" color="#CABC32" />
          </motion.div>
        </GlowBox>

        {/* Brand name */}
        <ShimmerText variant="luxury" speed="slow">
          <Text size="2xl" weight="bold" color="light">
            Sunshine Blinds
          </Text>
        </ShimmerText>

        {/* Loading bar */}
        <Box>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </Box>

        {/* Loading text */}
        <Text size="small" color="light">
          Preparing luxury experience...
        </Text>
      </Stack>
    </Center>
  )
}

export default LoadingScreenLuxury