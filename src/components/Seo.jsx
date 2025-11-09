import React from 'react'
import { Helmet } from 'react-helmet-async'

export const Seo = ({ title, description, canonical, image, type = 'website', locale = 'en_GB', jsonLd, children }) => {
  const renderJsonLd = () => {
    if (!jsonLd) return null
    try {
      const payload = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      const json = JSON.stringify(payload.length === 1 ? payload[0] : payload)
      return <script type="application/ld+json">{json}</script>
    } catch {
      return null
    }
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      {renderJsonLd()}
      {children}
    </Helmet>
  )
}


