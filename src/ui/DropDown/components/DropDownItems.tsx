import React, {useCallback, useEffect, useMemo, useState} from 'react'
import {DropDownContext} from '../context'

interface DropDownItemsProps {
  children: React.ReactNode
  dropDownRef: React.Ref<HTMLDivElement>
  onClose: () => void
}

export const DropDownItems: React.FC<DropDownItemsProps> = (
  {
    children,
    dropDownRef,
    onClose
  }
) => {
  const [items, setItems] = useState<React.RefObject<HTMLButtonElement>[]>([])
  const [highlightedItem, setHighlightedItem] = useState<React.RefObject<HTMLButtonElement>>()

  const registerItem = useCallback((itemRef: React.RefObject<HTMLButtonElement>) => {
   setItems((prev) => (prev ? [...prev, itemRef] : [itemRef]))
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!items) {
      return
    }

    const key = event.key

    if (['Escape', 'ArrowUp', 'ArrowDown', 'Tab'].includes(key)) {
      event.preventDefault()
    }

    if (key === 'Escape' || key === 'Tab') {
      onClose()
    } else if (key === 'ArrowUp') {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0]
        }
        const index = items.indexOf(prev) - 1
        return items[index === -1 ? items.length - 1 : index]
      })
    } else if (key === 'ArrowDown') {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0]
        }
        return items[items.indexOf(prev) + 1]
      })
    }
  }

  const contextValue = useMemo(() => ({
    registerItem
  }), [registerItem])

  useEffect(() => {
    if(items.length > 0 && !highlightedItem) {
      setHighlightedItem(items[0])
    }

    if (highlightedItem && highlightedItem.current) {
      highlightedItem.current.focus()
    }
  }, [items])

  return (
    <DropDownContext.Provider value={contextValue}>
      <div className="dropdown" ref={dropDownRef} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </DropDownContext.Provider>
  )
}