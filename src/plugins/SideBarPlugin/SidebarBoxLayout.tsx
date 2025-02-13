import React from 'react'

interface SidebarBoxLayoutProps {
  onDelete: () => void
  onClose: () => void
  children: React.ReactNode
}

export const SidebarBoxLayout: React.FC<SidebarBoxLayoutProps> = ({onDelete, onClose, children}) => {
  return (
    <div className="column-layout-box">
      <div className="column-layout-box-header">
        <button type="button" className="column-layout-action-button" onClick={onDelete}><i className="action trash"/></button>
        <button type="button" className="column-layout-action-button" onClick={onClose}><i className="action xmark"/></button>
      </div>
      {children}
    </div>
  )
}