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
              <Text size="large" color="light" align="center" className="max-w-2xl">
                {subtitle}
              </Text>
            )}
            <GoldDivider variant="luxury" size="medium" />
          </Stack>

          {/* FAQ Items */}
          <Stack spacing="medium" className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <GlowBox key={index} variant="subtle" intensity="low">
                <Card
                  variant="luxury"
                  hover="glow"
                  padding="none"
                  className="overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Heading size="base" color="gold" className="flex-1">
                        {faq.question}
                      </Heading>
                      <div className="flex-shrink-0 mt-1">
                        <motion.div
                          animate={{ rotate: openIndex === index ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <Icon 
                            name="plus" 
                            size="medium" 
                            className="text-brand-gold"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-brand-gold/20 pt-4">
                            <Text color="light" leading="relaxed">
                              {faq.answer}
                            </Text>
                          </div>
                        </div>
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
            <div className="flex flex-wrap gap-4 justify-center">
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
            </div>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}

export default FAQSectionLuxury