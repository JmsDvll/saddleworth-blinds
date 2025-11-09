import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Alert,
  Button,
  Card,
  Flex,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  GlowBox,
  Grid,
  Heading,
  Icon,
  LuxuryIcon,
  ShimmerText,
  Stack,
  Text,
} from './ui'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  postcode: yup.string().required('Postcode is required'),
  service: yup.string().required('Please select a service'),
  rooms: yup.string().required('Please specify number of rooms'),
  message: yup.string(),
}).required()

const ContactHeader = ({ variant, showHeader }) => {
  if (!showHeader) return null
  return (
    <Stack spacing="small" align="center">
      <Heading size="2xl" color="gold" align="center">
        <ShimmerText variant="luxury">
          Get Your Free Quote
        </ShimmerText>
      </Heading>
      <Text size="large" color={variant === 'luxury' ? 'light' : 'dark'} align="center">
        Complete the form below and we&apos;ll contact you within 24 hours
      </Text>
    </Stack>
  )
}

const StatusAlerts = ({ submitStatus }) => (
  <>
    {submitStatus === 'success' && (
      <Alert variant="success">
        <Flex gap="small" align="center">
          <Icon name="checkCircle" />
          <Text weight="semibold">Thank you! We&apos;ll be in touch soon.</Text>
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
  </>
)

const PersonalDetailsSection = ({ register, errors }) => (
  <Stack spacing="medium">
    <Heading size="lg">Your Details</Heading>
    <Grid cols={2} gap="medium">
      <FormGroup>
        <FormInput label="Full Name" placeholder="John Smith" error={errors.name?.message} {...register('name')} required />
      </FormGroup>
      <FormGroup>
        <FormInput label="Email Address" type="email" placeholder="john@example.com" error={errors.email?.message} {...register('email')} required />
      </FormGroup>
      <FormGroup>
        <FormInput label="Phone Number" type="tel" placeholder="07123 456789" error={errors.phone?.message} {...register('phone')} required />
      </FormGroup>
      <FormGroup>
        <FormInput label="Postcode" placeholder="OL3 5AA" error={errors.postcode?.message} {...register('postcode')} required />
      </FormGroup>
    </Grid>
  </Stack>
)

const RequirementsSection = ({ register, errors, services, roomOptions }) => (
  <Stack spacing="medium">
    <Heading size="lg">Your Requirements</Heading>
    <Grid cols={2} gap="medium">
      <FormGroup>
        <FormSelect label="Service Required" error={errors.service?.message} {...register('service')} required>
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </FormSelect>
      </FormGroup>
      <FormGroup>
        <FormSelect label="Number of Windows" error={errors.rooms?.message} {...register('rooms')} required>
          <option value="">Select...</option>
          {roomOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </FormSelect>
      </FormGroup>
    </Grid>
    <FormGroup>
      <FormTextarea label="Additional Information (Optional)" placeholder="Tell us about your project, specific requirements, or preferred appointment times..." rows={4} {...register('message')} />
    </FormGroup>
  </Stack>
)

const BenefitsCard = ({ variant }) => (
  <Card variant={variant === 'luxury' ? 'dark' : 'default'} padding="medium">
    <Grid cols={4} gap="small">
      {[
        { icon: 'home', text: 'Free Home Visit' },
        { icon: 'ruler', text: 'Free Measuring' },
        { icon: 'currency', text: 'Free Quote' },
        { icon: 'shield', text: '5 Year Guarantee' },
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
)

const SubmitSection = ({ isSubmitting }) => (
  <Stack spacing="small">
    <Button type="submit" variant="luxury" size="large" fullWidth loading={isSubmitting} iconLeft={<Icon name="mail" />}>
      {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
    </Button>
    <Text size="small" color="muted" align="center">
      By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to provide a quote.
    </Text>
  </Stack>
)

const ContactFormLuxury = ({ variant = 'default', showHeader = true }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
      formData.append('subject', formValues.service || 'General Enquiry')
      formData.append('message', formValues.message || '')
      // Honeypot & timing
      formData.append('website', '')
      formData.append('form_start_time', Math.floor(Date.now() / 1000) - 5)

      const response = await fetch('/process-contact.php', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        if (window.gtag) {
          window.gtag('event', 'form_submission', {
            'event_category': 'Contact',
            'event_label': 'Contact Form',
          })
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (_err) {
      console.error('Form submission error:', _err)
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
    'Not Sure - Need Advice',
  ]

  const roomOptions = [
    '1 Window',
    '2-3 Windows',
    '4-5 Windows',
    '6-10 Windows',
    'Whole House',
    'Commercial Property',
  ]

  return (
    <GlowBox variant={variant === 'luxury' ? 'luxury' : 'subtle'} padding="medium">
      <Card variant={variant === 'luxury' ? 'luxury' : 'elevated'} padding="large">
        <Stack spacing="large">
          <ContactHeader variant={variant} showHeader={showHeader} />

          <StatusAlerts submitStatus={submitStatus} />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="large">
              <Stack spacing="medium">
                <PersonalDetailsSection register={register} errors={errors} />
                <RequirementsSection register={register} errors={errors} services={services} roomOptions={roomOptions} />
              </Stack>

              <BenefitsCard variant={variant} />

              <SubmitSection isSubmitting={isSubmitting} />
            </Stack>
          </Form>
        </Stack>
      </Card>
    </GlowBox>
  )
}

export default ContactFormLuxury