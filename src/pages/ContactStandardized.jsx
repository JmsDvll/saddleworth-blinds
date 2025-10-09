import React from 'react'
import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Card,
  Icon,
  Link,
  Stack,
  Flex,
  Badge
} from '../components/ui'
import ContactForm from '../components/ContactForm'

const ContactStandardized = () => {
  const areas = [
    'Uppermill', 'Diggle', 'Delph', 'Greenfield', 
    'Dobcross', 'Lydgate', 'Denshaw', 'Friezland', 
    'Grasscroft', 'Grotton', 'Springhead', 'Lees'
  ]

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Call Us',
      primary: '01457 597091',
      secondary: 'Mon-Fri: 9am-5pm | Saturday: 10am-4pm',
      href: 'tel:01457597091',
      linkText: null
    },
    {
      icon: 'email',
      title: 'Email Us',
      primary: 'sales@saddleworthblinds.co.uk',
      secondary: null,
      href: 'mailto:sales@saddleworthblinds.co.uk',
      linkText: null
    },
    {
      icon: 'mapPin',
      title: 'Visit Our Showroom',
      primary: null,
      secondary: ['6 Rochdale Road', 'Shaw, Oldham', 'OL2 8AD'],
      href: 'https://maps.google.com/maps?q=6+Rochdale+Road,+Shaw,+Oldham+OL2+8AD',
      linkText: 'Get Directions →'
    }
  ]

  return (
    <Section padding="large">
      <Container size="large">
        <Stack spacing="xlarge">
          {/* Page Header */}
          <Stack spacing="large">
            <Heading.H1>Contact Us</Heading.H1>
            <Text.Lead>
              Get in touch with Saddleworth's trusted window blind specialists. 
              Call, email, or visit our Shaw showroom for expert advice and free quotes.
            </Text.Lead>
          </Stack>

          {/* Main Content Grid */}
          <Grid cols={2} gap="xlarge">
            {/* Contact Form */}
            <Card variant="elevated">
              <Stack spacing="large">
                <Heading.H2>Send Us a Message</Heading.H2>
                <ContactForm />
              </Stack>
            </Card>

            {/* Contact Information */}
            <Stack spacing="large">
              <Heading.H2>Get In Touch</Heading.H2>
              
              {/* Contact Methods */}
              <Stack spacing="medium">
                {contactMethods.map((method, index) => (
                  <Card key={index} variant="default">
                    <Stack spacing="small">
                      <Flex gap="small" align="center">
                        <Icon name={method.icon} size="medium" color="gold" />
                        <Heading.H3 size="h5">{method.title}</Heading.H3>
                      </Flex>
                      
                      {method.primary && method.href ? (
                        <Link 
                          href={method.href} 
                          variant="default" 
                          className="text-lg font-semibold"
                        >
                          {method.primary}
                        </Link>
                      ) : method.primary ? (
                        <Text size="large" weight="semibold">
                          {method.primary}
                        </Text>
                      ) : null}
                      
                      {method.secondary && typeof method.secondary === 'string' ? (
                        <Text size="small" color="muted">
                          {method.secondary}
                        </Text>
                      ) : method.secondary && Array.isArray(method.secondary) ? (
                        <Text color="light">
                          {method.secondary.map((line, idx) => (
                            <React.Fragment key={idx}>
                              {line}
                              {idx < method.secondary.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </Text>
                      ) : null}
                      
                      {method.linkText && (
                        <Link 
                          href={method.href} 
                          external 
                          variant="default"
                          size="small"
                        >
                          {method.linkText}
                        </Link>
                      )}
                    </Stack>
                  </Card>
                ))}
              </Stack>

              {/* Areas We Cover */}
              <Card variant="default">
                <Stack spacing="medium">
                  <Heading.H3>Areas We Cover</Heading.H3>
                  <Grid cols={2} gap="small">
                    {areas.map((area) => (
                      <Link
                        key={area}
                        to={`/areas/${area.toLowerCase()}`}
                        variant="subtle"
                      >
                        <Flex gap="small" align="center">
                          <Icon name="checkCircle" size="small" />
                          <Text>{area}</Text>
                        </Flex>
                      </Link>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Stack>
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}

export default ContactStandardized