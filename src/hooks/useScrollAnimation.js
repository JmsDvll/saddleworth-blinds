import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
  } = options

  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce,
  })

  const animationStyles = {
    'fade-up': {
      initial: {
        opacity: 0,
        transform: 'translateY(30px)',
      },
      animate: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    'fade-down': {
      initial: {
        opacity: 0,
        transform: 'translateY(-30px)',
      },
      animate: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
    'fade-left': {
      initial: {
        opacity: 0,
        transform: 'translateX(30px)',
      },
      animate: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    'fade-right': {
      initial: {
        opacity: 0,
        transform: 'translateX(-30px)',
      },
      animate: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    'scale': {
      initial: {
        opacity: 0,
        transform: 'scale(0.9)',
      },
      animate: {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    'rotate': {
      initial: {
        opacity: 0,
        transform: 'rotate(-5deg) scale(0.9)',
      },
      animate: {
        opacity: 1,
        transform: 'rotate(0) scale(1)',
      },
    },
  }

  const currentAnimation = animationStyles[animation] || animationStyles['fade-up']

  const style = {
    ...currentAnimation.initial,
    transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    ...(inView ? currentAnimation.animate : {}),
  }

  return { ref, inView, style }
}

// Stagger animation hook for lists
export const useStaggerAnimation = (options = {}) => {
  const {
    staggerDelay = 100,
    ...animationOptions
  } = options

  const refs = useRef([])
  const animations = useRef([])

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
            }, index * staggerDelay)
          }
        })
      },
      {
        threshold: animationOptions.threshold || 0.1,
        rootMargin: animationOptions.rootMargin || '50px',
      }
    )

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [staggerDelay, animationOptions.threshold, animationOptions.rootMargin])

  return { addToRefs }
}