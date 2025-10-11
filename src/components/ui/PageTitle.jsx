import React from 'react'
import { Heading, Text, Stack } from './index'

// Page title component for hero sections
export const PageTitle = ({ title, subtitle, align = 'left' }) => {
  return (
    <Stack spacing="small" align={align}>
      <Heading as="h1" size="hero" color="white">
        {title}
      </Heading>
      {subtitle && (
        <Text size="2xl" color="gold" weight="medium">
          {subtitle}
        </Text>
      )}
    </Stack>
  )
}

// Subheading for sections
export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <Stack spacing="small" align={align}>
      <Heading size="2xl" color="dark">
        {title}
      </Heading>
      {subtitle && (
        <Text size="large" color="muted">
          {subtitle}
        </Text>
      )}
    </Stack>
  )
}