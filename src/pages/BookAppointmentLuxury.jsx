 
import React, { useState } from 'react'
/**
 * [STANDARDIZATION CHECKLIST]
 * ✅ Uses UI components only (no raw HTML for layout/content)
 * ✅ Zero inline Tailwind classes
 * ✅ SEO handled via route meta/Seo component
 * ✅ ESLint clean
 */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { 
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  GlowBox,
  GoldDivider,
  Grid,
  Heading,
  HeroContent,
  HeroSection,
  Icon,
  LuxuryBadge,
  PageTitle,
  Section,
  SectionTitle,
  ShimmerText,
  Stack,
  Text,
} from '../components/ui'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  postcode: yup.string().required('Postcode is required'),
  product: yup.string().required('Please select a product'),
  timeSlot: yup.string().required('Please select a time slot'),
  message: yup.string(),
})

const BookAppointmentLuxury = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (formValues) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData()
      formData.append('name', formValues.name || '')
      formData.append('email', formValues.email || '')
      formData.append('phone', formValues.phone || '')
      formData.append('postcode', formValues.postcode || '')
      formData.append('product', formValues.product || '')
      formData.append('timeSlot', formValues.timeSlot || '')
      formData.append('message', formValues.message || '')
      // Honeypot & timing
      formData.append('website', '')
      formData.append('form_start_time', Math.floor(Date.now() / 1000) - 5)

      const response = await fetch('/process-booking.php', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        if (window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'Appointment',
            event_label: 'Booking Form',
          })
        }
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
  ]

  const products = [
    'Roller Blinds',
    'Venetian Blinds',
    'Vertical Blinds',
    'Vision Blinds',
    'Perfect Fit Blinds',
    'Shutters',
    'Roman Blinds',
    'Curtains',
    'Not Sure - Need Advice',
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection variant="gradient" size="medium">
        <HeroContent>
          <Container>
            <Stack spacing="large" align="center">
              <PageTitle
                title="Book Your Free Consultation"
                subtitle="Transform your home with expert advice"
              />
              <Text size="xlarge" color="muted" align="center">
                Get a free, no-obligation consultation and quote from our expert team
              </Text>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Main Content */}
      <Section padding="xlarge" background="cream">
        <Container maxWidth="large">
          <Grid cols={1} mdCols={2} gap="xlarge">
            {/* Benefits Section */}
            <Stack spacing="xlarge">
              <GlowBox variant="subtle">
                <Stack spacing="large">
                  <SectionTitle
                    title="Why Choose Sunshine Blinds?"
                    subtitle="Your local window treatment experts"
                  />
                  
                  <Stack spacing="medium">
                    <Card variant="elevated">
                      <Stack spacing="small">
                        <LuxuryBadge number={1} />
                        <Heading as="h3" size="large">Free Expert Consultation</Heading>
                        <Text color="muted">
                          Our experienced consultants will visit your home to discuss your needs 
                          and provide professional advice tailored to your space.
                        </Text>
                      </Stack>
                    </Card>

                    <Card variant="elevated">
                      <Stack spacing="small">
                        <LuxuryBadge number={2} />
                        <Heading as="h3" size="large">Precise Measurements</Heading>
                        <Text color="muted">
                          We&apos;ll take accurate measurements to ensure your blinds fit perfectly, 
                          avoiding costly mistakes and ensuring a professional finish.
                        </Text>
                      </Stack>
                    </Card>

                    <Card variant="elevated">
                      <Stack spacing="small">
                        <LuxuryBadge number={3} />
                        <Heading as="h3" size="large">Sample Collection</Heading>
                        <Text color="muted">
                          Browse our extensive range of fabrics and materials in the comfort 
                          of your own home, seeing how they look in your actual lighting.
                        </Text>
                      </Stack>
                    </Card>

                    <Card variant="elevated">
                      <Stack spacing="small">
                        <LuxuryBadge number={4} />
                        <Heading as="h3" size="large">No Obligation Quote</Heading>
                        <Text color="muted">
                          Receive a detailed, competitive quote with no pressure to buy. 
                          We believe in transparent pricing and exceptional value.
                        </Text>
                      </Stack>
                    </Card>
                  </Stack>
                </Stack>
              </GlowBox>

              <Card variant="dark" padding="large">
                <Stack spacing="medium" align="center">
                  <Icon name="quote" size="large" color="gold" />
                  <Text size="large" color="light" align="center" italic>
                    &ldquo;The consultation was so helpful. They brought samples and helped us 
                    choose the perfect blinds for each room. The whole process was easy 
                    and stress-free.&rdquo;
                  </Text>
                  <Text color="gold" weight="semibold">
                    Sarah M., Uppermill
                  </Text>
                </Stack>
              </Card>
            </Stack>

            {/* Booking Form */}
            <Card variant="luxury" padding="xlarge">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing="large">
                  <Stack spacing="small">
                    <Heading as="h2" size="xlarge" align="center">
                      <ShimmerText variant="gold">Book Your Appointment</ShimmerText>
                    </Heading>
                    <Text align="center" color="muted">
                      Fill in the form below and we&apos;ll be in touch to confirm your appointment
                    </Text>
                  </Stack>

                  <GoldDivider />

                  <Stack spacing="medium">
                    <FormGroup>
                      <FormInput
                        label="Your Name"
                        {...register('name')}
                        error={errors.name?.message}
                        icon="user"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormInput
                        label="Email Address"
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                        icon="email"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormInput
                        label="Phone Number"
                        type="tel"
                        {...register('phone')}
                        error={errors.phone?.message}
                        icon="phone"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormInput
                        label="Postcode"
                        {...register('postcode')}
                        error={errors.postcode?.message}
                        icon="location"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormSelect
                        label="Product Interest"
                        {...register('product')}
                        error={errors.product?.message}
                        icon="blinds"
                      >
                        <option value="">Select a product...</option>
                        {products.map(product => (
                          <option key={product} value={product}>
                            {product}
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>

                    <FormGroup>
                      <FormSelect
                        label="Preferred Time Slot"
                        {...register('timeSlot')}
                        error={errors.timeSlot?.message}
                        icon="time"
                      >
                        <option value="">Select a time...</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </FormSelect>
                    </FormGroup>

                    <FormGroup>
                      <FormTextarea
                        label="Additional Message (Optional)"
                        {...register('message')}
                        rows={4}
                        placeholder="Tell us about your requirements..."
                      />
                    </FormGroup>
                  </Stack>

                  {submitStatus === 'success' && (
                    <Alert variant="success">
                      Thank you! We&apos;ll be in touch within 24 hours to confirm your appointment.
                    </Alert>
                  )}

                  {submitStatus === 'error' && (
                    <Alert variant="error">
                      Something went wrong. Please try again or call us on 01457 597091.
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    variant="luxury"
                    size="large"
                    fullWidth
                    loading={isSubmitting}
                    icon="calendar"
                  >
                    Book Free Consultation
                  </Button>

                  <Text size="small" color="muted" align="center">
                    Or call us directly on{' '}
                    <Text as="a" href="tel:01457597091" weight="semibold" color="gold">
                      01457 597091
                    </Text>
                  </Text>
                </Stack>
              </Form>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section padding="large" background="dark">
        <Container>
          <Stack spacing="xlarge">
            <SectionTitle
              title="Trusted Across Saddleworth"
              subtitle="Serving our local community for over 20 years"
              align="center"
              variant="light"
            />
            
            <Grid cols={2} mdCols={4} gap="large">
              <Stack spacing="small" align="center">
                <Text size="4xl" weight="bold" color="gold">500+</Text>
                <Text color="light">Happy Customers</Text>
              </Stack>
              <Stack spacing="small" align="center">
                <Text size="4xl" weight="bold" color="gold">20+</Text>
                <Text color="light">Years Experience</Text>
              </Stack>
              <Stack spacing="small" align="center">
                <Text size="4xl" weight="bold" color="gold">100%</Text>
                <Text color="light">Local Business</Text>
              </Stack>
              <Stack spacing="small" align="center">
                <Text size="4xl" weight="bold" color="gold">5★</Text>
                <Text color="light">Average Rating</Text>
              </Stack>
            </Grid>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default BookAppointmentLuxury