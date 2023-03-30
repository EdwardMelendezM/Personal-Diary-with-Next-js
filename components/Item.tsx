'use client'
import './../styles/Item.css'
import { DataTypeText, useGlobalContext } from '@/context/store'
import ButtonDelete from './ButtonDelete'

interface Prop{
  item:DataTypeText
}
export default function Item ({ item }:Prop) {
  const { setIsActive } = useGlobalContext()
  const handleClickItem = () => {
    setIsActive({ ...item })
  }

  return (
    <div className='itemContainerMain'>
      <div
        className='itemContainer'
        onClick={handleClickItem}
      >
        <h4 className='itemContainerTitle'>{item.title}</h4>
        <div>
          <p className='itemContainerText'>{item.text && item.text.slice(0, 20)}.</p>
          <p className='itemContainerText'>{item.date && `${new Date(item.date).toLocaleTimeString()}`}</p>
        </div>

      </div>
      <ButtonDelete item={item} />
      <button className='itemContainerButtonFavorite'>▲</button>
    </div>

  )
};
