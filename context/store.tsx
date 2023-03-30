
'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

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

  return (
    <GlobalContext.Provider value={{ isActive, setIsActive, data, setData }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
