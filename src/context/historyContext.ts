import type {HistoryState} from '@lexical/react/LexicalHistoryPlugin'
import {createContext} from 'react'

type HistoryContextType = {
  historyState?: HistoryState
}

export const HistoryContext = createContext<HistoryContextType>({})