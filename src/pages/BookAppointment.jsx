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

    const formDataToSend = new FormData()
    
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
    
    formData.preferredTime.forEach(time => {
      formDataToSend.append('preferredTime[]', time)
    })
    
    formDataToSend.append('form_start_time', Math.floor(Date.now() / 1000) - 10)
    formDataToSend.append('website', '')

    try {
      const response = await fetch('/process-booking.php', {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for booking! We\'ll contact you within 24 hours to arrange your free consultation.'
        })
        
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 10000)
        
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
        setSubmitStatus({
          type: 'error',
          message: 'Sorry, there was an error processing your booking. Please call us on 01457 597091.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error processing your booking. Please call us on 01457 597091.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const processSteps = [
    { icon: 'calendar', title: 'Book Online', description: 'Fill out the simple form' },
    { icon: 'phone', title: 'We Call You', description: 'Within 24 hours to confirm' },
    { icon: 'home', title: 'Home Visit', description: 'Free consultation at your home' },
    { icon: 'check', title: 'Installation', description: 'Professional fitting included' }
  ]

  const benefits = [
    { icon: 'clock', text: 'Appointments 7 days a week' },
    { icon: 'currency', text: 'Completely free - no obligation' },
    { icon: 'home', text: 'We come to you' },
    { icon: 'shield', text: 'No pushy sales tactics' }
  ]

  return (
    <>
      {/* Hero Section - Dark theme */}
      <Section background="dark" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <Heading as="h1" size="4xl" mdSize="5xl" align="center">
              Book Your Free Consultation
              <Text as="span" color="gold" className="block text-2xl md:text-3xl mt-2">
                No Obligation Home Visit
              </Text>
            </Heading>
            
            <Text size="xlarge" color="light" align="center" className="max-w-2xl">
              Let us visit your home, measure your windows, and show you exactly what's possible. 
              Evening and weekend appointments available.
            </Text>

            {/* Process Steps */}
            <Grid cols={2} mdCols={4} gap="medium" className="mt-8">
              {processSteps.map((step, index) => (
                <Stack key={index} spacing="small" align="center">
                  <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <Icon name={step.icon} size="medium" className="text-brand-gold" />
                  </div>
                  <Text weight="semibold" align="center">{step.title}</Text>
                  <Text size="small" color="muted" align="center">{step.description}</Text>
                </Stack>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Form Section - Darker background */}
      <Section background="darker" padding="large">
        <Container maxWidth="large">
          {/* Success/Error Messages */}
          {submitStatus.message && (
            <div className="mb-8">
              <Alert 
                variant={submitStatus.type} 
                size="large"
                onClose={() => setSubmitStatus({ type: '', message: '' })}
              >
                {submitStatus.message}
              </Alert>
            </div>
          )}

          <Grid cols={1} mdCols={3} gap="xlarge">
            {/* Main Form - 2 columns */}
            <div className="md:col-span-2">
              <Card variant="elevated" padding="xlarge">
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Stack spacing="medium">
                      <Heading as="h2" size="3xl">Your Details</Heading>
                      <Text color="light">
                        Tell us a bit about yourself and your project
                      </Text>
                    </Stack>

                    {/* Name Fields */}
                    <FormRow>
                      <FormInput
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                      />
                      <FormInput
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Smith"
                      />
                    </FormRow>

                    {/* Contact Fields */}
                    <FormRow>
                      <FormInput
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                      />
                      <FormInput
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="07123 456789"
                      />
                    </FormRow>

                    {/* Address Fields */}
                    <FormInput
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 High Street, Uppermill"
                    />

                    <FormInput
                      label="Postcode"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      required
                      placeholder="OL3 6AA"
                      className="max-w-xs"
                    />

                    {/* Project Details */}
                    <Stack spacing="medium" className="mt-8">
                      <Heading as="h3" size="2xl">Project Details</Heading>
                      <Text color="light">
                        Help us prepare for your consultation
                      </Text>
                    </Stack>

                    <FormRow>
                      <FormInput
                        label="Number of Windows/Rooms"
                        type="number"
                        name="rooms"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        required
                        min="1"
                        placeholder="e.g., 5"
                      />
                      <FormSelect
                        label="Timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select timeframe</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1month">Within 1 month</option>
                        <option value="3months">Within 3 months</option>
                        <option value="planning">Just planning</option>
                      </FormSelect>
                    </FormRow>

                    <FormRow>
                      <FormSelect
                        label="Budget Range"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        helperText="Helps us show relevant options"
                      >
                        <option value="">Prefer not to say</option>
                        <option value="under1000">Under £1,000</option>
                        <option value="1000-2500">£1,000 - £2,500</option>
                        <option value="2500-5000">£2,500 - £5,000</option>
                        <option value="over5000">Over £5,000</option>
                      </FormSelect>
                      <FormSelect
                        label="Interested In"
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
                        <option value="shutters">Plantation Shutters</option>
                        <option value="multiple">Multiple Types</option>
                      </FormSelect>
                    </FormRow>

                    <FormTextarea
                      label="Additional Information"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about any specific requirements or questions you have..."
                      helperText="Optional - anything else we should know?"
                    />

                    {/* Checkboxes */}
                    <Stack spacing="medium">
                      <FormCheckbox
                        label="I'm happy to receive special offers and news by email"
                        name="marketing"
                        checked={formData.marketing}
                        onChange={handleInputChange}
                      />
                      <FormCheckbox
                        label="I've read and agree to the privacy policy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleInputChange}
                        required
                      />
                    </Stack>

                    {/* Honeypot */}
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
                      size="xlarge"
                      fullWidth
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    >
                      Book My Free Consultation
                    </Button>
                  </FormGroup>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <Stack spacing="large">
              {/* Benefits */}
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Heading as="h3" size="xl" color="gold">What Happens Next?</Heading>
                  <Stack spacing="small">
                    {benefits.map((benefit, index) => (
                      <Flex key={index} align="center" gap="small">
                        <Icon name={benefit.icon} size="small" className="text-brand-gold" />
                        <Text size="small">{benefit.text}</Text>
                      </Flex>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              {/* Testimonial */}
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Flex className="text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" size="small" />
                    ))}
                  </Flex>
                  <Text className="italic">
                    "The consultation was so helpful - no pressure, just honest advice. 
                    They showed us options we hadn't even considered!"
                  </Text>
                  <Text size="small" color="muted">
                    Sarah M., Uppermill
                  </Text>
                </Stack>
              </Card>

              {/* Contact Alternative */}
              <Card variant="highlight" padding="large">
                <Stack spacing="medium" align="center">
                  <Icon name="phone" size="large" className="text-brand-gold" />
                  <Heading as="h3" size="lg" align="center">Prefer to Call?</Heading>
                  <Text align="center">
                    Speak to our friendly team
                  </Text>
                  <Button
                    as="a"
                    href="tel:01457597091"
                    variant="secondary"
                    size="large"
                    iconLeft={<Icon name="phone" />}
                  >
                    01457 597091
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Trust Section - Gradient */}
      <Section background="gradient" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <Heading as="h2" size="3xl" align="center">
              Why Book With Us?
            </Heading>
            
            <Grid cols={1} mdCols={3} gap="large" className="max-w-4xl">
              <Stack spacing="small" align="center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="calendar" size="large" className="text-white" />
                </div>
                <Heading as="h3" size="lg" align="center">20+ Years Experience</Heading>
                <Text align="center">Trusted by thousands of Saddleworth homeowners</Text>
              </Stack>
              
              <Stack spacing="small" align="center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="shield" size="large" className="text-white" />
                </div>
                <Heading as="h3" size="lg" align="center">No Pressure Sales</Heading>
                <Text align="center">Honest advice with time to think</Text>
              </Stack>
              
              <Stack spacing="small" align="center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon name="currency" size="large" className="text-white" />
                </div>
                <Heading as="h3" size="lg" align="center">Best Price Promise</Heading>
                <Text align="center">Quality products at fair prices</Text>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default BookAppointment