import React, { useState } from 'react'
import {
  Section,
  Container,
  Heading,
  Text,
  Button,
  Card,
  Stack,
  Icon,
  Center,
  Flex,
  Link
} from './ui'

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our blinds and shutters",
  faqs = [],
  className = ""
}) => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <Section padding="large" className={className}>
      <Container maxWidth="medium">
        <Stack spacing="xlarge">
          {/* Header */}
          <Center>
            <Stack spacing="medium" align="center">
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
              <Heading as="h2" size="4xl" lgSize="5xl" color="gradient">
                {title}
              </Heading>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full"></div>
              {description && (
                <Text size="large" color="light" align="center" className="max-w-2xl">
                  {description}
                </Text>
              )}
            </Stack>
          </Center>

          {/* FAQ Items */}
          <Stack spacing="medium">
            {faqs.map((faq, index) => (
              <Card key={index} variant="elevated" padding="none">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                >
                  <Heading as="h3" size="lg" className="pr-4">
                    {faq.question}
                  </Heading>
                  <Icon
                    name="chevronDown"
                    size="small"
                    className={`text-brand-gold transition-transform duration-200 flex-shrink-0 ${
                      openItems[index] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openItems[index] && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <Text color="light" leading="relaxed">
                        {faq.answer}
                      </Text>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </Stack>

          {/* CTA Section */}
          <Card variant="highlight" padding="xlarge">
            <Center>
              <Stack spacing="large" align="center">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                  <Icon name="question" size="xlarge" className="text-gray-900" />
                </div>
                
                <Stack spacing="medium" align="center">
                  <Heading as="h3" size="2xl" color="gold">
                    Still Have Questions?
                  </Heading>
                  <Text size="large" color="light" align="center">
                    Our expert team is here to help with any questions about blinds, shutters, or window treatments for your Saddleworth home.
                  </Text>
                </Stack>

                <Flex direction="column" smDirection="row" gap="medium">
                  <Button
                    as={Link}
                    to="/book-appointment"
                    variant="primary"
                    size="xlarge"
                  >
                    Book Free Consultation
                  </Button>
                  <Button
                    as={Link}
                    to="/contact"
                    variant="secondary"
                    size="xlarge"
                  >
                    Contact Us
                  </Button>
                </Flex>
              </Stack>
            </Center>
          </Card>
        </Stack>
      </Container>
    </Section>
  )
}

export default FAQSection