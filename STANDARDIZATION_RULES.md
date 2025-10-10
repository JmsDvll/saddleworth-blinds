# Sunshine Blinds - Strict Standardization Rules

## 🚨 MANDATORY: These rules are enforced by ESLint and MUST be followed

### 1. NO Inline Tailwind Classes
❌ **FORBIDDEN:**
```jsx
<div className="bg-gray-900 p-4 rounded-lg">
<p className="text-white font-bold">
<button className="bg-gold-500 hover:bg-gold-600">
```

✅ **REQUIRED:**
```jsx
<Card variant="dark" padding="medium">
<Text variant="heading" color="light">
<Button variant="primary">
```

### 2. NO Raw HTML Elements
❌ **FORBIDDEN:**
```jsx
<section>
<h1>Title</h1>
<p>Text</p>
<a href="/link">Link</a>
<img src="image.jpg" alt="Image">
```

✅ **REQUIRED:**
```jsx
<Section>
<Heading.H1>Title</Heading.H1>
<Text>Text</Text>
<Link to="/link">Link</Link>
<Image src="image.jpg" alt="Image">
```

### 3. Component Import Structure
All UI components must be imported from the centralized UI library:

```jsx
import {
  Section,
  Container,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  // ... etc
} from '../components/ui'
```

### 4. Props Over Classes
Components accept semantic props, not className strings:

❌ **FORBIDDEN:**
```jsx
<Button className="large primary gold">
```

✅ **REQUIRED:**
```jsx
<Button size="large" variant="primary" color="gold">
```

### 5. Styling Hierarchy
1. **Component variants** - Use predefined component variants
2. **Composition** - Combine components for complex layouts
3. **Theme extensions** - If needed, extend in Tailwind config
4. **NEVER inline styles** - No style props or className with Tailwind

### 6. File Structure Rules
- Components must be in `/components/ui/`
- Pages must use only UI components
- No component-specific CSS files
- All styling through Tailwind config and component variants

### 7. ESLint Enforcement
The following ESLint rules are active:
- `custom/no-inline-styles` - Prevents any Tailwind classes in className
- `custom/use-ui-components` - Enforces UI component usage
- `no-console` - No console.logs in production
- `prefer-const` - Use const over let when possible
- `max-lines` - Keep files under 500 lines

### 8. Component Creation Rules
When creating new components:
1. Must extend existing UI components
2. Must have semantic prop interface
3. Must not accept className prop
4. Must use Tailwind config values only
5. Must be documented with examples

### 9. Page Structure Template
Every page must follow this structure:
```jsx
import { Section, Container, Heading, Text } from '../components/ui'

const PageName = () => {
  return (
    <>
      <Section variant="hero">
        <Container>
          <Heading.H1>Title</Heading.H1>
        </Container>
      </Section>
      
      <Section>
        <Container>
          {/* Content using only UI components */}
        </Container>
      </Section>
    </>
  )
}
```

### 10. Zero Tolerance Policy
Any code that violates these rules will:
1. Fail ESLint checks
2. Block commits
3. Require immediate refactoring
4. Not be merged into main branch

## Component Reference

### Layout Components
- `Section` - Page sections with variants
- `Container` - Max-width containers
- `Grid` - Grid layouts
- `Flex` - Flexbox layouts
- `Stack` - Vertical spacing
- `Spacer` - Horizontal/vertical space

### Typography Components
- `Heading.H1` through `Heading.H6`
- `Text` - Paragraphs and text blocks
- `Text.Lead` - Lead paragraphs
- `Text.Small` - Small text
- `Text.Caption` - Caption text

### Interactive Components
- `Button` - All buttons
- `Link` - All links
- `FormInput` - All form inputs
- `Card` - Card containers
- `Badge` - Status badges
- `Icon` - All icons

### Media Components
- `Image` - All images
- `Icon` - SVG icons
- `Logo` - Brand logos

## Enforcement
These rules are not guidelines - they are requirements. The ESLint configuration will automatically:
- Detect violations
- Prevent commits with violations
- Provide clear error messages
- Suggest the correct component to use

Remember: **NO EXCEPTIONS** to these rules.