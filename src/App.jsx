import { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'
import { PageLoader, AppWrapper, MainContent, ScrollToTopButton } from './components/ui/PageLoader'
import { SkipLink } from './components/ui/SkipLink'
import { PageAnimationWrapper } from './components/ui/PageAnimationWrapper'

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

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    // Show/hide scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ErrorBoundary>
      <AppWrapper>
        <SkipLink />
        <Header />
        <MainContent>
          <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageAnimationWrapper><Home /></PageAnimationWrapper>} />
                <Route path="/contact" element={<PageAnimationWrapper><Contact /></PageAnimationWrapper>} />
                <Route path="/gallery" element={<PageAnimationWrapper><Gallery /></PageAnimationWrapper>} />
                <Route path="/book-appointment" element={<PageAnimationWrapper><BookAppointment /></PageAnimationWrapper>} />
                <Route path="/roller-blinds" element={<PageAnimationWrapper><RollerBlinds /></PageAnimationWrapper>} />
                <Route path="/venetian-blinds" element={<PageAnimationWrapper><VenetianBlinds /></PageAnimationWrapper>} />
                <Route path="/vision-blinds" element={<PageAnimationWrapper><VisionBlinds /></PageAnimationWrapper>} />
                <Route path="/vertical-blinds" element={<PageAnimationWrapper><VerticalBlinds /></PageAnimationWrapper>} />
                <Route path="/perfect-fit-blinds" element={<PageAnimationWrapper><PerfectFitBlinds /></PageAnimationWrapper>} />
                <Route path="/shutters" element={<PageAnimationWrapper><Shutters /></PageAnimationWrapper>} />
                <Route path="/roman-blinds" element={<PageAnimationWrapper><RomanBlinds /></PageAnimationWrapper>} />
                <Route path="/curtains" element={<PageAnimationWrapper><Curtains /></PageAnimationWrapper>} />
                <Route path="/allusion-blinds" element={<PageAnimationWrapper><AllusionBlinds /></PageAnimationWrapper>} />
                <Route path="/areas/uppermill" element={<PageAnimationWrapper><Uppermill /></PageAnimationWrapper>} />
                <Route path="/areas/diggle" element={<PageAnimationWrapper><Diggle /></PageAnimationWrapper>} />
                <Route path="/areas/delph" element={<PageAnimationWrapper><Delph /></PageAnimationWrapper>} />
                <Route path="/areas/greenfield" element={<PageAnimationWrapper><Greenfield /></PageAnimationWrapper>} />
                <Route path="/areas/dobcross" element={<PageAnimationWrapper><Dobcross /></PageAnimationWrapper>} />
                <Route path="/areas/lydgate" element={<PageAnimationWrapper><Lydgate /></PageAnimationWrapper>} />
                <Route path="/areas/denshaw" element={<PageAnimationWrapper><Denshaw /></PageAnimationWrapper>} />
                <Route path="/areas/friezland" element={<PageAnimationWrapper><Friezland /></PageAnimationWrapper>} />
                <Route path="/areas/grasscroft" element={<PageAnimationWrapper><Grasscroft /></PageAnimationWrapper>} />
                <Route path="/areas/grotton" element={<PageAnimationWrapper><Grotton /></PageAnimationWrapper>} />
                <Route path="/areas/springhead" element={<PageAnimationWrapper><Springhead /></PageAnimationWrapper>} />
                <Route path="/areas/lees" element={<PageAnimationWrapper><Lees /></PageAnimationWrapper>} />
                <Route path="/privacy-policy" element={<PageAnimationWrapper><PrivacyPolicy /></PageAnimationWrapper>} />
                <Route path="/terms-conditions" element={<PageAnimationWrapper><TermsConditions /></PageAnimationWrapper>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </MainContent>
        <Footer />
        <CookieConsent />
        <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
      </AppWrapper>
    </ErrorBoundary>
  )
}

export default App