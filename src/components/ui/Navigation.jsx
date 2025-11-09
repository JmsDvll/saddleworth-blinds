import React from 'react'
/**
 * Navigation – Semantic wrapper for nav regions.
 *
 * Usage
 *  <Navigation aria-label="Primary"><Flex as="ul">...</Flex></Navigation>
 */

export const Navigation = ({ children, className = '', ...props }) => {
  return (
    <nav className={className} {...props}>
      {children}
    </nav>
  )
}

Navigation.displayName = 'Navigation'


