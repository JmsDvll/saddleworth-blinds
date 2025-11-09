import React from 'react'
/**
 * [STANDARDIZATION CHECKLIST]
 * ✅ Uses UI components only (no raw HTML for layout/content)
 * ✅ Zero inline Tailwind classes
 * ✅ SEO handled via route meta/Seo component
 * ✅ ESLint clean
 */
import { 
  Container, 
  Heading, 
  List, 
  Section, 
  Stack,
  Text,
} from '../components/ui'

const TermsConditions = () => {
  return (
    <Section padding="large">
      <Container maxWidth="medium">
        <Stack spacing="xlarge">
          <Stack spacing="medium">
            <Heading as="h1" size="4xl" mdSize="5xl">Terms & Conditions</Heading>
            <Text color="light">
              <Text as="span" weight="medium">Last updated:</Text> January 2025
            </Text>
          </Stack>

          <Stack spacing="large">
            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Acceptance of Terms</Heading>
              <Text color="light">
                By accessing and using Sunshine Blinds Saddleworth&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Services</Heading>
              <Text color="light">
                Sunshine Blinds Saddleworth provides window blind consultation, measurement, supply, and installation services. We offer made-to-measure window treatments including roller blinds, venetian blinds, vertical blinds, vision blinds, perfect fit blinds, shutters, roman blinds, and curtains.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Quotations and Pricing</Heading>
              <List as="ul" spacing="small">
                <List.Item><Text color="light">All quotations are valid for 30 days from the date of issue</Text></List.Item>
                <List.Item><Text color="light">Prices include professional measurement and installation</Text></List.Item>
                <List.Item><Text color="light">Additional charges may apply for complex installations or difficult access</Text></List.Item>
                <List.Item><Text color="light">We reserve the right to amend quotations if specifications change</Text></List.Item>
              </List>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Appointments and Consultations</Heading>
              <List as="ul" spacing="small">
                <List.Item><Text color="light">Free home consultations are available throughout Saddleworth</Text></List.Item>
                <List.Item><Text color="light">Appointments are subject to availability</Text></List.Item>
                <List.Item><Text color="light">We require 24 hours notice for cancellations</Text></List.Item>
                <List.Item><Text color="light">Late cancellations may incur charges</Text></List.Item>
              </List>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Installation</Heading>
              <List as="ul" spacing="small">
                <List.Item><Text color="light">Installation is carried out by our trained professionals</Text></List.Item>
                <List.Item><Text color="light">We take responsibility for accurate measuring</Text></List.Item>
                <List.Item><Text color="light">Any measuring errors will be corrected at no additional cost</Text></List.Item>
                <List.Item><Text color="light">Normal installation does not include electrical work or building modifications</Text></List.Item>
              </List>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Warranties</Heading>
              <List as="ul" spacing="small">
                <List.Item><Text color="light">All products come with comprehensive warranties</Text></List.Item>
                <List.Item><Text color="light">Installation is warranted for 12 months</Text></List.Item>
                <List.Item><Text color="light">Product warranties vary by manufacturer (typically 1-5 years)</Text></List.Item>
                <List.Item><Text color="light">Warranties do not cover misuse or accidental damage</Text></List.Item>
              </List>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Liability</Heading>
              <Text color="light">
                Sunshine Blinds Saddleworth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services provided.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Cancellation Policy</Heading>
              <List as="ul" spacing="small">
                <List.Item><Text color="light">Orders can be cancelled within 48 hours without charge</Text></List.Item>
                <List.Item><Text color="light">Cancellations after 48 hours may incur charges for work completed</Text></List.Item>
                <List.Item><Text color="light">Made-to-measure products cannot be cancelled once manufacturing begins</Text></List.Item>
                <List.Item><Text color="light">Deposits are non-refundable after manufacturing commences</Text></List.Item>
              </List>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Privacy</Heading>
              <Text color="light">
                Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Governing Law</Heading>
              <Text color="light">
                These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Changes to Terms</Heading>
              <Text color="light">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Contact Information</Heading>
              <Text color="light">
                If you have any questions about these Terms, please contact us at:
              </Text>
              <Stack spacing="small">
                <Text color="light">
                  <Text as="span" weight="medium">Phone:</Text> 01457 597091
                </Text>
                <Text color="light">
                  <Text as="span" weight="medium">Email:</Text> info@sunshineblinds.co.uk
                </Text>
                <Text color="light">
                  <Text as="span" weight="medium">Address:</Text> Sunshine Blinds, Saddleworth, Oldham
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}

export default TermsConditions