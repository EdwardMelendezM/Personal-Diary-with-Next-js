import './../styles/Item.css'
export default function Item () {
  return (
    <div className='itemContainer'>
      <h4 className='itemContainerTitle'>Un dia mas</h4>
      <div>
        <p className='itemContainerText'>Hoy vi una peli her...</p>
        <p className='itemContainerText'>Miercoles 4 de Febrero 2023</p>
      </div>
      <button className='itemContainerButtonClose'>X</button>
      <button className='itemContainerButtonFavorite'>▲</button>
    </div>
  )
};
