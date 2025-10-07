import React from 'react'

// Centralized form input styles
const inputStyles = {
  base: 'w-full rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  
  // Variants
  variants: {
    default: 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-transparent focus:ring-brand-gold focus:ring-offset-gray-900',
    error: 'bg-gray-800 border border-red-600 text-white placeholder-gray-500 focus:border-transparent focus:ring-red-600 focus:ring-offset-gray-900',
    success: 'bg-gray-800 border border-green-600 text-white placeholder-gray-500 focus:border-transparent focus:ring-green-600 focus:ring-offset-gray-900',
  },
  
  // Sizes
  sizes: {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-3 text-base',
    large: 'px-5 py-4 text-lg',
  },
  
  // Label styles
  label: {
    base: 'block font-medium mb-2',
    sizes: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg',
    },
    required: 'after:content-["*"] after:ml-0.5 after:text-red-500',
  },
  
  // Helper text styles
  helperText: {
    base: 'mt-1 text-sm',
    variants: {
      default: 'text-gray-400',
      error: 'text-red-400',
      success: 'text-green-400',
    },
  },
}

// Base Input Component
export const FormInput = ({
  label,
  id,
  type = 'text',
  size = 'medium',
  variant = 'default',
  required = false,
  error,
  success,
  helperText,
  className = '',
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const currentVariant = error ? 'error' : success ? 'success' : variant
  
  const inputClasses = [
    inputStyles.base,
    inputStyles.variants[currentVariant],
    inputStyles.sizes[size],
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div>
      {label && (
        <label
          htmlFor={inputId}
          className={[
            inputStyles.label.base,
            inputStyles.label.sizes[size],
            required && inputStyles.label.required,
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        required={required}
        className={inputClasses}
        {...props}
      />
      {(helperText || error || success) && (
        <p className={[
          inputStyles.helperText.base,
          inputStyles.helperText.variants[currentVariant],
        ].join(' ')}>
          {error || success || helperText}
        </p>
      )}
    </div>
  )
}

// Select Component
export const FormSelect = ({
  label,
  id,
  size = 'medium',
  variant = 'default',
  required = false,
  error,
  success,
  helperText,
  children,
  className = '',
  ...props
}) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const currentVariant = error ? 'error' : success ? 'success' : variant
  
  const selectClasses = [
    inputStyles.base,
    inputStyles.variants[currentVariant],
    inputStyles.sizes[size],
    'cursor-pointer',
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div>
      {label && (
        <label
          htmlFor={selectId}
          className={[
            inputStyles.label.base,
            inputStyles.label.sizes[size],
            required && inputStyles.label.required,
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        required={required}
        className={selectClasses}
        {...props}
      >
        {children}
      </select>
      {(helperText || error || success) && (
        <p className={[
          inputStyles.helperText.base,
          inputStyles.helperText.variants[currentVariant],
        ].join(' ')}>
          {error || success || helperText}
        </p>
      )}
    </div>
  )
}

// Textarea Component
export const FormTextarea = ({
  label,
  id,
  size = 'medium',
  variant = 'default',
  required = false,
  error,
  success,
  helperText,
  rows = 4,
  className = '',
  ...props
}) => {
  const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
  const currentVariant = error ? 'error' : success ? 'success' : variant
  
  const textareaClasses = [
    inputStyles.base,
    inputStyles.variants[currentVariant],
    inputStyles.sizes[size],
    'resize-y',
    className,
  ].filter(Boolean).join(' ')
  
  return (
    <div>
      {label && (
        <label
          htmlFor={textareaId}
          className={[
            inputStyles.label.base,
            inputStyles.label.sizes[size],
            required && inputStyles.label.required,
          ].filter(Boolean).join(' ')}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        required={required}
        rows={rows}
        className={textareaClasses}
        {...props}
      />
      {(helperText || error || success) && (
        <p className={[
          inputStyles.helperText.base,
          inputStyles.helperText.variants[currentVariant],
        ].join(' ')}>
          {error || success || helperText}
        </p>
      )}
    </div>
  )
}

// Checkbox Component
export const FormCheckbox = ({
  label,
  id,
  size = 'medium',
  error,
  className = '',
  ...props
}) => {
  const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-')
  
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }
  
  const labelSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }
  
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={checkboxId}
        className={[
          sizeClasses[size],
          'rounded border-gray-700 bg-gray-800 text-brand-gold focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900',
          error && 'border-red-600',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
      {label && (
        <label
          htmlFor={checkboxId}
          className={[
            'cursor-pointer',
            labelSizes[size],
            error ? 'text-red-400' : 'text-gray-300',
          ].join(' ')}
        >
          {label}
        </label>
      )}
    </div>
  )
}

// Radio Component
export const FormRadio = ({
  label,
  id,
  name,
  size = 'medium',
  error,
  className = '',
  ...props
}) => {
  const radioId = id || `${name}-${label?.toLowerCase().replace(/\s+/g, '-')}`
  
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }
  
  const labelSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }
  
  return (
    <div className="flex items-center gap-3">
      <input
        type="radio"
        id={radioId}
        name={name}
        className={[
          sizeClasses[size],
          'border-gray-700 bg-gray-800 text-brand-gold focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-gray-900',
          error && 'border-red-600',
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      />
      {label && (
        <label
          htmlFor={radioId}
          className={[
            'cursor-pointer',
            labelSizes[size],
            error ? 'text-red-400' : 'text-gray-300',
          ].join(' ')}
        >
          {label}
        </label>
      )}
    </div>
  )
}

// Form Group Component for consistent spacing
export const FormGroup = ({ children, className = '' }) => (
  <div className={`space-y-6 ${className}`}>
    {children}
  </div>
)

// Form Row Component for side-by-side inputs
export const FormRow = ({ children, className = '' }) => (
  <div className={`grid md:grid-cols-2 gap-6 ${className}`}>
    {children}
  </div>
)