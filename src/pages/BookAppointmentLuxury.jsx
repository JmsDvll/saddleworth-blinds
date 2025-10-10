import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Section,
  Container,
  Grid,
  Stack,
  Heading,
  Text,
  Card,
  Button,
  Icon,
  Alert,
  FormInput,
  FormSelect,
  FormTextarea,
  FormGroup,
  LuxuryIcon,
  GoldDivider,
  ShimmerText,
  GlowBox,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroOverlay,
  Flex,
  LuxuryBadge
} from '../components/ui'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  postcode: yup.string().required('Postcode is required'),
  preferredDate: yup.string().required('Please select a preferred date'),
  preferredTime: yup.string().required('Please select a preferred time'),
  alternativeDate: yup.string(),
  alternativeTime: yup.string(),
  service: yup.string().required('Please select a service'),
  rooms: yup.string().required('Please specify number of rooms'),
  propertyType: yup.string().required('Please select property type'),
  visitType: yup.string().required('Please select visit type'),
  message: yup.string()
}).required()

const BookAppointmentLuxury = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/process-appointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        // Track conversion
        if (window.gtag) {
          window.gtag('event', 'appointment_booking', {
            'event_category': 'Appointment',
            'event_label': 'Book Appointment Form'
          })
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Roller Blinds',
    'Venetian Blinds',
    'Vertical Blinds',
    'Vision Blinds',
    'Perfect Fit Blinds',
    'Shutters',
    'Roman Blinds',
    'Curtains',
    'Multiple Products',
    'Not Sure - Need Advice'
  ]

  const roomOptions = [
    '1 Window',
    '2-3 Windows',
    '4-5 Windows',
    '6-10 Windows',
    'Whole House',
    'Commercial Property'
  ]

  const propertyTypes = [
    'Detached House',
    'Semi-Detached House',
    'Terraced House',
    'Flat/Apartment',
    'Bungalow',
    'Commercial Property',
    'Other'
  ]

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    'Evening (5:00 PM - 7:00 PM)'
  ]

  const benefits = [
    {
      icon: 'home',
      title: 'Free Home Visit',
      description: 'We come to you at a time that suits'
    },
    {
      icon: 'ruler',
      title: 'Precise Measuring',
      description: 'Professional measurement for perfect fit'
    },
    {
      icon: 'palette',
      title: 'Expert Advice',
      description: 'Help choosing the right products'
    },
    {
      icon: 'currency',
      title: 'Instant Quote',
      description: 'Clear pricing with no hidden costs'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection variant="luxury" height="medium">
        <HeroOverlay variant="gradient" />
        <HeroContent align="center" padding="large">
          <Container>
            <Stack spacing="large" align="center" className="max-w-3xl mx-auto">
              <HeroTitle effect="glow">
                <ShimmerText variant="luxury">
                  Book Your Free Consultation
                </ShimmerText>
              </HeroTitle>
              <HeroSubtitle>
                Transform Your Windows Today
              </HeroSubtitle>
              <Text size="xlarge" color="light" align="center">
                Choose your preferred appointment time and let our experts 
                bring the showroom to your home
              </Text>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Benefits Section */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="large">
            <Grid cols={4} gap="medium">
              {benefits.map((benefit, index) => (
                <Card key={index} variant="elevated" hover="lift" padding="medium">
                  <Stack spacing="small" align="center">
                    <LuxuryIcon variant="circle" size="medium">
                      <Icon name={benefit.icon} />
                    </LuxuryIcon>
                    <Heading size="base" align="center">
                      {benefit.title}
                    </Heading>
                    <Text size="small" color="muted" align="center">
                      {benefit.description}
                    </Text>
                  </Stack>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Booking Form */}
      <Section background="dark" padding="xlarge">
        <Container className="max-w-4xl">
          <GlowBox variant="luxury" padding="medium">
            <Card variant="luxury" padding="xlarge">
              <Stack spacing="xlarge">
                {/* Form Header */}
                <Stack spacing="medium" align="center">
                  <Heading size="2xl" color="gold" align="center">
                    Schedule Your Appointment
                  </Heading>
                  <Text size="large" color="light" align="center">
                    Fill in your details and we'll confirm your appointment within 24 hours
                  </Text>
                </Stack>

                {submitStatus === 'success' && (
                  <Alert variant="success">
                    <Flex gap="small" align="center">
                      <Icon name="checkCircle" />
                      <Stack spacing="small">
                        <Text weight="semibold">Appointment request received!</Text>
                        <Text size="small">We'll contact you within 24 hours to confirm your appointment.</Text>
                      </Stack>
                    </Flex>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert variant="error">
                    <Flex gap="small" align="center">
                      <Icon name="xCircle" />
                      <Text weight="semibold">Something went wrong. Please try again or call us.</Text>
                    </Flex>
                  </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing="xlarge">
                    {/* Contact Details */}
                    <Stack spacing="medium">
                      <Heading size="lg" color="gold">
                        Your Details
                      </Heading>
                      <GoldDivider variant="simple" size="small" align="left" />
                      
                      <Grid cols={2} gap="medium">
                        <FormGroup>
                          <FormInput
                            label="Full Name"
                            placeholder="John Smith"
                            error={errors.name?.message}
                            {...register('name')}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <FormInput
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            error={errors.email?.message}
                            {...register('email')}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <FormInput
                            label="Phone Number"
                            type="tel"
                            placeholder="07123 456789"
                            error={errors.phone?.message}
                            {...register('phone')}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <FormInput
                            label="Postcode"
                            placeholder="OL3 5AA"
                            error={errors.postcode?.message}
                            {...register('postcode')}
                            required
                          />
                        </FormGroup>
                      </Grid>
                    </Stack>

                    {/* Appointment Preferences */}
                    <Stack spacing="medium">
                      <Heading size="lg" color="gold">
                        Preferred Appointment Time
                      </Heading>
                      <GoldDivider variant="simple" size="small" align="left" />
                      
                      <Grid cols={2} gap="medium">
                        <FormGroup>
                          <FormInput
                            label="Preferred Date"
                            type="date"
                            error={errors.preferredDate?.message}
                            min={new Date().toISOString().split('T')[0]}
                            {...register('preferredDate')}
                            required
                          />
                        </FormGroup>

                        <FormGroup>
                          <FormSelect
                            label="Preferred Time"
                            error={errors.preferredTime?.message}
                            {...register('preferredTime')}
                            required
                          >
                            <option value="">Select a time...</option>
                            {timeSlots.map(slot => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </FormSelect>
                        </FormGroup>

                        <FormGroup>
                          <FormInput
                            label="Alternative Date (Optional)"
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            {...register('alternativeDate')}
                          />
                        </FormGroup>

                        <FormGroup>
                          <FormSelect
                            label="Alternative Time (Optional)"
                            {...register('alternativeTime')}
                          >
                            <option value="">Select a time...</option>
                            {timeSlots.map(slot => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </FormSelect>
                        </FormGroup>
                      </Grid>
                    </Stack>

                    {/* Service Requirements */}
                    <Stack spacing="medium">
                      <Heading size="lg" color="gold">
                        Your Requirements
                      </Heading>
                      <GoldDivider variant="simple" size="small" align="left" />
                      
                      <Grid cols={2} gap="medium">
                        <FormGroup>
                          <FormSelect
                            label="Service Required"
                            error={errors.service?.message}
                            {...register('service')}
                            required
                          >
                            <option value="">Select a service...</option>
                            {services.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </FormSelect>
                        </FormGroup>

                        <FormGroup>
                          <FormSelect
                            label="Number of Windows"
                            error={errors.rooms?.message}
                            {...register('rooms')}
                            required
                          >
                            <option value="">Select...</option>
                            {roomOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </FormSelect>
                        </FormGroup>

                        <FormGroup>
                          <FormSelect
                            label="Property Type"
                            error={errors.propertyType?.message}
                            {...register('propertyType')}
                            required
                          >
                            <option value="">Select property type...</option>
                            {propertyTypes.map(type => (
                              <option key={type} value={type}>{type}</option>
                            ))}
                          </FormSelect>
                        </FormGroup>

                        <FormGroup>
                          <FormSelect
                            label="Visit Type"
                            error={errors.visitType?.message}
                            {...register('visitType')}
                            required
                          >
                            <option value="">Select visit type...</option>
                            <option value="measure-quote">Measure & Quote Only</option>
                            <option value="consultation">Full Design Consultation</option>
                            <option value="samples">View Samples Only</option>
                          </FormSelect>
                        </FormGroup>
                      </Grid>

                      <FormGroup>
                        <FormTextarea
                          label="Additional Information (Optional)"
                          placeholder="Tell us about any specific requirements, access issues, or questions you have..."
                          rows={4}
                          {...register('message')}
                        />
                      </FormGroup>
                    </Stack>

                    {/* What to Expect */}
                    <Card variant="dark" padding="large">
                      <Stack spacing="medium">
                        <Heading size="base" color="gold">
                          What Happens Next?
                        </Heading>
                        <Grid cols={3} gap="medium">
                          <Flex gap="small" align="start">
                            <LuxuryBadge variant="gold" size="small">1</LuxuryBadge>
                            <Stack spacing="small">
                              <Text weight="semibold" color="light">We'll Call You</Text>
                              <Text size="small" color="muted">
                                Within 24 hours to confirm your appointment
                              </Text>
                            </Stack>
                          </Flex>
                          <Flex gap="small" align="start">
                            <LuxuryBadge variant="gold" size="small">2</LuxuryBadge>
                            <Stack spacing="small">
                              <Text weight="semibold" color="light">Expert Visit</Text>
                              <Text size="small" color="muted">
                                Our specialist brings samples to your home
                              </Text>
                            </Stack>
                          </Flex>
                          <Flex gap="small" align="start">
                            <LuxuryBadge variant="gold" size="small">3</LuxuryBadge>
                            <Stack spacing="small">
                              <Text weight="semibold" color="light">Instant Quote</Text>
                              <Text size="small" color="muted">
                                Clear pricing with no obligation to buy
                              </Text>
                            </Stack>
                          </Flex>
                        </Grid>
                      </Stack>
                    </Card>

                    {/* Submit Button */}
                    <Stack spacing="small">
                      <Button
                        type="submit"
                        variant="luxury"
                        size="large"
                        fullWidth
                        loading={isSubmitting}
                        iconLeft={<Icon name="calendar" />}
                      >
                        {isSubmitting ? 'Booking...' : 'Book My Free Appointment'}
                      </Button>
                      
                      <Text size="small" color="muted" align="center">
                        By booking an appointment, you agree to our privacy policy. 
                        There's no obligation to purchase.
                      </Text>
                    </Stack>
                  </Stack>
                </form>
              </Stack>
            </Card>
          </GlowBox>
        </Container>
      </Section>

      {/* Reassurance Section */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="medium" align="center">
              <Heading size="xl" color="gold" align="center">
                Prefer to Speak to Someone?
              </Heading>
              <Text size="large" color="light" align="center">
                Our friendly team is available to book your appointment over the phone
              </Text>
              <Button
                href="tel:01457597091"
                variant="primary"
                size="large"
                iconLeft={<Icon name="phone" />}
              >
                Call 01457 597091
              </Button>
              <Text size="small" color="muted">
                Mon-Fri 9am-5:30pm, Sat 10am-4pm
              </Text>
            </Stack>
          </Card>
        </Container>
      </Section>
    </>
  )
}

export default BookAppointmentLuxury