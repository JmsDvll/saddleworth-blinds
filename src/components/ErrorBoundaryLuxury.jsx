import React from 'react'
import { Section, Container, Stack, Heading, Text, Button, Icon, Card, GlowBox, Center } from './ui'

class ErrorBoundaryLuxury extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // You can also log to an error reporting service here
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section background="dark" className="min-h-screen">
          <Container>
            <Center className="min-h-screen">
              <GlowBox variant="subtle" padding="large">
                <Card variant="luxury" padding="xlarge">
                  <Stack spacing="large" align="center" className="max-w-2xl">
                    {/* Error Icon */}
                    <div className="relative">
                      <Icon name="exclamation" size="xlarge" className="text-brand-gold" />
                      <div className="absolute inset-0 animate-ping">
                        <Icon name="exclamation" size="xlarge" className="text-brand-gold opacity-30" />
                      </div>
                    </div>

                    {/* Error Message */}
                    <Stack spacing="medium" align="center">
                      <Heading size="2xl" color="gold" align="center">
                        Oops! Something went wrong
                      </Heading>
                      <Text size="large" color="light" align="center">
                        We apologize for the inconvenience. The page encountered an unexpected error.
                      </Text>
                    </Stack>

                    {/* Error Details (Development only) */}
                    {process.env.NODE_ENV === 'development' && this.state.error && (
                      <Card variant="dark" padding="medium" className="w-full">
                        <Stack spacing="small">
                          <Text size="small" weight="semibold" color="gold">
                            Error Details:
                          </Text>
                          <Text size="small" color="muted" className="font-mono">
                            {this.state.error.toString()}
                          </Text>
                          {this.state.errorInfo && (
                            <Text size="small" color="muted" className="font-mono whitespace-pre-wrap">
                              {this.state.errorInfo.componentStack}
                            </Text>
                          )}
                        </Stack>
                      </Card>
                    )}

                    {/* Actions */}
                    <Stack spacing="small" align="center">
                      <Button
                        variant="luxury"
                        size="large"
                        onClick={this.handleReset}
                        iconLeft={<Icon name="home" />}
                      >
                        Return to Homepage
                      </Button>
                      <Button
                        variant="ghost"
                        size="small"
                        onClick={() => window.location.reload()}
                        iconLeft={<Icon name="refresh" />}
                      >
                        Try Again
                      </Button>
                    </Stack>

                    {/* Contact Support */}
                    <Stack spacing="small" align="center">
                      <Text size="small" color="muted">
                        If this problem persists, please contact us
                      </Text>
                      <Text size="small" weight="semibold" color="gold">
                        01457 597091
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
              </GlowBox>
            </Center>
          </Container>
        </Section>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundaryLuxury