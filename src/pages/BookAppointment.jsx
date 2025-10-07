import React, { useState } from 'react'
import { typography, spacing, colors, interactive } from '../styles'

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    rooms: '',
    timeframe: '',
    budget: '',
    blindType: '',
    message: '',
    preferredTime: [],
    marketing: false,
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create FormData object to send to PHP
    const formDataToSend = new FormData()
    
    // Add all form fields
    formDataToSend.append('firstName', formData.firstName)
    formDataToSend.append('lastName', formData.lastName)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('address', formData.address)
    formDataToSend.append('postcode', formData.postcode)
    formDataToSend.append('rooms', formData.rooms)
    formDataToSend.append('timeframe', formData.timeframe)
    formDataToSend.append('budget', formData.budget)
    formDataToSend.append('message', formData.message)
    formDataToSend.append('blindType', formData.blindType || '')
    
    // Add preferred times as array
    formData.preferredTime.forEach(time => {
      formDataToSend.append('preferredTime[]', time)
    })
    
    // Add anti-spam fields
    formDataToSend.append('form_start_time', Math.floor(Date.now() / 1000) - 10) // Started 10 seconds ago
    formDataToSend.append('website', '') // Honeypot field

    try {
      const response = await fetch('/process-booking.php', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        // Success - show success message and reset form
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for booking! We\'ll contact you within 24 hours to arrange your free consultation.'
        })
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
        // Clear success message after 10 seconds
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 10000)
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          postcode: '',
          rooms: '',
          timeframe: '',
          budget: '',
          blindType: '',
          message: '',
          preferredTime: [],
          marketing: false,
          privacy: false
        })
      } else {
        // Error
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your booking. Please call us on 01457 597091.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your booking. Please call us on 01457 597091.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${spacing.container.default} ${spacing.section.py}`}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center ${spacing.margin.bottomXl}`}>
          <h1 className={`${typography.h1} ${spacing.margin.bottomLg}`}>Book Your Free Consultation</h1>
          <p className={`${typography.lead} ${colors.text.lightGray}`}>
            Tell us a bit about yourself and we'll get back to you to arrange your free home visit. The more you can tell us, the better we can help!
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus.message && (
          <div
            className={`p-4 rounded-lg mb-8 ${
              submitStatus.type === 'success'
                ? 'bg-green-900/20 border border-green-600 text-green-400'
                : 'bg-red-900/20 border border-red-600 text-red-400'
            }`}
            role="alert"
          >
            <p className="font-medium text-lg">{submitStatus.message}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                    What's your first name? *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                    And your last name? *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Your email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Best phone number to reach you *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9\s()+-]+"
                    minLength="10"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="01457 597091"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
                  Where would you like us to visit? *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  placeholder="Your street address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-white mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                    placeholder="OL3 5AA"
                  />
                </div>

                <div>
                  <label htmlFor="rooms" className="block text-sm font-medium text-white mb-2">
                    How many windows are we talking about?
                  </label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  >
                    <option value="">Just give us a rough idea</option>
                    <option value="1">1 window</option>
                    <option value="2-3">2-3 windows</option>
                    <option value="4-6">4-6 windows</option>
                    <option value="7+">7+ windows</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeframe" className="block text-sm font-medium text-white mb-2">
                    When are you hoping to get them fitted?
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  >
                    <option value="">When suits you?</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">Within a month</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                    Any idea of budget? (Don't worry if not!)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                  >
                    <option value="">Not sure yet</option>
                    <option value="under-500">Under £500</option>
                    <option value="500-1000">£500 - £1,000</option>
                    <option value="1000-2000">£1,000 - £2,000</option>
                    <option value="2000+">£2,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="blindType" className="block text-sm font-medium text-white mb-2">
                  What type of blinds are you interested in?
                </label>
                <select
                  id="blindType"
                  name="blindType"
                  value={formData.blindType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                >
                  <option value="">Not sure yet</option>
                  <option value="roller">Roller Blinds</option>
                  <option value="venetian">Venetian Blinds</option>
                  <option value="vertical">Vertical Blinds</option>
                  <option value="vision">Vision Blinds</option>
                  <option value="perfect-fit">Perfect Fit Blinds</option>
                  <option value="shutters">Shutters</option>
                  <option value="roman">Roman Blinds</option>
                  <option value="curtains">Curtains</option>
                  <option value="allusion">Allusion Blinds</option>
                  <option value="multiple">A mix of different types</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  When's good for you? (Tick any that work)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'weekday-morning', label: 'Weekday mornings (9am-12pm)' },
                    { id: 'weekday-afternoon', label: 'Weekday afternoons (1pm-5pm)' },
                    { id: 'weekday-evening', label: 'Weekday evenings (5pm-7pm)' },
                    { id: 'saturday', label: 'Saturdays' }
                  ].map((time) => (
                    <label key={time.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id={time.id}
                        checked={formData.preferredTime.includes(time.id)}
                        onChange={(e) => {
                          const { checked, id } = e.target
                          setFormData(prev => ({
                            ...prev,
                            preferredTime: checked
                              ? [...prev.preferredTime, id]
                              : prev.preferredTime.filter(t => t !== id)
                          }))
                        }}
                        className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 rounded focus:ring-brand-gold"
                      />
                      <span className="text-sm text-gray-300">{time.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Anything else you'd like to tell us?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
                  placeholder="Tell us about your rooms, any tricky windows, what style you like, or just say hello!"
                />
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="marketing"
                    checked={formData.marketing}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 rounded focus:ring-brand-gold"
                  />
                  <span className="text-sm text-gray-300">Keep me posted about special offers and new products</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 rounded focus:ring-brand-gold"
                  />
                  <span className="text-sm text-gray-300">
                    I'm happy for you to contact me about this enquiry and agree to the{' '}
                    <a href="/privacy-policy" className="text-brand-gold hover:text-brand-green underline">
                      Privacy Policy
                    </a> *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-gold hover:bg-yellow-500 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  'Book Your Free Consultation'
                )}
              </button>

              <p className="text-sm text-gray-400 text-center">
                We'll get back to you during business hours to arrange a time that suits you. Your details stay private - we never share them with anyone else.
              </p>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Why Book With Us?</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Completely free consultation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>No obligation to buy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Covering all Saddleworth</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>20+ years local experience</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Sometimes talking is easier than filling out forms.</p>
                <a
                  href="tel:01457597091"
                  className="flex items-center justify-center space-x-2 text-brand-gold hover:text-brand-green transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">Call 01457 597091</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookAppointment
