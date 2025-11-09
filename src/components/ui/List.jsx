import React, { createContext, useContext } from 'react'
/**
 * List – Semantic list wrapper with spacing control.
 *
 * Props
 * - as: 'ul' | 'ol' | 'div' (sets role="list" when not ul/ol)
 * - spacing: 'none' | 'small' | 'medium' | 'large'
 *
 * List.Item
 * - as: 'li' | 'div'
 */

const listStyles = {
  variant: {
    bullets: '',
    numbers: '',
    none: '',
  },
  spacing: {
    none: 'space-y-0',
    small: 'space-y-2',
    medium: 'space-y-3',
    large: 'space-y-4',
  },
  direction: {
    col: '',
    row: 'flex flex-row items-center',
  },
  gap: {
    none: 'gap-0',
    small: 'gap-2',
    medium: 'gap-4',
    large: 'gap-6',
  },
}

const ListContext = createContext({ isSemanticList: true })

export const List = ({
  as: Component = 'ul',
  spacing = 'small',
  direction = 'col',
  gap = 'none',
  children,
  className = '',
  ...props
}) => {
  const isSemanticList = Component === 'ul' || Component === 'ol'
  const role = isSemanticList ? undefined : 'list'
  const classes = [
    listStyles.direction[direction],
    listStyles.spacing[spacing],
    listStyles.gap[gap],
    className,
  ].filter(Boolean).join(' ')

  return (
    <ListContext.Provider value={{ isSemanticList }}>
      <Component className={classes} role={role} {...props}>
        {children}
      </Component>
    </ListContext.Provider>
  )
}

export const ListItem = ({ children, as: ItemProp, className = '', ...props }) => {
  const { isSemanticList } = useContext(ListContext)
  const Item = ItemProp || (isSemanticList ? 'li' : 'div')
  const role = isSemanticList ? undefined : 'listitem'
  return (
    <Item className={className} role={role} {...props}>
      {children}
    </Item>
  )
}

List.Item = ListItem


