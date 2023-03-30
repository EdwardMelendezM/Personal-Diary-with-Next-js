import { data } from '@/data/Data'
import './../styles/List.css'
import Item from './Item'
export default function List () {
  return (
    <div className='containerList'>
      <h1 className='containerListTitle'>Mis dias</h1>
      <div className='containerListItem'>
        {data.map(item => <Item key={item.id} item={item} />)}
      </div>
    </div>
  )
};
