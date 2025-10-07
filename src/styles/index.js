// Centralized exports for all design system utilities
export * from './colors'
export * from './typography'
export * from './spacing'
export * from './interactive'
export * from './carousel-styles'

// Re-export commonly used combinations for convenience
import { colors } from './colors'
import { typography } from './typography'
import { spacing } from './spacing'
import { interactive } from './interactive'
import { carouselStyles } from './carousel-styles'

export {
  colors,
  typography,
  spacing,
  interactive,
  carouselStyles
}

// Named exports for convenience
export const textStyles = typography
export const layoutStyles = spacing
export const buttonStyles = interactive
export const carouselConfig = carouselStyles
