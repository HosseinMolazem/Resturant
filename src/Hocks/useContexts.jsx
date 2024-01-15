import React, { useContext } from 'react'
import { GlobalVar } from '../Context/Context'

export default function useContexts() {
  const contexts=useContext(GlobalVar)
  return contexts
}
