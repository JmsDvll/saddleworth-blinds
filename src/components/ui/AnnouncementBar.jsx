import React, { forwardRef } from 'react'

const announcementStyles = {
  base: `
    transition-all duration-500
    overflow-hidden
  `,
  
  states: {
    visible: 'max-h-20 opacity-100',
    hidden: 'max-h-0 opacity-0',
  },
}

export const AnnouncementBar = forwardRef(({ 
  children,
  isVisible = true,
  className = '',
  ...props 
}, ref) => {
  const classes = `
    ${announcementStyles.base}
    ${isVisible ? announcementStyles.states.visible : announcementStyles.states.hidden}
    ${className}
  `.trim()

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  )
})

AnnouncementBar.displayName = 'AnnouncementBar'