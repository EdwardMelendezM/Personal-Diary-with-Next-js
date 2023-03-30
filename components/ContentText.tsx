'use client'
import './../styles/ContentText.css'
import { ChangeEvent, useState } from 'react'
import ButtonGuardar from './ButtonGuardar'

export default function ContentText () {
  const [texto, setTexto] = useState<string>('')

  function handleChange (event:ChangeEvent<HTMLTextAreaElement>) {
    setTexto(event.target.value)
  }
  return (
    <>
      <div className='block-de-notas'>
        <textarea
          value={texto} onChange={handleChange} className='block-de-notas-textarea' rows={10}
          cols={30}
          placeholder='Hoy miercoles 12 hize muchas cosas. Me levante temprano y ayude a mis padres. Luego desayune algo ricooo.'
        />
        <ButtonGuardar />
      </div>
    </>
  )
};
