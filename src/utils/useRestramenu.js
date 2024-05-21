import React, { useEffect, useState } from 'react'
import { Menu_Api } from '../utils/constants';
function useRestramenu(resid) {
    const [resinfo,setresinfo] = useState(null);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async ()=>{
        const temp = await fetch(Menu_Api+resid);

        const menu = await temp.json();
        console.log(menu?.data?.cards[2]?.card?.card?.info);
        setresinfo(menu?.data?.cards[2]?.card?.card?.info);
    }

    return resinfo;
}

export default useRestramenu