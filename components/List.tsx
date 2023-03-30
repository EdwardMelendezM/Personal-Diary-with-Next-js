'use client'
import { data as newData } from '@/data/Data'
import './../styles/List.css'
import Item from './Item'
import { useGlobalContext } from '@/context/store'
import { useEffect } from 'react'
export default function List () {
  const { data, setData } = useGlobalContext()
  useEffect(() => {
    setData(newData)
  }, [])
  return (
    <div className='containerList'>
      <h1 className='containerListTitle'>Mis dias</h1>
      <div className='containerListItem'>
        {data.map(item => <Item key={item.id} item={item} />)}
      </div>
    </div>
  )
};
