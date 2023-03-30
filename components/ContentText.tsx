'use client'
import './../styles/ContentText.css'
import { ChangeEvent, useEffect, useState } from 'react'
import ButtonGuardar from './ButtonGuardar'
import { useGlobalContext } from '@/context/store'

export default function ContentText () {
  const { isActive } = useGlobalContext()
  const [texto, setTexto] = useState<string>('')
  useEffect(() => {
    if (isActive.text && isActive.text !== '') {
      setTexto(isActive.text)
    }
  }, [isActive])

  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setTexto(event.target.value)
  }
  return (
    <>
      <div className='block-de-notas'>
        <textarea
          value={texto}
          onChange={handleChange}
          className='block-de-notas-textarea'
          rows={10}
          cols={30}
          placeholder='Hoy miercoles 12 hize muchas cosas. Me levante temprano y ayude a mis padres. Luego desayune algo ricooo.'
        />
        <ButtonGuardar newText={texto} id={isActive.id ? isActive.id : null} />
      </div>
    </>
  )
};
