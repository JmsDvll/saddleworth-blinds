import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeaderStandardized from './components/HeaderStandardized'
import FooterLuxury from './components/FooterLuxury'
import CookieConsentLuxury from './components/CookieConsentLuxury'
import ErrorBoundaryLuxury from './components/ErrorBoundaryLuxury'
import LoadingScreenLuxury from './components/LoadingScreenLuxury'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { Seo } from './components/Seo'
import { defaultMeta, routeMeta } from './utils/seo'
import { AppWrapper, MainContent, PageLoader, ScrollToTopButton } from './components/ui/PageLoader'
import { SkipLink } from './components/ui/SkipLink'
import { PageAnimationWrapper } from './components/ui/PageAnimationWrapper'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/HomeLuxury'))
const Contact = lazy(() => import('./pages/ContactLuxury'))
const Gallery = lazy(() => import('./pages/Gallery'))
const BookAppointment = lazy(() => import('./pages/BookAppointmentLuxury'))
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
  // Remove artificial initial loading for a11y and faster paint
  const [isLoading] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  // no artificial loading delay

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

  // Always render the main app shell to preserve landmarks for a11y

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <HelmetProvider>
      <ErrorBoundaryLuxury>
        <AppWrapper>
          <Seo {...(routeMeta[location.pathname] || defaultMeta)} />
          <SkipLink />
          <HeaderStandardized />
          <MainContent>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <LoadingScreenLuxury />
              ) : (
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
              )}
            </AnimatePresence>
          </MainContent>
          <FooterLuxury />
          <CookieConsentLuxury />
          <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />
        </AppWrapper>
      </ErrorBoundaryLuxury>
    </HelmetProvider>
  )
}

export default App