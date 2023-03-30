import { DataTypeText, useGlobalContext } from '@/context/store'

export default function ButtonAdd () {
  const { data } = useGlobalContext()
  const newData:DataTypeText = {
    id: new Date().getTime(),
    title: 'Hoy vivoo',
    text: 'El dia de hoy, ...',
    date: new Date().getTime()
  }
  const handleClickAddNewItem = () => {
    data.push(newData)
    console.log('ADD')
  }
  return (
    <button className='containerListButtonAdd' onClick={handleClickAddNewItem}> + </button>
  )
};
