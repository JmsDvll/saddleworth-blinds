import React, { forwardRef } from 'react'
import { Icon } from './Icon'

const alertStyles = {
  base: `
    relative
    rounded-lg
    p-4
    transition-all duration-500
    animate-slide-down
    backdrop-blur-sm
    border
    group
  `,
  
  variants: {
    default: `
      bg-gray-800/80
      border-gray-700/50
      text-gray-300
    `,
    info: `
      bg-gradient-to-r from-blue-900/20 to-blue-800/20
      border-blue-500/30
      text-blue-200
      shadow-lg shadow-blue-500/10
    `,
    success: `
      bg-gradient-to-r from-emerald-900/20 to-emerald-800/20
      border-emerald-500/30
      text-emerald-200
      shadow-lg shadow-emerald-500/10
    `,
    warning: `
      bg-gradient-to-r from-amber-900/20 to-amber-800/20
      border-amber-500/30
      text-amber-200
      shadow-lg shadow-amber-500/10
    `,
    error: `
      bg-gradient-to-r from-red-900/20 to-red-800/20
      border-red-500/30
      text-red-200
      shadow-lg shadow-red-500/10
    `,
    ghost: `
      bg-transparent
      border-gray-700/30
      text-gray-400
    `,
  },
  
  sizes: {
    small: 'p-3 text-sm',
    medium: 'p-4 text-base',
    large: 'p-6 text-lg',
  },
  
  // Premium glow effect
  glow: `
    before:absolute before:inset-0
    before:rounded-lg
    before:bg-gradient-to-r
    before:blur-xl
    before:opacity-30
    before:-z-10
    before:transition-opacity
    hover:before:opacity-50
  `,
  
  glowColors: {
    info: 'before:from-blue-500 before:to-blue-600',
    success: 'before:from-emerald-500 before:to-emerald-600',
    warning: 'before:from-amber-500 before:to-amber-600',
    error: 'before:from-red-500 before:to-red-600',
  }
}

// Icon mapping for alert types
const alertIcons = {
  info: 'info',
  success: 'checkCircle',
  warning: 'exclamation',
  error: 'xCircle',
}

// Icon colors for alert types
const iconColors = {
  default: 'text-gray-400',
  info: 'text-blue-400',
  success: 'text-emerald-400',
  warning: 'text-amber-400',
  error: 'text-red-400',
}

export const Alert = forwardRef(({
  children,
  variant = 'default',
  size = 'medium',
  title,
  icon,
  onClose,
  className = '',
  glow = true,
  ...props
}, ref) => {
  const showIcon = icon !== false && (icon || alertIcons[variant])
  const iconName = typeof icon === 'string' ? icon : alertIcons[variant]
  
  const classes = `
    ${alertStyles.base}
    ${alertStyles.variants[variant]}
    ${alertStyles.sizes[size]}
    ${glow && alertGlowColors[variant] ? `${alertStyles.glow} ${alertStyles.glowColors[variant]}` : ''}
    ${className}
  `.trim()

  return (
    <div
      ref={ref}
      className={classes}
      role="alert"
      {...props}
    >
      <div className={`flex items-start`}>
        {showIcon && iconName && (
          <div className={`flex-shrink-0 mr-3`}>
            <Icon 
              name={iconName} 
              size={size === 'small' ? 'small' : 'medium'}
              className={`${iconColors[variant]} ${variant !== 'default' ? 'animate-pulse' : ''}`}
            />
          </div>
        )}
        
        <div className={`flex-1`}>
          {title && (
            <h3 className={`font-semibold mb-1 text-current`}>
              {title}
            </h3>
          )}
          <div className={`text-current opacity-90`}>
            {children}
          </div>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            className={`
              ml-3 -mr-1 -mt-1 p-1
              rounded-lg
              transition-all duration-300
              hover:bg-white/10
              focus:outline-none focus:ring-2 focus:ring-white/20
              group/close
            `}
            aria-label="Close alert"
          >
            <Icon 
              name="x" 
              size="small"
              className={`transition-transform duration-300 group-hover/close:scale-110`}
            />
          </button>
        )}
      </div>
      
      {/* Animated border gradient */}
      <div className={`absolute inset-0 rounded-lg overflow-hidden pointer-events-none`}>
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          bg-gradient-to-r ${alertGlowColors[variant] || ''}
          animate-shimmer bg-[length:200%_100%]
        `}></div>
      </div>
    </div>
  )
})

Alert.displayName = 'Alert'

// Helper for glow colors
const alertGlowColors = {
  info: 'from-blue-500/20 via-blue-400/20 to-blue-500/20',
  success: 'from-emerald-500/20 via-emerald-400/20 to-emerald-500/20',
  warning: 'from-amber-500/20 via-amber-400/20 to-amber-500/20',
  error: 'from-red-500/20 via-red-400/20 to-red-500/20',
}

// Convenience components
Alert.Info = forwardRef((props, ref) => (
  <Alert ref={ref} variant="info" {...props} />
))
Alert.Info.displayName = 'Alert.Info'

Alert.Success = forwardRef((props, ref) => (
  <Alert ref={ref} variant="success" {...props} />
))
Alert.Success.displayName = 'Alert.Success'

Alert.Warning = forwardRef((props, ref) => (
  <Alert ref={ref} variant="warning" {...props} />
))
Alert.Warning.displayName = 'Alert.Warning'

Alert.Error = forwardRef((props, ref) => (
  <Alert ref={ref} variant="error" {...props} />
))
Alert.Error.displayName = 'Alert.Error'