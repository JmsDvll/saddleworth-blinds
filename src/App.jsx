import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import ErrorBoundary from './components/ErrorBoundary'

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
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-gold mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
    </div>
  </div>
)

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-gold text-gray-900 px-4 py-2 rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/roller-blinds" element={<RollerBlinds />} />
            <Route path="/venetian-blinds" element={<VenetianBlinds />} />
            <Route path="/vision-blinds" element={<VisionBlinds />} />
            <Route path="/vertical-blinds" element={<VerticalBlinds />} />
            <Route path="/perfect-fit-blinds" element={<PerfectFitBlinds />} />
            <Route path="/shutters" element={<Shutters />} />
            <Route path="/roman-blinds" element={<RomanBlinds />} />
            <Route path="/curtains" element={<Curtains />} />
            <Route path="/allusion-blinds" element={<AllusionBlinds />} />
            <Route path="/areas/uppermill" element={<Uppermill />} />
            <Route path="/areas/diggle" element={<Diggle />} />
            <Route path="/areas/delph" element={<Delph />} />
            <Route path="/areas/greenfield" element={<Greenfield />} />
            <Route path="/areas/dobcross" element={<Dobcross />} />
            <Route path="/areas/lydgate" element={<Lydgate />} />
            <Route path="/areas/denshaw" element={<Denshaw />} />
            <Route path="/areas/friezland" element={<Friezland />} />
            <Route path="/areas/grasscroft" element={<Grasscroft />} />
            <Route path="/areas/grotton" element={<Grotton />} />
            <Route path="/areas/springhead" element={<Springhead />} />
            <Route path="/areas/lees" element={<Lees />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  )
}

export default App
