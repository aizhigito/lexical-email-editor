import React from 'react'
import {ElementFormatType} from 'lexical'

interface AlignmentButtonProps {
  show: boolean,
  onClick: (formatElement: ElementFormatType) => void
  active: boolean,
  formatElement: ElementFormatType
}

function AlignmentButton({show, onClick, formatElement, active}:AlignmentButtonProps): React.ReactElement | null {
  if (!show) {
    return null
  }
  return (
    <button
      type="button"
      className={`text-format-button ${active ? 'active' : ''}`}
      onClick={() => {
        onClick(formatElement)
      }}
    >
      <i className={`format ${formatElement}-align`}/>
    </button>
  )
}

interface AlignmentsProps{
  currentActive: ElementFormatType,
  onClick: (formatElement: ElementFormatType) => void
  showAlignments?: ElementFormatType[],
}

export function Alignments(
  {
    currentActive,
    onClick,
    showAlignments = ['left', 'center', 'right', 'justify'],
  }: AlignmentsProps
): React.ReactElement {
  return (
    <div className="text-format-box">
      <AlignmentButton
        show={showAlignments.includes('left')}
        onClick={onClick}
        formatElement="left"
        active={currentActive === 'left'}
      />
      <AlignmentButton
        show={showAlignments.includes('center')}
        onClick={onClick}
        formatElement="center"
        active={currentActive === 'center'}
      />
      <AlignmentButton
        show={showAlignments.includes('right')}
        onClick={onClick}
        formatElement="right"
        active={currentActive === 'right'}
      />
      <AlignmentButton
        show={showAlignments.includes('justify')}
        onClick={onClick}
        formatElement="justify"
        active={currentActive === 'justify'}
      />
    </div>
  )
}