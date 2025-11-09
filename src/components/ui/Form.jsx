import React, { forwardRef } from 'react'
/**
 * Form – standardized form wrapper to enforce UI usage.
 *
 * Usage
 *  <Form onSubmit={...}><FormInput ... /></Form>
 */

export const Form = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <form ref={ref} className={className} {...props}>
      {children}
    </form>
  )
})

Form.displayName = 'Form'


