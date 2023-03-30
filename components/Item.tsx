import { Data } from '@/data/data.interface'
import './../styles/Item.css'
interface Prop{
  item:Data
}
export default function Item ({ item }:Prop) {
  return (
    <div className='itemContainer'>
      <h4 className='itemContainerTitle'>{item.title}</h4>
      <div>
        <p className='itemContainerText'>{item.content.slice(0, 20)}.</p>
        <p className='itemContainerText'>{`${new Date(item.date).toLocaleTimeString()}`}</p>
      </div>
      <button className='itemContainerButtonClose'>X</button>
      <button className='itemContainerButtonFavorite'>▲</button>
    </div>
  )
};
