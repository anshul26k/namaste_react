import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import { clearCart } from '../utils/cartslice';
function Cart() {
    const data = useSelector((store)=>(store.cart.items))
    // console.log(data)
    const dispatch = useDispatch();
    const handleclear = () =>{
         dispatch(clearCart());
    }
  return (
    <div className='p-4 m-4 text-center '>
        <h1 className='font-bold text-lg'>Cart</h1>
        <button className='font-semibold text-lg bg-slate-600 px-2' onClick={handleclear}> Clear</button>
        <div className='w-6/12 m-auto'>
            <ItemCard items={data}/>
        </div>
    </div>
  )
}

export default Cart