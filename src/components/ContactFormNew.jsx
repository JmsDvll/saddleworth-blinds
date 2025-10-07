import React, { useState } from 'react'
import { 
  Button, 
  Card, 
  Text, 
  FormInput, 
  FormTextarea, 
  FormCheckbox, 
  FormRadio,
  FormGroup,
  FormRow 
} from './ui'

const ContactFormNew = () => {
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

    const formDataToSend = new FormData()
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key])
    })
    
    formDataToSend.append('form_start_time', Math.floor(Date.now() / 1000) - 10)
    formDataToSend.append('website', '') // Honeypot

    try {
      const response = await fetch('/process-contact.php', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        })
        
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
        
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000)
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please call us on 01457 597091.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please call us on 01457 597091.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        {/* Status Messages - Using our Card component */}
        {submitStatus.message && (
          <Card 
            variant="default" 
            className={
              submitStatus.type === 'success'
                ? 'bg-green-900/20 border-green-600'
                : 'bg-red-900/20 border-red-600'
            }
          >
            <Text 
              color={submitStatus.type === 'success' ? 'success' : 'error'} 
              weight="medium"
            >
              {submitStatus.message}
            </Text>
          </Card>
        )}

        {/* Name Input */}
        <FormInput
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Enter your full name"
        />

        {/* Email and Phone in a row */}
        <FormRow>
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="your@email.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          
          <FormInput
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="01457 123456"
            pattern="[0-9\s()+-]+"
            helperText="We'll only call during business hours"
          />
        </FormRow>

        {/* Address and Postcode */}
        <FormRow>
          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Your street address"
            helperText="Optional - helps us understand your area"
          />
          
          <FormInput
            label="Postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleInputChange}
            placeholder="OL3 5AA"
            pattern="[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?\s?[0-9][A-Za-z]{2}"
          />
        </FormRow>

        {/* Subject */}
        <FormInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          placeholder="What's this about?"
          helperText="e.g., 'Quote for living room blinds'"
        />

        {/* Message */}
        <FormTextarea
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          placeholder="Tell us about your project..."
          helperText="The more detail you provide, the better we can help!"
        />

        {/* Contact Preference */}
        <div>
          <Text weight="medium" className="mb-3">
            How would you prefer we contact you?
          </Text>
          <div className="space-y-2">
            <FormRadio
              label="Phone (quickest response)"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === 'phone'}
              onChange={handleInputChange}
            />
            <FormRadio
              label="Email"
              name="contactMethod"
              value="email"
              checked={formData.contactMethod === 'email'}
              onChange={handleInputChange}
            />
            <FormRadio
              label="Either is fine"
              name="contactMethod"
              value="either"
              checked={formData.contactMethod === 'either'}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Marketing Consent */}
        <FormCheckbox
          label="I'd like to receive occasional updates about special offers and new products"
          name="marketing"
          checked={formData.marketing}
          onChange={handleInputChange}
        />

        {/* Honeypot field (hidden) */}
        <input
          type="text"
          name="website"
          value=""
          onChange={() => {}}
          style={{ display: 'none' }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Send Message
        </Button>
      </FormGroup>
    </form>
  )
}

export default ContactFormNew