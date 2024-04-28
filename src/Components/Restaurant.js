import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CDN_IMG,Menu_Api } from '../utils/constants';
import Shimmer from './Shimmer';


const Restaurant = () => {
    const [resmenu,setresmenu] = useState(null);
    const {resid} = useParams();
    

    useEffect(()=>{
        fetchMenu();
    },[])



const fetchMenu = async () =>{
    const temp = await fetch(Menu_Api+resid);

    const menu = await temp.json();
    console.log(menu?.data?.cards[2]?.card?.card?.info);
    setresmenu(menu?.data?.cards[2]?.card?.card?.info);
}
  
   if(resmenu===null)return( <Shimmer/>)


    const {name,id,cloudinaryImageId,costForTwoMessage,cuisines
    } = resmenu;

  return (
    <div className='menu'>
        <img src={CDN_IMG+cloudinaryImageId} style={{height:"100px"}}/>
        <h2>{name}</h2>
        <h3>{id}</h3>
        <h3>{costForTwoMessage}</h3>
        <h4>{cuisines}</h4>
    </div>
  )
}

export default Restaurant