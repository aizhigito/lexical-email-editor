import './index.css'

import React from 'react'

type Props = Readonly<{
  accept?: string;
  label: string;
  onChange: (files: FileList | null) => void;
}>;

export default function FileInput({
                                    accept,
                                    label,
                                    onChange,
                                  }: Props): React.ReactElement {
  return (
    <div className="Input__wrapper">
      <label className="Input__label">
        {label}
        <input
          type="file"
          accept={accept}
          className="Input__input file"
          onChange={(e) => onChange(e.target.files)}
        />
      </label>
    </div>
  )
}