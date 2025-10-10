import React from 'react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
  Center
} from './ui'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <Section background="dark" padding="large" className="min-h-screen flex items-center">
          <Container maxWidth="small">
            <Center>
              <Stack spacing="xlarge" align="center">
                <Stack spacing="medium" align="center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Icon name="alert" size="large" className="text-white" />
                  </div>
                  <Heading as="h1" size="2xl">Something went wrong</Heading>
                  <Text color="light" align="center">
                    We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists.
                  </Text>
                </Stack>

                <Stack spacing="medium" className="w-full max-w-xs">
                  <Button
                    onClick={() => window.location.reload()}
                    variant="primary"
                    size="large"
                    fullWidth
                  >
                    Refresh Page
                  </Button>

                  <Button
                    as="a"
                    href="/"
                    variant="secondary"
                    size="large"
                    fullWidth
                  >
                    Go to Homepage
                  </Button>

                  <Button
                    as="a"
                    href="tel:01457597091"
                    variant="ghost"
                    size="large"
                    fullWidth
                    iconLeft={<Icon name="phone" />}
                  >
                    Call: 01457 597091
                  </Button>
                </Stack>

                {import.meta.env.MODE === 'development' && this.state.error && (
                  <details className="w-full max-w-2xl">
                    <summary className="text-gray-400 cursor-pointer hover:text-white">
                      Error Details (Development)
                    </summary>
                    <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-xs text-gray-300 overflow-auto">
                      {this.state.error.toString()}
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </Stack>
            </Center>
          </Container>
        </Section>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary