import React from 'react'
import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Card,
  Icon,
  Stack,
  Flex,
  Button,
  Link
} from '../components/ui'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us Direct',
      content: '01457 597091',
      detail: 'Mon-Fri: 9am-5pm | Sat: 10am-4pm',
      action: 'tel:01457597091'
    },
    {
      icon: 'email',
      title: 'Email Us',
      content: 'info@sunshineblinds.co.uk',
      detail: 'We\'ll respond within 24 hours',
      action: 'mailto:info@sunshineblinds.co.uk'
    },
    {
      icon: 'location',
      title: 'Visit Our Showroom',
      content: 'Sunshine Blinds, Saddleworth',
      detail: 'See our full range in person',
      action: null
    }
  ]

  return (
    <>
      {/* Hero Section - Dark theme to match products */}
      <Section background="dark" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <Heading as="h1" size="4xl" mdSize="5xl" align="center">
              Get in Touch
              <Text as="span" color="gold" className="block text-2xl md:text-3xl mt-2">
                We'd Love to Hear From You
              </Text>
            </Heading>
            
            <Text size="xlarge" color="light" align="center" className="max-w-2xl">
              Whether you need a quick quote, expert advice, or want to book a consultation, 
              we're here to help transform your windows.
            </Text>
          </Stack>
        </Container>
      </Section>

      {/* Contact Methods - Darker background */}
      <Section background="darker" padding="large">
        <Container>
          <Grid cols={1} mdCols={3} gap="large">
            {contactMethods.map((method, index) => (
              <Card key={index} variant="elevated" hover="lift" padding="large">
                <Stack spacing="medium" align="center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <Icon name={method.icon} size="large" className="text-brand-gold" />
                  </div>
                  <Heading as="h3" size="xl" align="center">{method.title}</Heading>
                  {method.action ? (
                    <Button
                      as="a"
                      href={method.action}
                      variant="ghost"
                      size="medium"
                    >
                      {method.content}
                    </Button>
                  ) : (
                    <Text weight="semibold" align="center">{method.content}</Text>
                  )}
                  <Text size="small" color="muted" align="center">{method.detail}</Text>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Contact Form Section - Dark background */}
      <Section background="dark" padding="large">
        <Container maxWidth="large">
          <Grid cols={1} mdCols={2} gap="xlarge">
            {/* Form */}
            <Card variant="elevated" padding="xlarge">
              <Stack spacing="large">
                <Stack spacing="medium">
                  <Heading as="h2" size="3xl">Send Us a Message</Heading>
                  <Text color="light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </Text>
                </Stack>
                <ContactForm />
              </Stack>
            </Card>

            {/* Additional Info */}
            <Stack spacing="xlarge">
              {/* Service Areas */}
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Heading as="h3" size="2xl" color="gold">We Cover All of Saddleworth</Heading>
                  <Text color="light">
                    Including Uppermill, Diggle, Delph, Greenfield, Dobcross, Lydgate, 
                    Grotton, Lees, Springhead, Grasscroft, Friezland, and Denshaw.
                  </Text>
                  <Grid cols={2} gap="small" className="mt-4">
                    {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate'].map((area) => (
                      <Flex key={area} align="center" gap="small">
                        <Icon name="check" size="small" className="text-brand-gold" />
                        <Text size="small">{area}</Text>
                      </Flex>
                    ))}
                  </Grid>
                </Stack>
              </Card>

              {/* Why Choose Us */}
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Heading as="h3" size="2xl" color="gold">Why Contact Us?</Heading>
                  <Stack spacing="small">
                    <Flex align="start" gap="small">
                      <Icon name="check" size="small" className="text-brand-gold mt-1" />
                      <Text color="light">Free, no-obligation quotes</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="check" size="small" className="text-brand-gold mt-1" />
                      <Text color="light">Expert advice from local specialists</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="check" size="small" className="text-brand-gold mt-1" />
                      <Text color="light">Evening and weekend appointments</Text>
                    </Flex>
                    <Flex align="start" gap="small">
                      <Icon name="check" size="small" className="text-brand-gold mt-1" />
                      <Text color="light">20+ years serving Saddleworth</Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Card>

              {/* Quick Links */}
              <Card variant="elevated" padding="large">
                <Stack spacing="medium">
                  <Heading as="h3" size="xl">Quick Links</Heading>
                  <Stack spacing="small">
                    <Link to="/book-appointment" variant="nav">
                      → Book a Free Consultation
                    </Link>
                    <Link to="/gallery" variant="nav">
                      → View Our Gallery
                    </Link>
                    <Link to="/vision-blinds" variant="nav">
                      → Popular Vision Blinds
                    </Link>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section - Gradient like products */}
      <Section background="gradient" padding="large">
        <Container>
          <Stack spacing="large" align="center">
            <Heading as="h2" size="3xl" mdSize="4xl" align="center">
              Ready to Transform Your Windows?
            </Heading>
            <Text size="xlarge" color="light" align="center" className="max-w-2xl">
              Don't wait - get in touch today for your free consultation and quote.
            </Text>
            
            <Flex direction="column" smDirection="row" gap="medium">
              <Button
                as="a"
                href="tel:01457597091"
                variant="primary"
                size="xlarge"
                iconLeft={<Icon name="phone" />}
              >
                Call Now: 01457 597091
              </Button>
              <Button
                as={Link}
                to="/book-appointment"
                variant="secondary"
                size="xlarge"
              >
                Book Online
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Section>
    </>
  )
}

export default Contact