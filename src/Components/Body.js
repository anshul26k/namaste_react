import Card from "./Card";
import resList from "../utils/mockdata";
import { useState } from "react";

  
  const Body = () => {
      //  state variona similar like
      //  let list = [{},{}]
        const [list,setlist] = useState(resList)

    // let newlist =;
    return (
      <div className="body">
        <div className="search">
        <button onClick={()=>{
          let newlist = list.filter((it)=>it.data.avgRating>4.0)
          setlist(newlist)
         }}>Click here</button>
        </div>
        <div className="rest-container">
          {list.map((restrau) => (
            <Card key={restrau.data.id} resdata={restrau} />
          ))}
        </div>
      </div>
    );
  };

  export default Body