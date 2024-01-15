import React from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../component/Shimmer';
import {  menuimg } from '../util/contant';
import userestromenu from '../util/userestromenu';
import useOnline from '../util/useOnline';
import Restaurantcategeory from '../component/Restaurantcategeory';
const Restromenupage = () => {
// const [resinfo,setresinfo]=useState(null);
    const {resid}=useParams();
const resinfo=userestromenu(resid);

if(resinfo===null) return<Shimmer/>;
const {name,costForTwoMessage,cuisines}=resinfo?.cards[0]?.card?.card?.info || {};
const {itemCards,
}=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card || {};
;

// console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
 const catogery=resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//  console.log(catogery)
  return (
    <div className='menu text-center '>
    <div className="menu-name">
    <h1 className='font-bold my-6 text-2xl capitalize'>{name}</h1>
    <p>{cuisines.join(",")}-{costForTwoMessage}</p>
      {
      catogery && catogery.map((item)=>(
       <Restaurantcategeory data={item?.card?.card}/> 
        ))
      }
   
       
   </div>
    <div className='menu-item'>
    <h2>menu</h2>
     
    </div>
</div>
  )
}

export default Restromenupage