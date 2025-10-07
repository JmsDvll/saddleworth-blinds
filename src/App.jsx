import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import BookAppointment from './pages/BookAppointment'
import RollerBlinds from './pages/RollerBlinds'
import VenetianBlinds from './pages/VenetianBlinds'
import VisionBlinds from './pages/VisionBlinds'
import VerticalBlinds from './pages/VerticalBlinds'
import PerfectFitBlinds from './pages/PerfectFitBlinds'
import Shutters from './pages/Shutters'
import RomanBlinds from './pages/RomanBlinds'
import Curtains from './pages/Curtains'
import AllusionBlinds from './pages/AllusionBlinds'
import Uppermill from './pages/Uppermill'
import Diggle from './pages/Diggle'
import Delph from './pages/Delph'
import Greenfield from './pages/Greenfield'
import Dobcross from './pages/Dobcross'
import Lydgate from './pages/Lydgate'
import Denshaw from './pages/Denshaw'
import Friezland from './pages/Friezland'
import Grasscroft from './pages/Grasscroft'
import Grotton from './pages/Grotton'
import Springhead from './pages/Springhead'
import Lees from './pages/Lees'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-gold text-gray-900 px-4 py-2 rounded">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App
