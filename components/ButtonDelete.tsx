import { DataTypeText, useGlobalContext } from '@/context/store'
interface Props{
  item:DataTypeText
}
export default function ButtonDelete ({ item }:Props) {
  const { data, setData } = useGlobalContext()
  const handleRemoveItem = () => {
    if (item.id) {
      const temp = data.filter(i => i.id !== item.id)
      setData([...temp])
    }
  }
  return (
    <button className='itemContainerButtonClose' onClick={handleRemoveItem}>X</button>
  )
};
