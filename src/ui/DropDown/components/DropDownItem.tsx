import React, {useEffect, useRef} from 'react'
import {DropDownContext} from '../context'

interface DropDownItemProps {
  children: React.ReactNode
  className: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  title?: string
}

export const DropDownItem: React.FC<DropDownItemProps> = (
  {
    children,
    className,
    onClick,
    title
  }
) => {
  const ref = useRef<HTMLButtonElement>(null)
  const dropDownContext = React.useContext(DropDownContext)

  if (dropDownContext === null) {
    throw new Error('DropDownItem must be used within a DropDown')
  }

  const {registerItem} = dropDownContext

  useEffect(() => {
    if (ref && ref.current) {
      registerItem(ref)
    }
  }, [registerItem])

  return (
    <button
      className={className}
      onClick={onClick}
      ref={ref}
      title={title}
      type="button">
      {children}
    </button>
  )
}