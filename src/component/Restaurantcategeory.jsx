import React, { useState } from 'react'
import Items from './Items'

const Restaurantcategeory = (props) => {
    const [showitem,setshowitems]=useState(false)
 const handleClick=()=>{
    setshowitems(!showitem);
 }
  return (
    <>
   <div>
   <div className='text-center items-center  w-6/12 bg-gray-50 p-4 shadow-lg mx-auto my-3'>
       <div className='flex justify-between cursor-pointer font-semibold capitalize' onClick={handleClick}>
       <span>{props.data.title}({props.data.itemCards.length})</span>
        <span>🔽</span>
       </div>
       {showitem && <Items items={props?.data?.itemCards}/>}
    </div>
    
   </div>
    </>
  )
}

export default Restaurantcategeory