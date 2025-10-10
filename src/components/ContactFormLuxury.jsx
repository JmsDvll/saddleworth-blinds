import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Stack,
  Grid,
  Button,
  Alert,
  Card,
  Heading,
  Text,
  FormInput,
  FormSelect,
  FormTextarea,
  FormGroup,
  Icon,
  LuxuryIcon,
  GlowBox,
  ShimmerText,
  Flex
} from './ui'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  postcode: yup.string().required('Postcode is required'),
  service: yup.string().required('Please select a service'),
  rooms: yup.string().required('Please specify number of rooms'),
  message: yup.string()
}).required()

const ContactFormLuxury = ({ variant = 'default', showHeader = true }) => {
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
      const response = await fetch('/process-contact.php', {
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
          window.gtag('event', 'form_submission', {
            'event_category': 'Contact',
            'event_label': 'Contact Form'
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

  return (
    <GlowBox variant={variant === 'luxury' ? 'luxury' : 'subtle'} padding="medium">
      <Card variant={variant === 'luxury' ? 'luxury' : 'elevated'} padding="large">
        <Stack spacing="large">
          {showHeader && (
            <Stack spacing="small" align="center">
              <Heading size="2xl" color="gold" align="center">
                <ShimmerText variant="luxury">
                  Get Your Free Quote
                </ShimmerText>
              </Heading>
              <Text size="large" color={variant === 'luxury' ? 'light' : 'dark'} align="center">
                Complete the form below and we'll contact you within 24 hours
              </Text>
            </Stack>
          )}

          {submitStatus === 'success' && (
            <Alert variant="success">
              <Flex gap="small" align="center">
                <Icon name="checkCircle" />
                <Text weight="semibold">Thank you! We'll be in touch soon.</Text>
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
            <Stack spacing="large">
              {/* Personal Details */}
              <Stack spacing="medium">
                <Heading size="lg" color={variant === 'luxury' ? 'gold' : 'dark'}>
                  Your Details
                </Heading>
                
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

              {/* Service Requirements */}
              <Stack spacing="medium">
                <Heading size="lg" color={variant === 'luxury' ? 'gold' : 'dark'}>
                  Your Requirements
                </Heading>
                
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
                </Grid>

                <FormGroup>
                  <FormTextarea
                    label="Additional Information (Optional)"
                    placeholder="Tell us about your project, specific requirements, or preferred appointment times..."
                    rows={4}
                    {...register('message')}
                  />
                </FormGroup>
              </Stack>

              {/* Benefits */}
              <Card variant={variant === 'luxury' ? 'dark' : 'default'} padding="medium">
                <Grid cols={4} gap="small">
                  {[
                    { icon: 'home', text: 'Free Home Visit' },
                    { icon: 'ruler', text: 'Free Measuring' },
                    { icon: 'currency', text: 'Free Quote' },
                    { icon: 'shield', text: '5 Year Guarantee' }
                  ].map((benefit, index) => (
                    <Stack key={index} spacing="small" align="center">
                      <LuxuryIcon variant="simple" size="small">
                        <Icon name={benefit.icon} />
                      </LuxuryIcon>
                      <Text size="small" align="center">{benefit.text}</Text>
                    </Stack>
                  ))}
                </Grid>
              </Card>

              {/* Submit Button */}
              <Stack spacing="small">
                <Button
                  type="submit"
                  variant="luxury"
                  size="large"
                  fullWidth
                  loading={isSubmitting}
                  iconLeft={<Icon name="mail" />}
                >
                  {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
                </Button>
                
                <Text size="small" color="muted" align="center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll only use your information to provide a quote.
                </Text>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Card>
    </GlowBox>
  )
}

export default ContactFormLuxury