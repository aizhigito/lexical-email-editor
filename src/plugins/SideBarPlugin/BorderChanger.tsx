import {DropdownColorPicker} from '../../ui/ColorPicker'
import React, {useEffect, useState} from 'react'

export type BorderType = [[number, string], [number, string], [number, string], [number, string]]

interface BorderChangerProps {
  border: BorderType
  onUpdate: (border: BorderType, elem?: HTMLElement) => void
}

type BorderColorState = {
  borderTopColor: string
  borderRightColor: string
  borderBottomColor: string
  borderLeftColor: string
}

type BorderWidthState = {
  borderTopWidth: number
  borderRightWidth: number
  borderBottomWidth: number
  borderLeftWidth: number
}

type BorderState = BorderColorState & BorderWidthState

const inputs: { key: keyof BorderWidthState, label: string, colorKey: keyof BorderColorState }[] = [
  {key: 'borderTopWidth', label: 'Top', colorKey: 'borderTopColor'},
  {key: 'borderRightWidth', label: 'Right', colorKey: 'borderRightColor'},
  {key: 'borderBottomWidth', label: 'Bottom', colorKey: 'borderBottomColor'},
  {key: 'borderLeftWidth', label: 'Left', colorKey: 'borderLeftColor'},
]

export const BorderChanger: React.FC<BorderChangerProps> = ({border, onUpdate}) => {
  const [state, setState] = useState<BorderState>({
    borderTopWidth: border[0][0],
    borderTopColor: border[0][1],
    borderRightWidth: border[1][0],
    borderRightColor: border[1][1],
    borderBottomWidth: border[2][0],
    borderBottomColor: border[2][1],
    borderLeftWidth: border[3][0],
    borderLeftColor: border[3][1],
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const {value} = e.target
    const newBorder = {...state, [key]: Number(value)}
    setState(newBorder)
    onUpdate([
      [newBorder.borderTopWidth, newBorder.borderTopColor],
      [newBorder.borderRightWidth, newBorder.borderRightColor],
      [newBorder.borderBottomWidth, newBorder.borderBottomColor],
      [newBorder.borderLeftWidth, newBorder.borderLeftColor],
    ], e.target)
  }

  useEffect(() => {
    setState({
      borderTopWidth: border[0][0],
      borderTopColor: border[0][1],
      borderRightWidth: border[1][0],
      borderRightColor: border[1][1],
      borderBottomWidth: border[2][0],
      borderBottomColor: border[2][1],
      borderLeftWidth: border[3][0],
      borderLeftColor: border[3][1],
    })
  }, [border])

  return (
    <div className="border-adjuster">
      {inputs.map((input) => (
        <div key={input.key} className="range-input-box">
          <label>{input.label}<span>({state[input.key]}px)</span></label>
          <input
            type="range"
            min="0"
            max="75"
            step="1"
            value={state[input.key]}
            list="border-ticks"
            onChange={e => {
              onChange(e, input.key)
            }}
          />
          <DropdownColorPicker
            buttonClassName="color-picker"
            color={state[input.colorKey]}
            onChange={(color, _skip, _name, elem) => {
              const newBorder = {...state, [input.key.replace('Width', 'Color')]: color}
              setState(newBorder)
              onUpdate([
                [newBorder.borderTopWidth, newBorder.borderTopColor],
                [newBorder.borderRightWidth, newBorder.borderRightColor],
                [newBorder.borderBottomWidth, newBorder.borderBottomColor],
                [newBorder.borderLeftWidth, newBorder.borderLeftColor],
              ], elem)
            }
            }
          />
        </div>
      ))}
    </div>
  )
}