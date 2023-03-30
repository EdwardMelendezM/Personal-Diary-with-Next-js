'use client'
import './../styles/List.css'
import Item from './Item'
import { useGlobalContext } from '@/context/store'
import ButtonAdd from './ButtonAdd'
export default function List () {
  const { data } = useGlobalContext()

  return (
    <div className='containerList'>
      <h1 className='containerListTitle'>Mis dias</h1>
      <ButtonAdd />
      <div className='containerListItem'>
        {data.map(item => <Item key={item.id} item={item} />)}
      </div>

    </div>
  )
};
