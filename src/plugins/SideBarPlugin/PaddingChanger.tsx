import React, {useEffect} from 'react'

interface PaddingChangerProps {
  padding: [number, number, number, number],
  onUpdate: (padding: [number, number, number, number], elem: HTMLInputElement) => void
}

type PaddingState = {
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  paddingBottom: number,
}

const inputs: { key: keyof PaddingState, label: string }[] = [
  {key: 'paddingLeft', label: 'Left'},
  {key: 'paddingRight', label: 'Right'},
  {key: 'paddingTop', label: 'Top'},
  {key: 'paddingBottom', label: 'Bottom'},
]

export const PaddingChanger: React.FC<PaddingChangerProps> = ({padding, onUpdate}) => {
  const [state, setState] = React.useState<PaddingState>({
    paddingTop: padding[0],
    paddingRight: padding[1],
    paddingBottom: padding[2],
    paddingLeft: padding[3],
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const {value} = e.target
    const newPadding = {...state, [key]: Number(value)}
    setState(newPadding)
    onUpdate([newPadding.paddingTop, newPadding.paddingRight, newPadding.paddingBottom, newPadding.paddingLeft], e.target)
  }

  useEffect(() => {
    setState({
      paddingTop: padding[0],
      paddingRight: padding[1],
      paddingBottom: padding[2],
      paddingLeft: padding[3],
    })
  }, [padding])

  return (
    <div className="padding-adjuster">
      {inputs.map((input) => (
        <div key={input.key} className="range-input-box">
          <label>{input.label}<span>({state[input.key]}px)</span></label>
          <input
            type="range"
            min="0"
            max="75"
            step="1"
            value={state[input.key]}
            list="padding-ticks"
            onChange={e => {
              onChange(e, input.key)
            }}
          />
        </div>
      ))}
      <datalist id="padding-ticks">
        <option value="0"/>
        <option value="25"/>
        <option value="50"/>
        <option value="75"/>
      </datalist>
    </div>
  )
}