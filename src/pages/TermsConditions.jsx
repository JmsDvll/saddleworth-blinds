import React from 'react'
import { 
  Section, 
  Container, 
  Heading, 
  Text, 
  Stack
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
                By accessing and using Sunshine Blinds Saddleworth's website and services, you accept and agree to be bound by the terms and provision of this agreement. These terms apply to all visitors, users, and others who access or use our services.
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
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">All quotations are valid for 30 days from the date of issue</Text>
                <Text color="light" as="li">Prices include professional measurement and installation</Text>
                <Text color="light" as="li">Additional charges may apply for complex installations or difficult access</Text>
                <Text color="light" as="li">We reserve the right to amend quotations if specifications change</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Appointments and Consultations</Heading>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Free home consultations are available throughout Saddleworth</Text>
                <Text color="light" as="li">Appointments are subject to availability</Text>
                <Text color="light" as="li">We require 24 hours notice for cancellations</Text>
                <Text color="light" as="li">Late cancellations may incur charges</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Installation</Heading>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Installation is carried out by our trained professionals</Text>
                <Text color="light" as="li">We take responsibility for accurate measuring</Text>
                <Text color="light" as="li">Any measuring errors will be corrected at no additional cost</Text>
                <Text color="light" as="li">Normal installation does not include electrical work or building modifications</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Warranties</Heading>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">All products come with comprehensive warranties</Text>
                <Text color="light" as="li">Installation is warranted for 12 months</Text>
                <Text color="light" as="li">Product warranties vary by manufacturer (typically 1-5 years)</Text>
                <Text color="light" as="li">Warranties do not cover misuse or accidental damage</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Liability</Heading>
              <Text color="light">
                Sunshine Blinds Saddleworth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services provided.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Cancellation Policy</Heading>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Orders can be cancelled within 48 hours without charge</Text>
                <Text color="light" as="li">Cancellations after 48 hours may incur charges for work completed</Text>
                <Text color="light" as="li">Made-to-measure products cannot be cancelled once manufacturing begins</Text>
                <Text color="light" as="li">Deposits are non-refundable after manufacturing commences</Text>
              </Stack>
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