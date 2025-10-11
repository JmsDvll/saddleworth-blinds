import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Section,
  Container,
  Stack,
  Heading,
  Text,
  Card,
  Icon,
  Button,
  Box,
  Flex,
  GoldDivider,
  ShimmerText,
  GlowBox
} from './ui'

const FAQSectionLuxury = ({ faqs = [], title = 'Frequently Asked Questions', subtitle }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section background="dark" padding="xlarge">
      <Container>
        <Stack spacing="xlarge">
          {/* Header */}
          <Stack spacing="medium" align="center">
            <Heading size="2xl" color="gold" align="center">
              <ShimmerText variant="luxury">
                {title}
              </ShimmerText>
            </Heading>
            {subtitle && (
              <Text size="large" color="light" align="center">
                {subtitle}
              </Text>
            )}
            <GoldDivider variant="luxury" size="medium" />
          </Stack>

          {/* FAQ Items */}
          <Stack spacing="medium">
            {faqs.map((faq, index) => (
              <GlowBox key={index} variant="subtle" intensity="low">
                <Card
                  variant="luxury"
                  hover="glow"
                  padding="none"
                >
                  <Button
                    onClick={() => toggleQuestion(index)}
                    variant="ghost"
                    fullWidth
                    align="left"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <Flex align="start" justify="between" gap="medium">
                      <Heading size="base" color="gold" flex="1">
                        {faq.question}
                      </Heading>
                      <Box flexShrink="0" marginTop="1">
                        <motion.div
                          animate={{ rotate: openIndex === index ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <Icon 
                            name="plus" 
                            size="medium" 
                            color="gold"
                          />
                        </motion.div>
                      </Box>
                    </Flex>
                  </Button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <Box padding="large" paddingTop="none">
                          <Box borderTop="gold" paddingTop="medium">
                            <Text color="light" leading="relaxed">
                              {faq.answer}
                            </Text>
                          </Box>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </GlowBox>
            ))}
          </Stack>

          {/* CTA */}
          <Stack spacing="medium" align="center">
            <GoldDivider variant="simple" size="small" />
            <Text size="large" color="light" align="center">
              Still have questions?
            </Text>
            <Flex wrap gap="medium" justify="center">
              <Button 
                to="/contact"
                variant="luxury"
                iconLeft={<Icon name="mail" />}
              >
                Contact Us
              </Button>
              <Button 
                href="tel:01457597091"
                variant="outline"
                iconLeft={<Icon name="phone" />}
              >
                Call 01457 597091
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}

export default FAQSectionLuxury