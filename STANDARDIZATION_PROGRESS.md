# Standardization Progress Tracker

## Pages Status

### ✅ Completed
1. **HomeStandardized.jsx** - Complete template example
2. **RollerBlindsStandardized.jsx** - Product page template

### 🔄 In Progress
3. **Home.jsx** - Replace with HomeStandardized

### ❌ Pending Standardization

#### Product Pages (9)
- [ ] VenetianBlinds.jsx
- [ ] VisionBlinds.jsx
- [ ] VerticalBlinds.jsx
- [ ] PerfectFitBlinds.jsx
- [ ] Shutters.jsx
- [ ] RomanBlinds.jsx
- [ ] Curtains.jsx
- [ ] AllusionBlinds.jsx

#### Area Pages (12)
- [ ] Uppermill.jsx
- [ ] Diggle.jsx
- [ ] Delph.jsx
- [ ] Greenfield.jsx
- [ ] Dobcross.jsx
- [ ] Lydgate.jsx
- [ ] Denshaw.jsx
- [ ] Friezland.jsx
- [ ] Grasscroft.jsx
- [ ] Grotton.jsx
- [ ] Springhead.jsx
- [ ] Lees.jsx

#### Utility Pages (5)
- [ ] Contact.jsx
- [ ] Gallery.jsx
- [ ] BookAppointment.jsx
- [ ] PrivacyPolicy.jsx
- [ ] TermsConditions.jsx

## Components Status

### ❌ Pending Standardization
- [ ] Header.jsx - Still uses inline styles
- [ ] Footer.jsx - Still uses inline styles
- [ ] ContactForm.jsx - Mixed approach
- [ ] FAQSection.jsx - Needs conversion
- [ ] ReviewsSection.jsx - Needs conversion
- [ ] All Carousel components - Need BaseCarousel standardization

## Key Patterns to Apply

1. **Replace ALL**:
   - `<section>` → `<Section>`
   - `<div className="container">` → `<Container>`
   - `<h1>`, `<h2>`, etc. → `<Heading.H1>`, `<Heading.H2>`
   - `<p>` → `<Text>`
   - `<a>` → `<Link>`
   - `<img>` → `<Image>`
   - Inline SVGs → `<Icon>`
   - Grid layouts → `<Grid>`
   - Flex layouts → `<Flex>`
   - Vertical spacing → `<Stack>`

2. **Remove ALL**:
   - Inline Tailwind classes
   - Direct style imports
   - Mixed approaches

3. **Ensure**:
   - Consistent prop interfaces
   - Semantic component usage
   - Proper component composition