import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    subject: '',
    message: '',
    contactMethod: 'phone',
    marketing: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key])
    })
    
    // Add anti-spam fields
    formDataToSend.append('form_start_time', Math.floor(Date.now() / 1000) - 10)
    formDataToSend.append('website', '') // Honeypot field

    try {
      const response = await fetch('/process-contact.php', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        // Success
        alert('Thank you for your message! We\'ll get back to you within 24 hours.')
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          postcode: '',
          subject: '',
          message: '',
          contactMethod: 'phone',
          marketing: false
        })
      } else {
        // Error
        alert('Sorry, there was an error sending your message. Please call us on 01457 597091.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error sending your message. Please call us on 01457 597091.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          placeholder="John Smith"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address *
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
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number *
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
          Your Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          placeholder="123 High Street, Uppermill"
        />
      </div>

      <div>
        <label htmlFor="postcode" className="block text-sm font-medium text-white mb-2">
          Postcode
        </label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          value={formData.postcode}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
          placeholder="OL3 6AA"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent"
        >
          <option value="">What's this about?</option>
          <option value="quote">Request a Quote</option>
          <option value="general">General Enquiry</option>
          <option value="existing">Existing Order</option>
          <option value="complaint">Complaint</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
          placeholder="Tell us how we can help you..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-3">
          How would you prefer we contact you?
        </label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === 'phone'}
              onChange={handleInputChange}
              className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 focus:ring-brand-gold"
            />
            <span className="text-sm text-gray-300">Phone</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={handleInputChange}
              className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 focus:ring-brand-gold"
            />
            <span className="text-sm text-gray-300">Email</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="contactMethod"
              value="either"
              checked={formData.contactMethod === 'either'}
              onChange={handleInputChange}
              className="w-4 h-4 text-brand-gold bg-gray-800 border-gray-600 focus:ring-brand-gold"
            />
            <span className="text-sm text-gray-300">Either is fine</span>
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="marketing"
            checked={formData.marketing}
            onChange={handleInputChange}
            className="w-4 h-4 mt-1 text-brand-gold bg-gray-800 border-gray-600 rounded focus:ring-brand-gold"
          />
          <span className="text-sm text-gray-300">
            I'd like to receive occasional updates about new products and special offers
          </span>
        </label>
      </div>

      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm