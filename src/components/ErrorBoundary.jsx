import React from 'react'

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
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-brand-gold hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>

              <a
                href="/"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
              >
                Go to Homepage
              </a>

              <a
                href="tel:01457597091"
                className="w-full bg-transparent border border-gray-600 hover:border-brand-gold text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block"
              >
                Call Us: 01457 597091
              </a>
            </div>

            {import.meta.env.MODE === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-4 p-4 bg-gray-800 rounded-lg text-xs text-gray-300 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
