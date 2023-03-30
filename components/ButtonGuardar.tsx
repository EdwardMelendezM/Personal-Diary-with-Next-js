import { useGlobalContext } from '@/context/store'

interface Props{
  newText: string;
  id:number | null;
}
export default function ButtonGuardar ({ newText, id }:Props) {
  const { data } = useGlobalContext()
  const handleClickSaveNewText = () => {
    if (id) {
      const temp = data.find(item => item.id === id)
      if (temp) {
        temp.text = newText
      }
    }
  }
  return (
    <button className='buttonGuardar' onClick={handleClickSaveNewText}>
      Guardar
    </button>
  )
};
