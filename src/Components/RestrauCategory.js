import React, { useState } from 'react'
import ItemCard from './ItemCard'

const RestrauCategory = ({data,showItem,setindex}) =>{
    // console.log(data)
    const [flag,setflag] = useState(false)
    // const handleclick = () =>{
    //         setshowItems(!showItems);
    // }
   
    const handleclick = () =>{
            setindex();
            setflag(!flag);
    }

    return(
        <div className='w-6/12 mx-auto my-4 shadow-lg p-4 bg-gray-100'>
            <div className="flex justify-between cursor-pointer" onClick={handleclick}>
            <span>{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>  
            </div>

            <div>
               {flag&&showItem&&<ItemCard items={data.itemCards}/>}
            </div> 
        </div>
        
    )
}

export default RestrauCategory