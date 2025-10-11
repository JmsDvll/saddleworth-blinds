import React from 'react'
import {
  Section,
  Container,
  Grid,
  Stack,
  Heading,
  Text,
  Card,
  Icon,
  Link,
  Flex,
  LuxuryIcon,
  GoldDivider,
  ShimmerText,
  GlowBox,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroOverlay,
  Button
} from '../components/ui'
import ContactFormLuxury from '../components/ContactFormLuxury'

const ContactLuxury = () => {
  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us',
      primary: '01457 597091',
      secondary: 'Mon-Fri 9am-5:30pm, Sat 10am-4pm',
      action: 'tel:01457597091',
      actionText: 'Call Now'
    },
    {
      icon: 'mail',
      title: 'Email Us',
      primary: 'info@saddleworthblinds.co.uk',
      secondary: 'We\'ll respond within 24 hours',
      action: 'mailto:info@saddleworthblinds.co.uk',
      actionText: 'Send Email'
    },
    {
      icon: 'location',
      title: 'Visit Us',
      primary: 'Saddleworth Blinds',
      secondary: 'Serving all of Greater Manchester',
      action: '/areas/uppermill',
      actionText: 'View Service Areas'
    }
  ]

  const reasons = [
    {
      icon: 'star',
      title: 'Family Business',
      description: 'Trusted local service since 1979 with thousands of happy customers'
    },
    {
      icon: 'shield',
      title: '5 Year Guarantee',
      description: 'Complete peace of mind with our comprehensive warranty'
    },
    {
      icon: 'currency',
      title: 'Best Price Promise',
      description: 'Competitive pricing without compromising on quality'
    },
    {
      icon: 'truck',
      title: 'Free Services',
      description: 'Free measuring, quote, and professional installation'
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
                  Let's Transform Your Windows
                </ShimmerText>
              </HeroTitle>
              <Text size="xlarge" color="light" align="center">
                Get in touch today for your free consultation and discover 
                the perfect window solutions for your home
              </Text>
            </Stack>
          </Container>
        </HeroContent>
      </HeroSection>

      {/* Contact Methods */}
      <Section background="cream" padding="large">
        <Container>
          <Stack spacing="xlarge">
            <Stack spacing="medium" align="center">
              <Heading size="2xl" color="dark" align="center">
                Choose How to Reach Us
              </Heading>
              <Text size="large" color="muted" align="center">
                We're here to help, whatever way suits you best
              </Text>
            </Stack>

            <Grid cols={3} gap="large">
              {contactMethods.map((method, index) => (
                <GlowBox key={index} variant="subtle" intensity="low">
                  <Card variant="elevated" hover="lift" padding="large">
                    <Stack spacing="medium" align="center">
                      <LuxuryIcon variant="luxury" size="large">
                        <Icon name={method.icon} />
                      </LuxuryIcon>
                      <Heading size="lg" color="dark" align="center">
                        {method.title}
                      </Heading>
                      <Stack spacing="small" align="center">
                        <Text weight="semibold" size="large" align="center">
                          {method.primary}
                        </Text>
                        <Text size="small" color="muted" align="center">
                          {method.secondary}
                        </Text>
                      </Stack>
                      {method.action.includes('tel:') ? (
                        <Button
                          href={method.action}
                          variant="primary"
                          size="small"
                        >
                          {method.actionText}
                        </Button>
                      ) : method.action.includes('mailto:') ? (
                        <Button
                          href={method.action}
                          variant="primary"
                          size="small"
                        >
                          {method.actionText}
                        </Button>
                      ) : (
                        <Button
                          to={method.action}
                          variant="primary"
                          size="small"
                        >
                          {method.actionText}
                        </Button>
                      )}
                    </Stack>
                  </Card>
                </GlowBox>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section background="dark" padding="xlarge">
        <Container>
          <Grid cols={2} gap="xlarge" align="center">
            {/* Form */}
            <div>
              <ContactFormLuxury variant="luxury" />
            </div>

            {/* Why Choose Us */}
            <Stack spacing="large">
              <Stack spacing="medium">
                <Heading size="2xl" color="gold">
                  Why Choose Sunshine Blinds?
                </Heading>
                <Text size="large" color="light">
                  Join thousands of satisfied customers who've discovered 
                  the perfect window solutions with us
                </Text>
              </Stack>

              <Stack spacing="medium">
                {reasons.map((reason, index) => (
                  <Flex key={index} gap="medium" align="start">
                    <LuxuryIcon variant="glow" size="small" className="flex-shrink-0 mt-1">
                      <Icon name={reason.icon} />
                    </LuxuryIcon>
                    <Stack spacing="small">
                      <Text weight="semibold" color="gold">
                        {reason.title}
                      </Text>
                      <Text color="light">
                        {reason.description}
                      </Text>
                    </Stack>
                  </Flex>
                ))}
              </Stack>

              <GoldDivider variant="luxury" size="medium" align="left" />

              {/* Testimonial */}
              <Card variant="glass" padding="large">
                <Stack spacing="medium">
                  <Flex gap="small">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" size="small" className="text-brand-gold" />
                    ))}
                  </Flex>
                  <Text color="light" leading="relaxed">
                    "From the initial consultation to the final installation, 
                    the service was impeccable. Our new shutters have completely 
                    transformed our home!"
                  </Text>
                  <Stack spacing="small">
                    <Text weight="semibold" color="gold">
                      Sarah Thompson
                    </Text>
                    <Text size="small" color="muted">
                      Uppermill • Plantation Shutters
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Container>
      </Section>

      {/* Service Areas */}
      <Section background="gold" padding="medium">
        <Container>
          <Card variant="dark" padding="large">
            <Stack spacing="large" align="center">
              <Stack spacing="small" align="center">
                <Heading size="2xl" color="gold" align="center">
                  Serving All of Saddleworth & Beyond
                </Heading>
                <Text size="large" color="light" align="center">
                  Professional installation across Greater Manchester
                </Text>
              </Stack>
              
              <Grid cols={6} gap="small">
                {['Uppermill', 'Diggle', 'Delph', 'Greenfield', 'Dobcross', 'Lydgate',
                  'Denshaw', 'Friezland', 'Grasscroft', 'Grotton', 'Springhead', 'Lees'].map((area) => (
                  <Link
                    key={area}
                    to={`/areas/${area.toLowerCase()}`}
                    variant="subtle"
                    className="text-center p-2 rounded hover:bg-brand-gold/10 transition-all"
                  >
                    <Text color="light">{area}</Text>
                  </Link>
                ))}
              </Grid>
            </Stack>
          </Card>
        </Container>
      </Section>

      {/* Emergency Contact */}
      <Section background="luxury" padding="large">
        <Container>
          <GlowBox variant="luxury" padding="large">
            <Stack spacing="medium" align="center">
              <LuxuryIcon variant="luxury" size="large">
                <Icon name="phone" />
              </LuxuryIcon>
              <Heading size="xl" color="gold" align="center">
                Need Immediate Assistance?
              </Heading>
              <Text size="large" color="light" align="center">
                Our team is ready to help with urgent requirements
              </Text>
              <Button
                href="tel:01457597091"
                variant="luxury"
                size="large"
                iconLeft={<Icon name="phone" />}
              >
                Call 01457 597091
              </Button>
            </Stack>
          </GlowBox>
        </Container>
      </Section>
    </>
  )
}

export default ContactLuxury