import React from 'react'
import { Button, Card, Center, Container, GlowBox, Heading, Icon, Section, Stack, Text } from './ui'

class ErrorBoundaryLuxury extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    if (import.meta && import.meta.env && import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // You can also log to an error reporting service here
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <Section background="dark">
          <Container>
            <Center minHeight="screen">
              <GlowBox variant="subtle" padding="large">
                <Card variant="luxury" padding="xlarge">
                  <Stack spacing="large" align="center">
                    {/* Error Icon */}
                    <Icon name="exclamation" size="xlarge" />

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
                    {import.meta && import.meta.env && import.meta.env.DEV && this.state.error && (
                      <Card variant="dark" padding="medium">
                        <Stack spacing="small">
                          <Text size="small" weight="semibold" color="gold">
                            Error Details:
                          </Text>
                          <Text size="small" color="muted">
                            {this.state.error.toString()}
                          </Text>
                          {this.state.errorInfo && (
                            <Text size="small" color="muted">
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