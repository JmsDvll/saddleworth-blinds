import React from 'react'
/**
 * SkipLink – accessibility skip navigation link.
 *
 * Props
 * - href: string – anchor to main content (default '#main-content')
 * - children: link text
 */

export const SkipLink = ({ href = '#main-content', children = 'Skip to main content' }) => {
  return (
    <a 
      href={href} 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-gold text-gray-900 px-4 py-2 rounded-lg font-semibold shadow-lg z-50"
    >
      {children}
    </a>
  )
}