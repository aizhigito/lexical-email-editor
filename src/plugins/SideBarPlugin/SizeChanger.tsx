import {LexicalEditor} from 'lexical'
import React, {useEffect} from 'react'
import {updateFontSize, updateFontSizeInSelection, UpdateFontSizeType} from './utils.ts'
import {MAX_ALLOWED_FONT_SIZE, MIN_ALLOWED_FONT_SIZE} from '../../constants.ts'

interface SizeSizeChangerProps {
  size: string,
  editor: LexicalEditor,
  name?: string,
  isRoot?: boolean,
  minSize?: number,
  maxSize?: number,
  onUpdate?: (size: number, name?: string) => void
  stepBy?: number
}

/*
 * Component to handle the size in px
 * @param {string} size - the size in px
 * @param {LexicalEditor} activeEditor - the active editor
 * @param {boolean} isRoot - if false and onUpdate is not provided, it will update the font size in the selection, true and onUpdate is not provided, it will update the font size in the root
 * @param {number} minSize - the minimum allowed size
 * @param {number} maxSize - the maximum allowed size
 * @param {function} onUpdate - if provided, it will call this function with the new size, if not provided, it will update the font size in the selection or root
* */
export const SizeChanger: React.FC<SizeSizeChangerProps> = (props) => {
  const {
    size,
    editor,
    onUpdate,
    name,
    stepBy = 1,
    isRoot = false,
    minSize = MIN_ALLOWED_FONT_SIZE,
    maxSize = MAX_ALLOWED_FONT_SIZE,
  } = props
  const [inputValue, setInputValue] = React.useState<string>(size.slice(0, -2))
  const [inputChangeFlag, setInputChangeFlag] = React.useState<boolean>(false)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValueNumber = Number(inputValue)

    if (e.key === 'Tab'){
      return
    }
    if (['e', 'E', '+', '-'].includes(e.key) || isNaN(inputValueNumber)){
      e.preventDefault()
      setInputValue('')
      return
    }
    setInputChangeFlag(true)
    if (e.key === 'Enter' || e.key === 'Escape'){
      e.preventDefault()
      updateFontSizeByInputValue(inputValueNumber)
    }
  }

  const handleInputBlur = () => {
    if (inputValue !== '' && inputChangeFlag) {
      const inputValueNumber = Number(inputValue)
      if (onUpdate) {
        onUpdate(inputValueNumber, name)
      } else {
        updateFontSizeByInputValue(inputValueNumber)
      }
    }
  }

  const updateFontSizeByInputValue = (inputValueNumber: number) => {
    let updatedFontSize = inputValueNumber
    if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
      updatedFontSize = MAX_ALLOWED_FONT_SIZE
    } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
      updatedFontSize = MIN_ALLOWED_FONT_SIZE
    }

    setInputValue(String(updatedFontSize))
    updateFontSizeInSelection(editor, String(updatedFontSize) + 'px', null, isRoot)
    setInputChangeFlag(false)
  }

  useEffect(() => {
    setInputValue(size.slice(0, -2))
  }, [size])

  return (
    <div className="content-width-box">
      <div className="content-width-input">
        <input
          type="number"
          value={inputValue}
          step={stepBy}
          min={minSize}
          max={maxSize}
          onKeyDown={handleKeyPress}
          onBlur={handleInputBlur}
          onChange={e => {
            setInputValue(e.target.value)
          }}
        />
        <span>px</span>
      </div>
      <div className="content-width-adjuster">
        <button
          type="button"
          onClick={() => {
            if (onUpdate !== undefined){
              onUpdate(Number(inputValue) - stepBy, name)
              setInputValue((prev) => Number(prev) - stepBy + '')
            }else {
              updateFontSize(editor, UpdateFontSizeType.decrement, inputValue, isRoot)
            }
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            if (onUpdate !== undefined){
              onUpdate(Number(inputValue) + stepBy, name)
              setInputValue((prev) => Number(prev) + stepBy + '')
            }else {
              updateFontSize(editor, UpdateFontSizeType.increment, inputValue, isRoot)
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}