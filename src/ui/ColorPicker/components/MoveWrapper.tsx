import React, {useRef} from 'react'
import {clamp} from '../utils'
import {Position} from '../types'

interface MoveWrapperProps {
  className?: string
  style?: React.CSSProperties
  onChange: (position: Position) => void
  children: React.ReactNode
  skipAddingToHistoryStack: React.MutableRefObject<boolean>
}

export const MoveWrapper: React.FC<MoveWrapperProps> = (
  {
    className,
    style,
    onChange,
    children,
    skipAddingToHistoryStack,
  },
) => {
  const divRef = useRef<HTMLDivElement>(null)
  const draggedRef = useRef(false)

  const move = (e: React.MouseEvent | MouseEvent): void => {
    if (divRef.current) {
      const {current: div} = divRef
      const {width, height, left, top} = div.getBoundingClientRect()

      const x = clamp(e.clientX - left, width, 0)
      const y = clamp(e.clientY - top, height, 0)

      onChange({x, y})
    }
  }

  const onMouseDown = (e: React.MouseEvent): void => {
    if (e.button !== 0) {
      return
    }

    move(e)

    const onMouseMove = (_e: MouseEvent): void => {
      draggedRef.current = true
      skipAddingToHistoryStack.current = true
      move(_e)
    }

    const onMouseUp = (_e: MouseEvent): void => {
      if (draggedRef.current) {
        skipAddingToHistoryStack.current = false
      }

      divRef.current?.removeEventListener('mousemove', onMouseMove, false)
      divRef.current?.removeEventListener('mouseup', onMouseUp, false)

      move(_e)
      draggedRef.current = false
    }

    divRef.current?.addEventListener('mousemove', onMouseMove, false)
    divRef.current?.addEventListener('mouseup', onMouseUp, false)
  }

  return (
    <div
      ref={divRef}
      className={className}
      style={style}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  )
}