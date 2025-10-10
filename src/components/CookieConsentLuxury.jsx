import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, Stack, Text, Button, Icon, Flex, Link, GlowBox } from './ui'

const CookieConsentLuxury = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      // Delay showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    
    // Enable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential')
    localStorage.setItem('cookieConsentDate', new Date().toISOString())
    setShowBanner(false)
    
    // Disable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <GlowBox variant="subtle" intensity="medium">
            <Card variant="luxury" padding="large">
              <Stack spacing="medium">
                {/* Header */}
                <Flex justify="between" align="start">
                  <Flex gap="small" align="center">
                    <Icon name="cookie" size="medium" className="text-brand-gold" />
                    <Text size="large" weight="semibold" color="gold">
                      Cookie Preferences
                    </Text>
                  </Flex>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                    aria-label="Close cookie banner"
                  >
                    <Icon name="x" size="small" />
                  </button>
                </Flex>

                {/* Main content */}
                <Text color="light">
                  We use cookies to enhance your browsing experience and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </Text>

                {/* Details section */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Stack spacing="small" className="pt-4 border-t border-brand-gold/20">
                        <Text size="small" weight="semibold" color="gold">
                          Essential Cookies
                        </Text>
                        <Text size="small" color="light">
                          Required for the website to function properly. Cannot be disabled.
                        </Text>
                        
                        <Text size="small" weight="semibold" color="gold" className="mt-2">
                          Analytics Cookies
                        </Text>
                        <Text size="small" color="light">
                          Help us understand how visitors interact with our website.
                        </Text>
                      </Stack>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <Flex gap="small" wrap="wrap" justify="between" align="center">
                  <Flex gap="small" wrap="wrap">
                    <Button
                      variant="luxury"
                      size="small"
                      onClick={acceptAll}
                    >
                      Accept All
                    </Button>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={acceptEssential}
                    >
                      Essential Only
                    </Button>
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() => setShowDetails(!showDetails)}
                    >
                      {showDetails ? 'Hide' : 'Show'} Details
                    </Button>
                  </Flex>
                  
                  <Link
                    to="/privacy-policy"
                    variant="subtle"
                    size="small"
                    onClick={() => setShowBanner(false)}
                  >
                    Privacy Policy
                  </Link>
                </Flex>
              </Stack>
            </Card>
          </GlowBox>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsentLuxury