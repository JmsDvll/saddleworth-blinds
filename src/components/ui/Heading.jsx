import React from 'react'

// Centralized heading styles
const headingStyles = {
  // Sizes based on heading level
  sizes: {
    h1: 'text-4xl lg:text-6xl font-bold leading-tight',
    h2: 'text-3xl lg:text-4xl font-bold',
    h3: 'text-2xl lg:text-3xl font-semibold',
    h4: 'text-xl lg:text-2xl font-semibold',
    h5: 'text-lg lg:text-xl font-semibold',
    h6: 'text-base lg:text-lg font-semibold',
  },
  
  // Text alignment
  align: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  },
  
  // Color variations
  color: {
    inherit: '',
    white: 'text-white',
    gold: 'text-brand-gold',
    gradient: 'bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent',
  },
  
  // Margin bottom
  marginBottom: {
    none: '',
    small: 'mb-2',
    medium: 'mb-4',
    large: 'mb-6',
    xlarge: 'mb-8',
  },
}

const Heading = ({
  as: Component = 'h2',
  size,
  align = 'left',
  color = 'inherit',
  marginBottom = 'medium',
  children,
  className = '',
  ...props
}) => {
  // Use the component level as default size if not specified
  const headingSize = size || Component
  
  const classes = [
    headingStyles.sizes[headingSize],
    headingStyles.align[align],
    headingStyles.color[color],
    headingStyles.marginBottom[marginBottom],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

// Convenience components for each heading level
Heading.H1 = (props) => <Heading as="h1" {...props} />
Heading.H2 = (props) => <Heading as="h2" {...props} />
Heading.H3 = (props) => <Heading as="h3" {...props} />
Heading.H4 = (props) => <Heading as="h4" {...props} />
Heading.H5 = (props) => <Heading as="h5" {...props} />
Heading.H6 = (props) => <Heading as="h6" {...props} />

export default Heading