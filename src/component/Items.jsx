import React from 'react';
const cdn_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Items = ({items}) => {
  return (
    <div>
        <span>{items?.card?.info?.name}</span>
        {
           items && items.map((item)=>(
            <div key={item?.card?.info?.id} className='p-2 m-2 border border-b-2 border-blue-100 text-left flex justify-between'>
                
        <div className='w-9/12'>
        <div className='p-2'>
                <span>{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}</span>
             </div>
             <div>
                { <p className='text-xs text-gray-600'>{item?.card?.info?.description}</p>}
             </div>
        </div>
             <div className=' w-3/12 p-4'>
                <div className=' absolute'>
                <button className=' shadow-lg mx-10 bg-black text-white capitalize p-2 rounded '>add +</button>
                </div>
             <img src={cdn_url + item?.card?.info?.imageId
} alt={item?.card?.info?.name} className=' w-full'/>
            
             </div>
            </div>
           ))
        }
    </div>
  )
}

export default Items