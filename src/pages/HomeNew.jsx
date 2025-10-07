import React from 'react'
import { Button, Card, Section, Heading, Text, Grid } from '../components/ui'
import FAQSection from '../components/FAQSection'
import ReviewsSection from '../components/ReviewsSection'
import HeroCarousel from '../components/HeroCarousel'

const HomeNew = () => {
  const heroImages = [
    {
      src: 'vision-firenze-walnut-1600.jpg',
      alt: 'Beautiful Firenze Walnut vision blinds in a contemporary Saddleworth home',
      title: 'Premium Vision Blinds',
      description: 'Beautiful wood tones for modern interiors'
    },
    {
      src: 'vision-floreale-rosa-1600.jpg',
      alt: 'Elegant Floreale Rosa vision blinds showcasing floral elegance',
      title: 'Floral Inspiration',
      description: 'Soft, elegant patterns for traditional homes'
    },
    {
      src: 'vision-lusso-pebble-1600.jpg',
      alt: 'Modern Lusso Pebble vision blinds in neutral tones',
      title: 'Contemporary Style',
      description: 'Clean, modern aesthetics for urban living'
    },
    {
      src: 'vision-palermo-silver-1600.jpg',
      alt: 'Sophisticated Palermo Silver vision blinds',
      title: 'Luxury Finishes',
      description: 'Premium materials for discerning homeowners'
    }
  ]

  const services = [
    { 
      name: 'Roller Blinds', 
      description: 'Simple, stylish and practical - roller blinds work brilliantly in any room.', 
      link: '/roller-blinds', 
      image: '/images/optimized/roller-zen-kiwi-400.jpg' 
    },
    { 
      name: 'Venetian Blinds', 
      description: 'The classic choice that never goes out of style. Perfect light control with a twist of the wand.', 
      link: '/venetian-blinds', 
      image: '/images/optimized/venetian-starwood-400.jpg' 
    },
    { 
      name: 'Vertical Blinds', 
      description: 'Got big windows or patio doors? Vertical blinds are your best friend.', 
      link: '/vertical-blinds', 
      image: '/images/optimized/vertical-savanna-zebra-400.jpg' 
    },
    { 
      name: 'Vision Blinds', 
      description: 'The clever choice! Vision blinds give you privacy when you need it and beautiful views when you want them.', 
      link: '/vision-blinds', 
      image: '/images/optimized/vision-capri-concrete-400.jpg' 
    },
    { 
      name: 'Perfect Fit Blinds', 
      description: 'Hate the thought of drilling holes in your window frames? Perfect Fit blinds clip right into your UPVC windows.', 
      link: '/perfect-fit-blinds', 
      image: '/images/optimized/perfectfit-monet-flower-400.jpg' 
    },
    { 
      name: 'Shutters', 
      description: 'Want to add real wow factor? Plantation shutters are the ultimate luxury.', 
      link: '/shutters', 
      image: '/images/optimized/shutters-cotton-89mm-400.jpg' 
    },
    { 
      name: 'Roman Blinds', 
      description: 'For a touch of elegance and sophistication, Roman blinds are perfect.', 
      link: '/roman-blinds', 
      image: '/images/optimized/roller-petal-white-400.jpg', 
      comingSoon: true 
    },
    { 
      name: 'Curtains', 
      description: 'Sometimes nothing beats the classic look of curtains.', 
      link: '/curtains', 
      image: '/images/optimized/roller-birdsong-colour-400.jpg', 
      comingSoon: true 
    },
    { 
      name: 'Allusion Blinds', 
      description: 'Experience contemporary elegance with flowing fabric panels that combine curtains with blinds.', 
      link: '/allusion-blinds', 
      image: '/images/optimized/allusion-vista-snow-400.jpg' 
    }
  ]

  const features = [
    { icon: '✓', title: 'Free Consultation', description: 'No pushy sales, just honest advice' },
    { icon: '⭐', title: '5 Star Reviews', description: 'Trusted by your neighbors' },
    { icon: '£', title: 'Fair Pricing', description: 'Quality without the premium' }
  ]

  const stats = [
    { value: '20+', label: 'Years of Experience' },
    { value: '1000+', label: 'Happy Customers' },
    { value: '5★', label: 'Average Rating' },
    { value: '100%', label: 'Local Business' }
  ]

  return (
    <>
      {/* Hero Section - NO INLINE STYLES! */}
      <Section background="gradient" padding="large">
        <Section.Container>
          <Grid cols={2} gap="xlarge" align="center">
            <div>
              <Heading.H1 marginBottom="large">
                Beautiful Blinds for Your
                <span className="block text-brand-gold">Saddleworth Home</span>
              </Heading.H1>
              
              <Text.Lead>
                Searching for the ideal blinds? Since 2003, we've been helping families in Uppermill, 
                Greenfield and Diggle enhance their homes. Whether it's a snug cottage or a sleek 
                barn conversion, we understand what suits the unique charm of Saddleworth.
              </Text.Lead>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button to="/book-appointment" variant="primary" size="xlarge">
                  Get Free Quote
                </Button>
                <Button 
                  href="tel:01457597091" 
                  variant="secondary" 
                  size="xlarge"
                  iconLeft={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                >
                  Call 01457 597091
                </Button>
              </div>
              
              {/* Feature badges */}
              <Grid cols={3} gap="large" className="mt-12">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gray-900 font-bold text-lg">{feature.icon}</span>
                    </div>
                    <Text size="small" weight="medium">{feature.title}</Text>
                  </div>
                ))}
              </Grid>
            </div>
            
            <div>
              <HeroCarousel images={heroImages} autoRotate={true} interval={6000} />
            </div>
          </Grid>
        </Section.Container>
      </Section>

      {/* Services Section */}
      <Section background="darker" padding="large">
        <Section.Container>
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto mb-8 rounded-full"></div>
            <Heading.H2 color="gradient" marginBottom="large">
              Discover Your Dream Blinds
            </Heading.H2>
            <Text size="large" color="gold" className="italic mb-4">
              "We Put Other Companies in the Shade"
            </Text>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-gold to-yellow-400 mx-auto rounded-full"></div>
            <Text.Lead className="mt-8 max-w-2xl mx-auto">
              From cosy cottages in Uppermill to modern homes in Greenfield, we understand what 
              suits the unique charm of Saddleworth
            </Text.Lead>
          </div>
          
          <Grid cols={3} gap="large">
            {services.map((service) => (
              <Card 
                key={service.name} 
                variant="highlight" 
                hover="lift" 
                padding="none"
                onClick={() => window.location.href = service.link}
                className="cursor-pointer"
              >
                <Card.Image src={service.image} alt={service.name} />
                <div className="p-6">
                  <Heading.H3 marginBottom="medium">
                    {service.name}
                    {service.comingSoon && (
                      <span className="ml-2 text-sm text-brand-gold font-medium">(Coming Soon)</span>
                    )}
                  </Heading.H3>
                  <Text color="light">{service.description}</Text>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <Text size="small" color="gold" weight="medium" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore →
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
          
          {/* CTA Box */}
          <Card variant="elevated" className="mt-16 max-w-4xl mx-auto text-center">
            <Heading.H3 marginBottom="medium">
              Can't decide which blinds are right for you?
            </Heading.H3>
            <Text.Lead marginBottom="large">
              No worries! We'll bring samples to your home and help you choose. 
              It's completely free and there's no pressure.
            </Text.Lead>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/book-appointment" variant="primary" size="large">
                Book Free Consultation
              </Button>
              <Button 
                href="tel:01457597091" 
                variant="ghost" 
                size="large"
                iconLeft={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                Quick Question? Call Us
              </Button>
            </div>
          </Card>
        </Section.Container>
      </Section>

      {/* Transform Your Space Section */}
      <Section background="dark" padding="large">
        <Section.Container>
          <div className="text-center mb-16">
            <Heading.H2 marginBottom="medium">Transform Your Space</Heading.H2>
            <Text.Lead className="max-w-3xl mx-auto">
              See how the right blinds can completely change the look and feel of your rooms
            </Text.Lead>
          </div>
          
          <Grid cols={2} gap="xlarge">
            <Card variant="default" padding="none">
              <div className="relative">
                <img
                  src="/images/optimized/vision-lusso-pebble-800.jpg"
                  alt="Modern living room with Vision blinds"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Living Rooms
                </div>
              </div>
              <Card.Body>
                <Heading.H3 marginBottom="medium">Create the Perfect Ambiance</Heading.H3>
                <Text color="light" marginBottom="medium">
                  Vision blinds offer the perfect balance of privacy and natural light, ideal for 
                  Saddleworth's variable weather.
                </Text>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Control light without losing your view</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Reduce glare on TV screens</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Protect furniture from UV damage</Text>
                  </li>
                </ul>
              </Card.Body>
            </Card>
            
            <Card variant="default" padding="none">
              <div className="relative">
                <img
                  src="/images/optimized/roller-carnival-bubblegum-800.jpg"
                  alt="Cozy bedroom with blackout roller blinds"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Bedrooms
                </div>
              </div>
              <Card.Body>
                <Heading.H3 marginBottom="medium">Sleep Better, Wake Happier</Heading.H3>
                <Text color="light" marginBottom="medium">
                  Blackout roller blinds ensure peaceful sleep, even during those long summer 
                  evenings in Saddleworth.
                </Text>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Complete darkness for better sleep</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Thermal properties keep rooms cozy</Text>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    <Text size="small" color="light">Child-safe cordless options available</Text>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid>
          
          <div className="text-center mt-16">
            <Text.Lead marginBottom="medium">
              Ready to transform your home? Let's find the perfect blinds for every room.
            </Text.Lead>
            <Button to="/gallery" variant="secondary" size="large">
              View More Transformations
            </Button>
          </div>
        </Section.Container>
      </Section>

      {/* Stats Section */}
      <Section background="gradient" padding="medium">
        <Section.Container>
          <Grid cols={4} gap="large">
            {stats.map((stat, index) => (
              <Card key={index} variant="default" hover="scale" className="text-center">
                <Heading.H2 color="gold" marginBottom="small">{stat.value}</Heading.H2>
                <Text color="light">{stat.label}</Text>
              </Card>
            ))}
          </Grid>
        </Section.Container>
      </Section>

      {/* Final CTA Section */}
      <Section background="gold" textColor="dark" padding="large">
        <Section.Container size="narrow">
          <div className="text-center">
            <Heading.H2 marginBottom="large">
              Ready to Transform Your Home?
            </Heading.H2>
            <Text size="large" className="text-gray-800 mb-8 max-w-3xl mx-auto">
              Let's make your windows beautiful together. We'll come to you, measure up, and show 
              you exactly what's possible. No pressure, no obligation - just honest advice and a 
              friendly chat over a cuppa.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/book-appointment" variant="primary" size="xlarge" className="bg-gray-900 hover:bg-gray-800">
                Book Your Free Visit
              </Button>
              <Button 
                href="tel:01457597091" 
                variant="secondary" 
                size="xlarge"
                className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                iconLeft={
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              >
                Call for a Chat
              </Button>
            </div>
            
            <Grid cols={3} gap="large" className="mt-8 text-gray-800">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-600">✓</span>
                <Text size="small" weight="medium">Completely Free</Text>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-blue-600">🔒</span>
                <Text size="small" weight="medium">No Obligation</Text>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-purple-600">📍</span>
                <Text size="small" weight="medium">Covering All Saddleworth</Text>
              </div>
            </Grid>
            
            <Card variant="default" className="mt-8 bg-yellow-100 border-yellow-300 text-center">
              <Text color="dark" weight="medium">
                ⚡ Limited availability - Book your free consultation this week!
              </Text>
            </Card>
          </div>
        </Section.Container>
      </Section>

      {/* Reviews Section */}
      <Section background="dark" padding="large">
        <ReviewsSection />
      </Section>

      {/* FAQ Section */}
      <Section padding="large">
        <FAQSection />
      </Section>
    </>
  )
}

export default HomeNew