import React from 'react'
import './index.css'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label: string
}

export const TextInput: React.FC<TextInputProps> = ({label, ...props}) => {
  return (
    <div className="Input__wrapper">
      <label className="Input__label">{label}</label>
      <input className="Input__input" {...props} />
    </div>
  )
}