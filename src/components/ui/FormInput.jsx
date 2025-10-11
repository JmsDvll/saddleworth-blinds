import React, { forwardRef } from 'react'

// Enhanced form input styles with premium effects
const inputStyles = {
  base: `
    w-full
    bg-white
    border border-brand-gold/20
    rounded-sm
    text-brand-dark placeholder-brand-grey
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold
    hover:border-brand-gold/40
    relative
  `,
  
  variants: {
    default: `
      focus:bg-white
      focus:shadow-gold
    `,
    error: `
      border-red-500/50 
      focus:ring-red-500/50 focus:border-red-500/50
      bg-red-900/10
    `,
    success: `
      border-emerald-500/50 
      focus:ring-emerald-500/50 focus:border-emerald-500/50
      bg-emerald-900/10
    `,
  },
  
  sizes: {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-5 py-4 text-lg',
  },
  
  // Premium label styles
  label: `
    block text-sm font-medium text-brand-dark mb-2
    tracking-wide uppercase
    transition-colors duration-300
  `,
  
  labelRequired: `
    after:content-['*'] after:ml-1 after:text-brand-gold
  `,
  
  // Helper text styles
  helperText: {
    default: 'mt-2 text-sm text-gray-500',
    error: 'mt-2 text-sm text-red-400',
    success: 'mt-2 text-sm text-emerald-400',
  }
}

// Enhanced Form Input Component
export const FormInput = forwardRef(({
  label,
  error,
  success,
  helperText,
  required,
  className = '',
  size = 'medium',
  ...props
}, ref) => {
  const variant = error ? 'error' : success ? 'success' : 'default'
  
  return (
    <div className={`relative group`}>
      {label && (
        <label 
          htmlFor={props.id || props.name}
          className={`
            ${inputStyles.label}
            ${required ? inputStyles.labelRequired : ''}
            group-focus-within:text-brand-gold
          `}
        >
          {label}
        </label>
      )}
      
      <div className={`relative`}>
        <input
          ref={ref}
          className={`
            ${inputStyles.base}
            ${inputStyles.variants[variant]}
            ${inputStyles.sizes[size]}
            ${className}
          `}
          required={required}
          {...props}
        />
        
        {/* Premium focus glow effect */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10`}></div>
      </div>
      
      {helperText && (
        <p className={inputStyles.helperText[variant]}>
          {helperText}
        </p>
      )}
    </div>
  )
})

FormInput.displayName = 'FormInput'

// Enhanced Form Select Component
export const FormSelect = forwardRef(({
  label,
  error,
  success,
  helperText,
  required,
  children,
  className = '',
  size = 'medium',
  ...props
}, ref) => {
  const variant = error ? 'error' : success ? 'success' : 'default'
  
  return (
    <div className={`relative group`}>
      {label && (
        <label 
          htmlFor={props.id || props.name}
          className={`
            ${inputStyles.label}
            ${required ? inputStyles.labelRequired : ''}
            group-focus-within:text-brand-gold
          `}
        >
          {label}
        </label>
      )}
      
      <div className={`relative`}>
        <select
          ref={ref}
          className={`
            ${inputStyles.base}
            ${inputStyles.variants[variant]}
            ${inputStyles.sizes[size]}
            appearance-none
            cursor-pointer
            ${className}
          `}
          required={required}
          {...props}
        >
          {children}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`}>
          <svg className={`w-5 h-5 text-gray-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {/* Premium focus glow effect */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10`}></div>
      </div>
      
      {helperText && (
        <p className={inputStyles.helperText[variant]}>
          {helperText}
        </p>
      )}
    </div>
  )
})

FormSelect.displayName = 'FormSelect'

// Enhanced Form Textarea Component
export const FormTextarea = forwardRef(({
  label,
  error,
  success,
  helperText,
  required,
  className = '',
  size = 'medium',
  ...props
}, ref) => {
  const variant = error ? 'error' : success ? 'success' : 'default'
  
  return (
    <div className={`relative group`}>
      {label && (
        <label 
          htmlFor={props.id || props.name}
          className={`
            ${inputStyles.label}
            ${required ? inputStyles.labelRequired : ''}
            group-focus-within:text-brand-gold
          `}
        >
          {label}
        </label>
      )}
      
      <div className={`relative`}>
        <textarea
          ref={ref}
          className={`
            ${inputStyles.base}
            ${inputStyles.variants[variant]}
            ${inputStyles.sizes[size]}
            resize-y min-h-[100px]
            ${className}
          `}
          required={required}
          {...props}
        />
        
        {/* Premium focus glow effect */}
        <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-brand-gold/20 to-brand-gold-light/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10`}></div>
      </div>
      
      {helperText && (
        <p className={inputStyles.helperText[variant]}>
          {helperText}
        </p>
      )}
    </div>
  )
})

FormTextarea.displayName = 'FormTextarea'

// Enhanced Form Checkbox Component
export const FormCheckbox = forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <label className={`relative flex items-start gap-3 cursor-pointer group`}>
      <div className={`relative mt-0.5`}>
        <input
          ref={ref}
          type="checkbox"
          className={`
            w-5 h-5
            bg-brand-dark-lighter
            border-2 border-gray-600
            rounded
            text-brand-gold
            focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-dark
            transition-all duration-300
            cursor-pointer
            checked:bg-gradient-to-br checked:from-brand-gold checked:to-brand-gold-light
            checked:border-brand-gold
            ${className}
          `}
          {...props}
        />
        
        {/* Custom checkmark */}
        <svg 
          className={`absolute left-0.5 top-0.5 w-4 h-4 text-gray-900 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      {label && (
        <span className={`
          text-gray-300 select-none
          group-hover:text-white
          transition-colors duration-300
          ${error ? 'text-red-400' : ''}
        `}>
          {label}
        </span>
      )}
    </label>
  )
})

FormCheckbox.displayName = 'FormCheckbox'

// Enhanced Form Radio Component
export const FormRadio = forwardRef(({
  label,
  error,
  className = '',
  ...props
}, ref) => {
  return (
    <label className={`relative flex items-center gap-3 cursor-pointer group`}>
      <div className={`relative`}>
        <input
          ref={ref}
          type="radio"
          className={`
            w-5 h-5
            bg-brand-dark-lighter
            border-2 border-gray-600
            text-brand-gold
            focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-dark
            transition-all duration-300
            cursor-pointer
            checked:bg-gradient-to-br checked:from-brand-gold checked:to-brand-gold-light
            checked:border-brand-gold
            ${className}
          `}
          {...props}
        />
        
        {/* Inner dot */}
        <div className={`absolute inset-0 m-auto w-2 h-2 bg-gray-900 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none`}></div>
      </div>
      
      {label && (
        <span className={`
          text-gray-300 select-none
          group-hover:text-white
          transition-colors duration-300
          ${error ? 'text-red-400' : ''}
        `}>
          {label}
        </span>
      )}
    </label>
  )
})

FormRadio.displayName = 'FormRadio'

// Form Group for consistent spacing
export const FormGroup = ({ children, className = '' }) => (
  <div className={`space-y-6 ${className}`}>
    {children}
  </div>
)

// Form Row for side-by-side inputs
export const FormRow = ({ children, className = '' }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
    {children}
  </div>
)