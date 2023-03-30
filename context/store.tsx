
'use client'

import { allData } from '@/data/Data'
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect } from 'react'

export type DataTypeText={
  id?:number;
  title?:string;
  text?:string;
  date?:number
}

interface ContextProps {
    isActive:DataTypeText,
    setIsActive:Dispatch<SetStateAction<DataTypeText>>;

    data: DataTypeText[],
    setData: Dispatch<SetStateAction<DataTypeText[]>>
}

const GlobalContext = createContext<ContextProps>({
  isActive: {},
  setIsActive: () => { },

  data: [],
  setData: () => []

})

export const GlobalContextProvider = ({ children }:any) => {
  const [isActive, setIsActive] = useState({})
  const [data, setData] = useState<[] | DataTypeText[]>([])
  useEffect(() => {
    setData(allData)
  }, [data])

  return (
    <GlobalContext.Provider value={{ isActive, setIsActive, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
