import React, { useState, useEffect } from 'react'

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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-brand-gold p-4 shadow-lg">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">
              🍪 Cookie Consent
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              We use cookies to enhance your browsing experience and analyze our website traffic.
              {!showDetails && (
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-brand-gold hover:text-brand-green transition-colors ml-2"
                >
                  View Details
                </button>
              )}
            </p>

            {showDetails && (
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-white mb-2">Cookie Categories:</h4>
                <ul className="text-sm text-gray-300 space-y-1 mb-3">
                  <li><strong>Necessary:</strong> Required for website functionality</li>
                  <li><strong>Analytics:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="text-sm text-gray-400">
                  You can change your preferences at any time in our Privacy Policy.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptAll}
              className="btn btn-primary text-sm px-6 py-2"
            >
              Accept All Cookies
            </button>
            <button
              onClick={acceptNecessary}
              className="btn btn-secondary text-sm px-6 py-2"
            >
              Necessary Only
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-gray-400 hover:text-white transition-colors text-sm underline"
            >
              {showDetails ? 'Hide Details' : 'Cookie Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
