import React, { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence, motion } from 'framer-motion'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const Gallery = lazy(() => import('./pages/Gallery'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))
const RollerBlinds = lazy(() => import('./pages/RollerBlinds'))
const VenetianBlinds = lazy(() => import('./pages/VenetianBlinds'))
const VisionBlinds = lazy(() => import('./pages/VisionBlinds'))
const VerticalBlinds = lazy(() => import('./pages/VerticalBlinds'))
const PerfectFitBlinds = lazy(() => import('./pages/PerfectFitBlinds'))
const Shutters = lazy(() => import('./pages/Shutters'))
const RomanBlinds = lazy(() => import('./pages/RomanBlinds'))
const Curtains = lazy(() => import('./pages/Curtains'))
const AllusionBlinds = lazy(() => import('./pages/AllusionBlinds'))
const Uppermill = lazy(() => import('./pages/Uppermill'))
const Diggle = lazy(() => import('./pages/Diggle'))
const Delph = lazy(() => import('./pages/Delph'))
const Greenfield = lazy(() => import('./pages/Greenfield'))
const Dobcross = lazy(() => import('./pages/Dobcross'))
const Lydgate = lazy(() => import('./pages/Lydgate'))
const Denshaw = lazy(() => import('./pages/Denshaw'))
const Friezland = lazy(() => import('./pages/Friezland'))
const Grasscroft = lazy(() => import('./pages/Grasscroft'))
const Grotton = lazy(() => import('./pages/Grotton'))
const Springhead = lazy(() => import('./pages/Springhead'))
const Lees = lazy(() => import('./pages/Lees'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-brand-dark flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-brand-gold/20 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-brand-gold rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-400 mt-4 animate-pulse">Loading page...</p>
    </div>
  </div>
)

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
}

// Page wrapper with animations
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Show loading screen on initial load
  useEffect(() => {
    // Check if it's the first visit
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (!hasVisited) {
      sessionStorage.setItem('hasVisited', 'true')
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white text-brand-charcoal overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-gold text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg z-50">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="relative">
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
                <Route path="/book-appointment" element={<PageWrapper><BookAppointment /></PageWrapper>} />
                <Route path="/roller-blinds" element={<PageWrapper><RollerBlinds /></PageWrapper>} />
                <Route path="/venetian-blinds" element={<PageWrapper><VenetianBlinds /></PageWrapper>} />
                <Route path="/vision-blinds" element={<PageWrapper><VisionBlinds /></PageWrapper>} />
                <Route path="/vertical-blinds" element={<PageWrapper><VerticalBlinds /></PageWrapper>} />
                <Route path="/perfect-fit-blinds" element={<PageWrapper><PerfectFitBlinds /></PageWrapper>} />
                <Route path="/shutters" element={<PageWrapper><Shutters /></PageWrapper>} />
                <Route path="/roman-blinds" element={<PageWrapper><RomanBlinds /></PageWrapper>} />
                <Route path="/curtains" element={<PageWrapper><Curtains /></PageWrapper>} />
                <Route path="/allusion-blinds" element={<PageWrapper><AllusionBlinds /></PageWrapper>} />
                <Route path="/areas/uppermill" element={<PageWrapper><Uppermill /></PageWrapper>} />
                <Route path="/areas/diggle" element={<PageWrapper><Diggle /></PageWrapper>} />
                <Route path="/areas/delph" element={<PageWrapper><Delph /></PageWrapper>} />
                <Route path="/areas/greenfield" element={<PageWrapper><Greenfield /></PageWrapper>} />
                <Route path="/areas/dobcross" element={<PageWrapper><Dobcross /></PageWrapper>} />
                <Route path="/areas/lydgate" element={<PageWrapper><Lydgate /></PageWrapper>} />
                <Route path="/areas/denshaw" element={<PageWrapper><Denshaw /></PageWrapper>} />
                <Route path="/areas/friezland" element={<PageWrapper><Friezland /></PageWrapper>} />
                <Route path="/areas/grasscroft" element={<PageWrapper><Grasscroft /></PageWrapper>} />
                <Route path="/areas/grotton" element={<PageWrapper><Grotton /></PageWrapper>} />
                <Route path="/areas/springhead" element={<PageWrapper><Springhead /></PageWrapper>} />
                <Route path="/areas/lees" element={<PageWrapper><Lees /></PageWrapper>} />
                <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
                <Route path="/terms-conditions" element={<PageWrapper><TermsConditions /></PageWrapper>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  )
}

export default App