import React from 'react'
import { 
  Section, 
  Container, 
  Heading, 
  Text, 
  Stack
} from '../components/ui'

const PrivacyPolicy = () => {
  return (
    <Section padding="large">
      <Container maxWidth="medium">
        <Stack spacing="xlarge">
          <Stack spacing="medium">
            <Heading as="h1" size="4xl" mdSize="5xl">Privacy Policy</Heading>
            <Text color="light">
              <Text as="span" weight="medium">Last updated:</Text> January 2025
            </Text>
          </Stack>

          <Stack spacing="large">
            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Introduction</Heading>
              <Text color="light">
                Sunshine Blinds Saddleworth ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website saddleworthblinds.co.uk or use our services.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Information We Collect</Heading>
              
              <Stack spacing="small">
                <Heading as="h3" size="xl">Personal Information</Heading>
                <Text color="light">We may collect personal information that you voluntarily provide to us when you:</Text>
                <Stack spacing="small" className="list-disc list-inside">
                  <Text color="light" as="li">Contact us through our website or by phone</Text>
                  <Text color="light" as="li">Request a quote or book an appointment</Text>
                  <Text color="light" as="li">Subscribe to our newsletter</Text>
                  <Text color="light" as="li">Participate in surveys or promotions</Text>
                </Stack>
                
                <Text color="light" className="mt-4">This information may include:</Text>
                <Stack spacing="small" className="list-disc list-inside">
                  <Text color="light" as="li">Name and contact details (email, phone number, address)</Text>
                  <Text color="light" as="li">Property details and window measurements</Text>
                  <Text color="light" as="li">Preferences and requirements for window treatments</Text>
                  <Text color="light" as="li">Communication history</Text>
                </Stack>
              </Stack>

              <Stack spacing="small" className="mt-6">
                <Heading as="h3" size="xl">Automatically Collected Information</Heading>
                <Text color="light">When you visit our website, we may automatically collect:</Text>
                <Stack spacing="small" className="list-disc list-inside">
                  <Text color="light" as="li">IP address and device information</Text>
                  <Text color="light" as="li">Browser type and version</Text>
                  <Text color="light" as="li">Pages visited and time spent on site</Text>
                  <Text color="light" as="li">Referring website information</Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">How We Use Your Information</Heading>
              <Text color="light">We use the collected information to:</Text>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Provide and manage our services</Text>
                <Text color="light" as="li">Process appointments and quotations</Text>
                <Text color="light" as="li">Communicate with you about our services</Text>
                <Text color="light" as="li">Send marketing communications (with your consent)</Text>
                <Text color="light" as="li">Improve our website and services</Text>
                <Text color="light" as="li">Comply with legal obligations</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Information Sharing</Heading>
              <Text color="light">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</Text>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Service providers who assist in our operations</Text>
                <Text color="light" as="li">Professional advisors (accountants, lawyers)</Text>
                <Text color="light" as="li">Law enforcement when required by law</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Data Security</Heading>
              <Text color="light">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Your Rights</Heading>
              <Text color="light">Under UK data protection laws, you have the right to:</Text>
              <Stack spacing="small" className="list-disc list-inside">
                <Text color="light" as="li">Access your personal information</Text>
                <Text color="light" as="li">Correct inaccurate information</Text>
                <Text color="light" as="li">Request deletion of your information</Text>
                <Text color="light" as="li">Object to processing of your information</Text>
                <Text color="light" as="li">Request data portability</Text>
                <Text color="light" as="li">Withdraw consent for marketing communications</Text>
              </Stack>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Cookies</Heading>
              <Text color="light">
                We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences. Essential cookies are necessary for the website to function properly, while optional cookies help us analyze site usage and improve our services.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Marketing Communications</Heading>
              <Text color="light">
                With your consent, we may send you marketing emails about our products, services, and special offers. You can opt-out at any time by clicking the unsubscribe link in our emails or contacting us directly.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Data Retention</Heading>
              <Text color="light">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations. Customer records are typically kept for 7 years for accounting purposes.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Children's Privacy</Heading>
              <Text color="light">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Changes to This Policy</Heading>
              <Text color="light">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </Text>
            </Stack>

            <Stack spacing="medium">
              <Heading as="h2" size="2xl">Contact Us</Heading>
              <Text color="light">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </Text>
              <Stack spacing="small">
                <Text color="light">
                  <Text as="span" weight="medium">Email:</Text> info@sunshineblinds.co.uk
                </Text>
                <Text color="light">
                  <Text as="span" weight="medium">Phone:</Text> 01457 597091
                </Text>
                <Text color="light">
                  <Text as="span" weight="medium">Address:</Text> Sunshine Blinds, Saddleworth, Oldham
                </Text>
              </Stack>
              <Text color="light" className="mt-4">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your personal information appropriately.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Section>
  )
}

export default PrivacyPolicy