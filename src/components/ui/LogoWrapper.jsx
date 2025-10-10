import React, { forwardRef } from 'react'

const logoStyles = `
  h-14 w-auto 
  transition-all duration-500 
  group-hover:scale-105 group-hover:drop-shadow-gold
`

export const LogoWrapper = forwardRef(({ 
  children,
  className = '',
  ...props 
}, ref) => {
  const classes = `${logoStyles} ${className}`.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

LogoWrapper.displayName = 'LogoWrapper'