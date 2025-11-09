# UI Component Library – Rules of Use

This directory is the single source of truth for all styling and layout primitives. Outside this directory:

- Do not use raw HTML tags (e.g., `div`, `section`, `p`, `img`, `button`, etc.). Use the exported UI components.
- Do not use inline Tailwind classes. Prefer semantic props on UI components (e.g., `padding="large"`, `color="gold"`, `maxWidth="2xl"`).

Key components and conventions:

- Layout: `Section`, `Container`, `Grid`, `Stack`, `Flex`, `Box`, `Center`
- Content: `Heading`, `Text`, `Image`, `Icon`, `List`
- Forms: `Form`, `FormGroup`, `FormInput`, `FormSelect`, `FormTextarea`, `FormCheckbox`, `FormRadio`, `FormRow`
- Navigation: `Navigation`, `Link`
- Feedback: `Alert`, `Spinner`, `ProgressBar`
- Luxury: `GlowBox`, `ShimmerText`, `GoldDivider`, `LuxuryIcon`, `LuxuryBadge`

Example:

```jsx
import { Section, Container, Heading, Text, Button } from '../components/ui'

export function Example() {
  return (
    <Section background="dark" padding="large">
      <Container maxWidth="medium">
        <Heading size="xl" color="gold">Title</Heading>
        <Text color="light">Body copy...</Text>
        <Button variant="luxury">CTA</Button>
      </Container>
    </Section>
  )
}
```

Anti-patterns:

- Raw elements: `<section>`, `<p>`, `<img>`, `<button>`
- Inline Tailwind classes on `className`

See `COMPONENT_RULES.json` for the authoritative list of components and props.


