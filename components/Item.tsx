'use client'
import './../styles/Item.css'
import { DataTypeText, useGlobalContext } from '@/context/store'

interface Prop{
  item:DataTypeText
}
export default function Item ({ item }:Prop) {
  const { setIsActive } = useGlobalContext()
  const handleClickItem = () => {
    setIsActive({ ...item })
  }
  return (
    <div
      className='itemContainer'
      onClick={handleClickItem}
    >
      <h4 className='itemContainerTitle'>{item.title}</h4>
      <div>
        <p className='itemContainerText'>{item.text && item.text.slice(0, 20)}.</p>
        <p className='itemContainerText'>{item.date && `${new Date(item.date).toLocaleTimeString()}`}</p>
      </div>
      <button className='itemContainerButtonClose'>X</button>
      <button className='itemContainerButtonFavorite'>▲</button>
    </div>
  )
};
