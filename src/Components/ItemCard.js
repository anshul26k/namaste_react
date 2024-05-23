import React from 'react'
import { CDN_IMG } from '../utils/constants'


function ItemCard({items}) {
    // console.log(items)
   
  return (
                <div>
                    {
                        items.map((it)=>(
                              <div key={it.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-around">

                                <div className='w-9/12'>
                                <div className='py-2'>
                                <span>{it.card.info.name}</span>
                                <span> - ₹{it.card.info.price/100}</span>
                                </div>
                                <p className='text-xs'>
                                    {it.card.info.description}
                                </p>
                              </div>

                                <div className=' w-3/12'>
                                    <div className='absolute '>
                                        <button  className=' p-1 m-auto bg-slate-300  shadow-lg'>Add+</button>
                                    </div>
                                    <img src={CDN_IMG+it.card.info.imageId}/>
                                </div>
                              </div>
                        ))
                    }
                </div>
  )
}

export default ItemCard