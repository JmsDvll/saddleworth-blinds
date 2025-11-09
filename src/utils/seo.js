export const defaultMeta = {
  title: 'Sunshine Blinds Saddleworth | Window Blinds, Shutters & Curtains',
  description: "Saddleworth's trusted window blind specialists. Made-to-measure blinds, shutters & curtains. Free quotes!",
  canonical: 'https://www.saddleworthblinds.co.uk/',
  ogType: 'website',
  ogLocale: 'en_GB',
}

export const routeMeta = {
  '/': defaultMeta,
  '/contact': {
    title: 'Contact Sunshine Blinds Saddleworth | Free Home Consultation',
    description: 'Contact our expert team for a free home visit across Saddleworth and Greater Manchester.',
    canonical: 'https://www.saddleworthblinds.co.uk/contact/',
  },
  '/book-appointment': {
    title: 'Book Your Free Consultation | Sunshine Blinds Saddleworth',
    description: 'Book a free, no-obligation home visit. Samples, measuring and expert advice included.',
    canonical: 'https://www.saddleworthblinds.co.uk/book-appointment/',
  },
}

export const buildJsonLdLocalBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sunshine Blinds Saddleworth',
  image: 'https://www.saddleworthblinds.co.uk/images/sunshine-logo.svg',
  url: 'https://www.saddleworthblinds.co.uk',
  telephone: '+441457597091',
  email: 'sales@saddleworthblinds.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6 Rochdale Road',
    addressLocality: 'Shaw, Oldham',
    postalCode: 'OL2 8AD',
    addressCountry: 'GB',
  },
})


