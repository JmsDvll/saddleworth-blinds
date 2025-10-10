import React, { forwardRef } from 'react'
import { Stack, Text, Icon, Flex } from './index'

// Form Group wrapper for consistent spacing and layout
export const FormGroup = ({ children, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

// Base input styles
const inputBase = `
  w-full px-4 py-3 
  bg-brand-dark/5 dark:bg-white/5
  border border-brand-grey-light dark:border-white/10
  rounded-lg
  text-brand-dark dark:text-white
  placeholder:text-brand-grey dark:placeholder:text-brand-grey-light
  transition-all duration-300
  focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold
  disabled:opacity-50 disabled:cursor-not-allowed
`

const labelBase = `
  block text-sm font-medium text-brand-dark dark:text-white mb-2
`

// Form Input
export const FormInput = forwardRef(({ 
  label, 
  error, 
  required, 
  helpText, 
  icon,
  type = 'text',
  ...props 
}, ref) => {
  return (
    <Stack spacing="small">
      {label && (
        <label className={labelBase}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon name={icon} size="small" className="text-brand-grey" />
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={`${inputBase} ${icon ? 'pl-10' : ''} ${error ? 'border-red-500' : ''}`}
          {...props}
        />
      </div>
      {helpText && !error && (
        <Text size="small" color="muted">{helpText}</Text>
      )}
      {error && (
        <Text size="small" className="text-red-500">{error}</Text>
      )}
    </Stack>
  )
})

// Form Select
export const FormSelect = forwardRef(({ 
  label, 
  error, 
  required, 
  helpText,
  children,
  ...props 
}, ref) => {
  return (
    <Stack spacing="small">
      {label && (
        <label className={labelBase}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          ref={ref}
          className={`${inputBase} appearance-none pr-10 ${error ? 'border-red-500' : ''}`}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Icon name="chevronDown" size="small" className="text-brand-grey" />
        </div>
      </div>
      {helpText && !error && (
        <Text size="small" color="muted">{helpText}</Text>
      )}
      {error && (
        <Text size="small" className="text-red-500">{error}</Text>
      )}
    </Stack>
  )
})

// Form Textarea
export const FormTextarea = forwardRef(({ 
  label, 
  error, 
  required, 
  helpText,
  rows = 4,
  ...props 
}, ref) => {
  return (
    <Stack spacing="small">
      {label && (
        <label className={labelBase}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={`${inputBase} resize-none ${error ? 'border-red-500' : ''}`}
        {...props}
      />
      {helpText && !error && (
        <Text size="small" color="muted">{helpText}</Text>
      )}
      {error && (
        <Text size="small" className="text-red-500">{error}</Text>
      )}
    </Stack>
  )
})

// Form Checkbox
export const FormCheckbox = forwardRef(({ 
  label, 
  error, 
  helpText,
  children,
  ...props 
}, ref) => {
  return (
    <Stack spacing="small">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          ref={ref}
          type="checkbox"
          className={`
            mt-0.5 w-5 h-5 
            bg-brand-dark/5 dark:bg-white/5
            border border-brand-grey-light dark:border-white/10
            rounded
            text-brand-gold
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : ''}
          `}
          {...props}
        />
        <Stack spacing="small" className="flex-1">
          {label && (
            <Text className="group-hover:text-brand-gold transition-colors">
              {label}
            </Text>
          )}
          {children}
        </Stack>
      </label>
      {helpText && !error && (
        <Text size="small" color="muted" className="ml-8">{helpText}</Text>
      )}
      {error && (
        <Text size="small" className="text-red-500 ml-8">{error}</Text>
      )}
    </Stack>
  )
})

// Form Radio Group
export const FormRadioGroup = ({ 
  label, 
  error, 
  required,
  options,
  name,
  value,
  onChange,
  orientation = 'vertical'
}) => {
  return (
    <Stack spacing="small">
      {label && (
        <Text weight="medium" className={labelBase}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Text>
      )}
      <Flex 
        direction={orientation === 'vertical' ? 'column' : 'row'} 
        gap={orientation === 'vertical' ? 'small' : 'medium'}
        wrap={orientation === 'horizontal' ? 'wrap' : undefined}
      >
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className={`
                w-5 h-5 
                bg-brand-dark/5 dark:bg-white/5
                border border-brand-grey-light dark:border-white/10
                rounded-full
                text-brand-gold
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold
                disabled:opacity-50 disabled:cursor-not-allowed
                ${error ? 'border-red-500' : ''}
              `}
              disabled={option.disabled}
            />
            <Stack spacing="none">
              <Text className="group-hover:text-brand-gold transition-colors">
                {option.label}
              </Text>
              {option.description && (
                <Text size="small" color="muted">{option.description}</Text>
              )}
            </Stack>
          </label>
        ))}
      </Flex>
      {error && (
        <Text size="small" className="text-red-500">{error}</Text>
      )}
    </Stack>
  )
}

// Form Label (standalone)
FormInput.Label = ({ children, required, htmlFor }) => (
  <label htmlFor={htmlFor} className={labelBase}>
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
)

// Alert for form feedback
export const Alert = ({ variant = 'info', children, className = '' }) => {
  const variants = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
    error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
  }

  return (
    <div className={`
      px-4 py-3 rounded-lg border
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </div>
  )
}