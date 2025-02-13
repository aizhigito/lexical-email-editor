import React, {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import {DropDownItems} from './components/DropDownItems'
import './index.css'

const DROP_DOWN_PADDING = 4

export interface DropDownProps {
  disabled?: boolean
  buttonAriaLabel?: string
  buttonClassName?: string
  buttonLabel?: React.ReactNode
  children: React.ReactNode
  stopCloseOnClickSelf?: boolean
  title?: string
  removeChevron?: boolean
}

export const DropDown: React.FC<DropDownProps> = (
  {
    buttonClassName,
    children,
    title,
    disabled = false,
    buttonAriaLabel = '',
    buttonLabel,
    stopCloseOnClickSelf = false,
  }
) => {
  const dropDownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [showDropDown, setShowDropDown] = useState(false)

  const handleClose = () => {
    setShowDropDown(false)
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus()
    }
  }

  useEffect(() => {
    const button = buttonRef.current
    const dropDown = dropDownRef.current

    if (showDropDown && button !== null && dropDown !== null) {
      const {top, left} = button.getBoundingClientRect()
      dropDown.style.top = `${top + button.offsetHeight + DROP_DOWN_PADDING}px`
      dropDown.style.left = `${Math.min(
        left,
        window.innerWidth - dropDown.offsetWidth - 20,
      )}px`
    }
  }, [showDropDown])

  useEffect(() => {
    const button = buttonRef.current

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target
        if (stopCloseOnClickSelf) {
          if (
            dropDownRef.current &&
            dropDownRef.current.contains(target as Node)
          ) {
            return
          }
        }
        if (!button.contains(target as Node)) {
          setShowDropDown(false)
        }
      }
      document.addEventListener('click', handle)

      return () => {
        document.removeEventListener('click', handle)
      }
    }
  }, [showDropDown, stopCloseOnClickSelf])
  
  useEffect(() => {
    const handleButtonPositionUpdate = () => {
      if (showDropDown) {
        const button = buttonRef.current
        const dropDown = dropDownRef.current
        if (button !== null && dropDown !== null) {
          const {top} = button.getBoundingClientRect()
          const newPosition = top + button.offsetHeight + DROP_DOWN_PADDING
          if (newPosition !== dropDown.getBoundingClientRect().top) {
            dropDown.style.top = `${newPosition}px`
          }
        }
      }
    }

    document.addEventListener('scroll', handleButtonPositionUpdate)

    return () => {
      document.removeEventListener('scroll', handleButtonPositionUpdate)
    }
  }, [showDropDown])

  return (
    <React.Fragment>
      <button
        type="button"
        disabled={disabled}
        aria-label={buttonAriaLabel}
        className={buttonClassName}
        onClick={() => setShowDropDown(!showDropDown)}
        ref={buttonRef}
        title={title}
      >
        {buttonLabel}
      </button>

      {showDropDown &&
        createPortal(
          <DropDownItems dropDownRef={dropDownRef} onClose={handleClose}>
            {children}
          </DropDownItems>,
          document.body,
        )}
    </React.Fragment>
  )
}