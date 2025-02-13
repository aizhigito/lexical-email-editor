import React, {useMemo} from 'react'
import {createEmptyHistoryState} from '@lexical/react/LexicalHistoryPlugin'
import {HistoryContext} from './historyContext.ts'

interface HistoryProviderProps {
  children: React.ReactNode
}
export const HistoryProvider: React.FC<HistoryProviderProps> = ({children}) => {
  const historyContext = useMemo(
    () => ({historyState: createEmptyHistoryState()}),
    []
  )

  return <HistoryContext.Provider value={historyContext}>{children}</HistoryContext.Provider>
}