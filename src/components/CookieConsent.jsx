import React, { useState, useEffect } from 'react'
import {
  Button,
  Card,
  Heading,
  Text,
  Stack,
  Flex,
  Container
} from './ui'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary-only')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Card
      variant="elevated"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-brand-gold"
      padding="medium"
    >
      <Container>
        <Flex direction="column" lgDirection="row" align="start" lgAlign="center" gap="medium">
          <Stack spacing="small" className="flex-1">
            <Heading as="h3" size="lg">
              🍪 Cookie Consent
            </Heading>
            <Flex align="center" gap="small">
              <Text color="light" size="small">
                We use cookies to enhance your browsing experience and analyze our website traffic.
              </Text>
              {!showDetails && (
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  size="small"
                  className="ml-2 p-0 h-auto"
                >
                  View Details
                </Button>
              )}
            </Flex>

            {showDetails && (
              <Card variant="elevated" padding="medium" className="mt-2">
                <Stack spacing="small">
                  <Heading as="h4" size="base">Cookie Categories:</Heading>
                  <Stack spacing="small" as="ul">
                    <Text as="li" size="small" color="light">
                      <Text as="span" weight="semibold">Necessary:</Text> Required for website functionality
                    </Text>
                    <Text as="li" size="small" color="light">
                      <Text as="span" weight="semibold">Analytics:</Text> Help us understand how visitors use our site
                    </Text>
                    <Text as="li" size="small" color="light">
                      <Text as="span" weight="semibold">Marketing:</Text> Used to deliver relevant advertisements
                    </Text>
                  </Stack>
                  <Text size="small" color="muted">
                    You can change your preferences at any time in our Privacy Policy.
                  </Text>
                </Stack>
              </Card>
            )}
          </Stack>

          <Flex direction="column" smDirection="row" gap="medium">
            <Button
              onClick={acceptAll}
              variant="primary"
              size="small"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={acceptNecessary}
              variant="secondary"
              size="small"
            >
              Necessary Only
            </Button>
            <Button
              onClick={() => setShowDetails(!showDetails)}
              variant="ghost"
              size="small"
            >
              {showDetails ? 'Hide Details' : 'Cookie Settings'}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Card>
  )
}

export default CookieConsent