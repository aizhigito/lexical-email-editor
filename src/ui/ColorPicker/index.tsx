import React, {useEffect, useMemo, useRef, useState} from 'react'
import {transformColor} from './utils'
import {Position} from './types'
import {TextInput} from '../Input/TextInput.tsx'
import {MoveWrapper} from './components/MoveWrapper'
import {DropDown, DropDownProps} from '../DropDown'
import './index.css'

const WIDTH = 214
const HEIGHT = 150
const BASIC_COLORS = [
  '#d0021b',
  '#f5a623',
  '#f8e71c',
  '#8b572a',
  '#7ed321',
  '#417505',
  '#bd10e0',
  '#9013fe',
  '#4a90e2',
  '#50e3c2',
  '#b8e986',
  '#000000',
  '#4a4a4a',
  '#9b9b9b',
  '#ffffff',
]

interface ColorPickerProps {
  color: string
  name?: string
  onChange?: (value: string, skipHistoryStack: boolean, name?: string, elem?: HTMLInputElement) => void
  typeOfColor?: 'color' | 'bg'
}

export const ColorPicker: React.FC<ColorPickerProps> = ({color, onChange, name, typeOfColor = 'color'}) => {
  const [selfColor, setSelfColor] = useState(transformColor('hex', color))
  const [inputColor, setInputColor] = useState(color)
  const innerDivRef = React.useRef<HTMLDivElement>(null)
  const skipAddingToHistoryStack = useRef(false)
  const inputRef = useRef<HTMLInputElement>()

  const saturationPosition = useMemo(
    () => ({
      x: (selfColor.hsv.s / 100) * WIDTH,
      y: ((100 - selfColor.hsv.v) / 100) * HEIGHT,
    }),
    [selfColor.hsv.s, selfColor.hsv.v],
  )

  const huePosition = useMemo(
    () => ({
      x: (selfColor.hsv.h / 360) * WIDTH,
    }),
    [selfColor.hsv],
  )

  const onSetHex = (hex: string) => {
    setInputColor(hex)
    if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      const newColor = transformColor('hex', hex)
      setSelfColor(newColor)
    }
  }

  const onMoveSaturation = ({x, y}: Position) => {
    const newHsv = {
      ...selfColor.hsv,
      s: (x / WIDTH) * 100,
      v: 100 - (y / HEIGHT) * 100,
    }
    const newColor = transformColor('hsv', newHsv)
    setSelfColor(newColor)
    setInputColor(newColor.hex)
  }

  const onMoveHue = ({x}: Position) => {
    const newHsv = {...selfColor.hsv, h: (x / WIDTH) * 360}
    const newColor = transformColor('hsv', newHsv)

    setSelfColor(newColor)
    setInputColor(newColor.hex)
  }

  useEffect(() => {
    if (innerDivRef.current !== null && onChange && selfColor.hex !== color) {
      onChange(selfColor.hex, skipAddingToHistoryStack.current, name, inputRef.current)
      setInputColor(selfColor.hex)
    }
  }, [selfColor, onChange])

  useEffect(() => {
    if (!color || color === 'inherit' || color === 'transparent') {
      return
    }

    const newColor = transformColor('hex', color)
    setSelfColor(newColor)
    setInputColor(newColor.hex)
  }, [color])

  return (
    <div
      ref={innerDivRef}
      style={{width: WIDTH}}
      className="color-picker-wrapper"
    >
      <TextInput
        label="Hex"
        onChange={(e) => {
          onSetHex(e.target.value)
        }}
        value={inputColor}
      />
      <div className="color-picker-wrapper__basic-color">
        {
          typeOfColor === 'color' ? (
            <button
              type="button"
              className={`inherit-color ${'inherit' === inputColor ? 'active' : ''}`}
              onClick={() => {
                setInputColor('inherit')
                setSelfColor(transformColor('hex', 'inherit'))
              }}
            />
          ) : (
            <button
              type="button"
              className={`transparent-color ${'transparent' === inputColor ? 'active' : ''}`}
              onClick={() => {
                setInputColor('transparent')
                setSelfColor(transformColor('hex', 'transparent'))
              }}
            />
          )
        }
        {BASIC_COLORS.map((basicColor) => (
          <button
            type="button"
            className={basicColor === selfColor.hex ? ' active' : ''}
            key={basicColor}
            style={{backgroundColor: basicColor}}
            onClick={() => {
              setInputColor(basicColor)
              setSelfColor(transformColor('hex', basicColor))
            }}
          />
        ))}
      </div>
      <MoveWrapper
        className="color-picker-wrapper__saturation"
        style={{backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)`}}
        onChange={onMoveSaturation}
        skipAddingToHistoryStack={skipAddingToHistoryStack}
      >
        <div
          className="color-picker-wrapper__saturation__cursor"
          style={{
            backgroundColor: selfColor.hex,
            left: saturationPosition.x || 0,
            top: saturationPosition.y || 0,
          }}
        />
      </MoveWrapper>
      <MoveWrapper
        className="color-picker-wrapper__hue"
        onChange={onMoveHue}
        skipAddingToHistoryStack={skipAddingToHistoryStack}
      >
        <div
          className="color-picker-wrapper__hue__cursor"
          style={{
            backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)`,
            left: huePosition.x,
          }}
        />
      </MoveWrapper>
      <div
        className="color-picker-wrapper__color"
        style={{backgroundColor: selfColor.hex}}
      />
    </div>
  )
}

interface DropdownColorPickerProps extends Omit<DropDownProps, 'children'>, ColorPickerProps {
}

export const DropdownColorPicker: React.FC<DropdownColorPickerProps> = (props) => {
  const {onChange, color, removeChevron = true, buttonClassName = 'color-picker-button', name, ...rest} = props

  return (
    <DropDown
      stopCloseOnClickSelf={true}
      removeChevron={removeChevron}
      buttonClassName={buttonClassName}
      buttonLabel={<span className={`color-fill-rect ${color === 'inherit' || color === 'transparent' ? 'transparent' : ''}`} style={{backgroundColor: color}}/>}
      {...rest}
    >
      <ColorPicker color={color} onChange={onChange} name={name}/>
    </DropDown>
  )
}