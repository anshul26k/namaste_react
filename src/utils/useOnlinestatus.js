import { useEffect, useState } from "react"

const useOnlinestatus=()=>{

    const [stat,setstat]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
                setstat(false)
              })
    
        window.addEventListener("online",()=>{
               setstat(true)
             })
    },[])

    return stat;
}

export default useOnlinestatus