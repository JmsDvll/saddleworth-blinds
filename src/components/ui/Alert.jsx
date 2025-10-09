import React from 'react'
import Icon from './Icon'

// Centralized alert styles
const alertStyles = {
  // Base styles
  base: 'rounded-lg p-4',
  
  // Variants
  variants: {
    default: 'bg-gray-800 border border-gray-700 text-gray-300',
    info: 'bg-blue-900/20 border border-blue-600 text-blue-400',
    success: 'bg-green-900/20 border border-green-600 text-green-400',
    warning: 'bg-yellow-900/20 border border-yellow-600 text-yellow-400',
    error: 'bg-red-900/20 border border-red-600 text-red-400',
    ghost: 'bg-transparent border border-gray-600 text-gray-300',
  },
  
  // Sizes
  sizes: {
    small: 'p-3 text-sm',
    medium: 'p-4',
    large: 'p-6 text-lg',
  },
  
  // Icon styles
  icon: {
    base: 'flex-shrink-0',
    spacing: {
      small: 'mr-2',
      medium: 'mr-3',
      large: 'mr-4',
    },
  },
  
  // Title styles
  title: {
    small: 'text-sm font-semibold',
    medium: 'text-base font-semibold',
    large: 'text-lg font-semibold',
  },
}

// Icon mapping for variants
const variantIcons = {
  info: 'info',
  success: 'checkCircle',
  warning: 'warning',
  error: 'xCircle',
}

const Alert = ({
  children,
  variant = 'default',
  size = 'medium',
  title,
  icon,
  showIcon = true,
  onClose,
  className = '',
  ...props
}) => {
  const classes = [
    alertStyles.base,
    alertStyles.variants[variant],
    alertStyles.sizes[size],
    className,
  ].filter(Boolean).join(' ')
  
  const iconName = icon || variantIcons[variant]
  const shouldShowIcon = showIcon && iconName
  
  return (
    <div
      className={classes}
      role="alert"
      {...props}
    >
      <div className="flex">
        {shouldShowIcon && (
          <Icon
            name={iconName}
            size={size}
            className={[
              alertStyles.icon.base,
              alertStyles.icon.spacing[size],
            ].join(' ')}
          />
        )}
        
        <div className="flex-1">
          {title && (
            <h3 className={alertStyles.title[size]}>
              {title}
            </h3>
          )}
          <div className={title ? 'mt-1' : ''}>
            {children}
          </div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 hover:opacity-75 transition-opacity"
            aria-label="Close alert"
          >
            <Icon name="x" size="small" />
          </button>
        )}
      </div>
    </div>
  )
}

// Convenience components
Alert.Info = (props) => <Alert variant="info" {...props} />
Alert.Success = (props) => <Alert variant="success" {...props} />
Alert.Warning = (props) => <Alert variant="warning" {...props} />
Alert.Error = (props) => <Alert variant="error" {...props} />

export default Alert