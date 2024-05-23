import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CDN_IMG,Menu_Api } from '../utils/constants';
import Shimmer from './Shimmer';
import useRestramenu from '../utils/useRestramenu';
import RestrauCategory from './RestrauCategory';


const Restaurant = () => {
    // const [resmenu,setresmenu] = useState(null);
    const {resid} = useParams();
    
    const resmenu = useRestramenu(resid);
    // console.log(resmenu)

    const [showindex,setshowindex] = useState(null);
  
   if(resmenu===null)return( <Shimmer/>)


    const {name,id,cloudinaryImageId,costForTwoMessage,cuisines
    } = resmenu?.data?.cards[2]?.card?.card?.info;
    
    const list = resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
    // {console.log(resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)}
    const categories =  resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((it)=>it?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // {console.log(categories)}
  return (
    <div className='text-center'>
        {/* <img src={CDN_IMG+cloudinaryImageId} style={{height:"100px"}}/> */}
        <h2 className='font-bold py-5 text-2xl'>{name}</h2>
        <p className='font-bold text-lg'>{cuisines.join(", ")} - {costForTwoMessage}</p>

        {categories.map((category,index)=>{
               return  <RestrauCategory key={category?.card?.card.title} data={category?.card?.card} showItem={index==showindex && true} setindex={()=>{setshowindex(index)}} />
        })}

        

        {/* <h4>Menu</h4>
        {
            list?.map((it) => {
            console.log(it.card.info.name)
            return <h2 key={it.card.info.name}>{it.card.info.name}-{it.card.info.price}</h2>;
            })
        }
         */}
    </div>
  )
}

export default Restaurant

