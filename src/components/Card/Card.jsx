import React from 'react'
import'./Card.css'

function Card({card}) {
  return (
    <div className='tamaktar2'>
           <div className='cards2'>
             <div className='card'>
             <img src={card.strMealThumb} alt="" />
             <p>{card.strMeal}</p>
             </div>
           </div>
         </div>
  )
}

export default Card
