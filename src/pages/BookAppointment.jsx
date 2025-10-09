import React, { useState } from 'react'
import { 
  Section, 
  Container, 
  Grid, 
  Heading, 
  Text, 
  Button, 
  Card, 
  Icon, 
  Link, 
  Stack,
  Flex,
  Center,
  Alert,
  FormInput,
  FormSelect,
  FormTextarea,
  FormCheckbox,
  FormGroup,
  FormRow
} from '../components/ui'

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
    <Section padding="large">
      <Container maxWidth="medium">
        <Stack spacing="xlarge">
          {/* Hero Section */}
          <Center>
            <Stack spacing="medium" align="center" className="max-w-3xl">
              <Heading as="h1" size="4xl" mdSize="5xl">Book Your Free Consultation</Heading>
              <Text size="xlarge" color="light" leading="relaxed" align="center">
                Tell us a bit about yourself and we'll get back to you to arrange your free home visit. The more you can tell us, the better we can help!
              </Text>
            </Stack>
          </Center>

          {/* Status Messages */}
          {submitStatus.message && (
            <Alert
              variant={submitStatus.type === 'success' ? 'success' : 'error'}
              size="large"
            >
              {submitStatus.message}
            </Alert>
          )}

          <Grid cols={1} lgCols={3} gap="xlarge">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <Stack spacing="large">
                  <FormRow>
                    <FormGroup>
                      <FormInput
                        label="What's your first name?"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your first name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormInput
                        label="And your last name?"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your last name"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <FormInput
                        type="email"
                        label="Your email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="your@email.com"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormInput
                        type="tel"
                        label="Best phone number to reach you"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9\s()+-]+"
                        minLength="10"
                        placeholder="01457 597091"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormInput
                      label="Where would you like us to visit?"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Your street address"
                    />
                  </FormGroup>

                  <FormRow>
                    <FormGroup>
                      <FormInput
                        label="Postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleInputChange}
                        required
                        placeholder="OL3 5AA"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormSelect
                        label="How many windows are we talking about?"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                      >
                        <option value="">Just give us a rough idea</option>
                        <option value="1">1 window</option>
                        <option value="2-3">2-3 windows</option>
                        <option value="4-6">4-6 windows</option>
                        <option value="7+">7+ windows</option>
                      </FormSelect>
                    </FormGroup>
                  </FormRow>

                  <FormRow>
                    <FormGroup>
                      <FormSelect
                        label="When are you hoping to get them fitted?"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                      >
                        <option value="">When suits you?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">Within a month</option>
                        <option value="flexible">I'm flexible</option>
                      </FormSelect>
                    </FormGroup>
                    <FormGroup>
                      <FormSelect
                        label="Any idea of budget? (Don't worry if not!)"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        <option value="">Not sure yet</option>
                        <option value="under-500">Under £500</option>
                        <option value="500-1000">£500 - £1,000</option>
                        <option value="1000-2000">£1,000 - £2,000</option>
                        <option value="2000+">£2,000+</option>
                      </FormSelect>
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormSelect
                      label="What type of blinds are you interested in?"
                      name="blindType"
                      value={formData.blindType}
                      onChange={handleInputChange}
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
                    </FormSelect>
                  </FormGroup>

                  <FormGroup>
                    <label className="block text-sm font-medium text-white mb-3">
                      When's good for you? (Tick any that work)
                    </label>
                    <Grid cols={1} mdCols={2} gap="small">
                      {[
                        { id: 'weekday-morning', label: 'Weekday mornings (9am-12pm)' },
                        { id: 'weekday-afternoon', label: 'Weekday afternoons (1pm-5pm)' },
                        { id: 'weekday-evening', label: 'Weekday evenings (5pm-7pm)' },
                        { id: 'saturday', label: 'Saturdays' }
                      ].map((time) => (
                        <FormCheckbox
                          key={time.id}
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
                          label={time.label}
                        />
                      ))}
                    </Grid>
                  </FormGroup>

                  <FormGroup>
                    <FormTextarea
                      label="Anything else you'd like to tell us?"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your rooms, any tricky windows, what style you like, or just say hello!"
                    />
                  </FormGroup>

                  <Stack spacing="small">
                    <FormCheckbox
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleInputChange}
                      label="Keep me posted about special offers and new products"
                    />

                    <FormCheckbox
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      required
                      label={
                        <>
                          I'm happy for you to contact me about this enquiry and agree to the{' '}
                          <Link to="/privacy-policy" variant="subtle">
                            Privacy Policy
                          </Link>
                        </>
                      }
                    />
                  </Stack>

                  <Button
                    type="submit"
                    variant="primary"
                    size="xlarge"
                    fullWidth
                    loading={isSubmitting}
                  >
                    Book Your Free Consultation
                  </Button>

                  <Text size="small" color="muted" align="center">
                    We'll get back to you during business hours to arrange a time that suits you. Your details stay private - we never share them with anyone else.
                  </Text>
                </Stack>
              </form>
            </div>

            <div className="lg:col-span-1">
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Heading as="h3" size="xl">Why Book With Us?</Heading>
                  <Stack spacing="small">
                    <Flex align="start" gap="small">
                      <Icon name="checkCircle" size="small" color="gold" className="flex-shrink-0 mt-0.5" />
                      <Text size="small" color="light">Completely free consultation</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="lock" size="small" color="gold" className="flex-shrink-0 mt-0.5" />
                      <Text size="small" color="light">No obligation to buy</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="location" size="small" color="gold" className="flex-shrink-0 mt-0.5" />
                      <Text size="small" color="light">Covering all Saddleworth</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="checkCircle" size="small" color="gold" className="flex-shrink-0 mt-0.5" />
                      <Text size="small" color="light">20+ years local experience</Text>
                    </Flex>
                  </Stack>

                  <Card variant="highlight" padding="medium">
                    <Stack spacing="small">
                      <Text size="small" color="muted">Sometimes talking is easier than filling out forms.</Text>
                      <Button
                        as="a"
                        href="tel:01457597091"
                        variant="ghost"
                        iconLeft={<Icon name="phone" />}
                        fullWidth
                      >
                        Call 01457 597091
                      </Button>
                    </Stack>
                  </Card>
                </Stack>
              </Card>
            </div>
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}

export default BookAppointment