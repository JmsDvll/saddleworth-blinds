import React from 'react'
/**
 * PageLoader / AppWrapper / MainContent / ScrollToTopButton – app shell helpers.
 *
 * PageLoader: full-screen loading indicator
 * AppWrapper: sets base app background/typography
 * MainContent: wraps routed content
 * ScrollToTopButton: floating action to return to top
 */
import { Center, Spinner, Stack, Text } from './index'

export const PageLoader = () => {
  return (
    <Center className="min-h-screen bg-brand-dark">
      <Stack spacing="medium" align="center">
        <Spinner size="large" variant="gold" />
        <Text color="muted" effect="pulse">Loading page...</Text>
      </Stack>
    </Center>
  )
}

// App wrapper component to handle the main app container
export const AppWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark overflow-x-hidden">
      {children}
    </div>
  )
}

// Main content wrapper
export const MainContent = ({ children }) => {
  return (
    <main id="main-content" role="main" className="flex-grow relative">
      {children}
    </main>
  )
}

// Scroll to top button wrapper
export const ScrollToTopButton = ({ show, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-8 right-8 z-40
        p-4 rounded-full
        bg-brand-gold text-brand-dark
        shadow-luxury-lg
        transition-all duration-300
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        hover:bg-brand-gold-light hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-brand-gold/30
      `}
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  )
}