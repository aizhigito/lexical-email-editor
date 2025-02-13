import {useContext} from 'react'
import {HistoryContext} from '../context/historyContext.ts'

export const useSharedHistory = () => {
  return useContext(HistoryContext)
}