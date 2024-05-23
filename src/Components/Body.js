import Card ,{Updatedcard} from "./Card";
import resList from "../utils/mockdata";
import { useEffect, useState,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  //  state variona similar like
  //  let list = [{},{}]
  const [list, setlist] = useState([]);
  const [filterlist,setfilterlist] = useState("");
  const [searchtext, setsearchtext] = useState("");
  const {setusername}=useContext(UserContext);
  // console.log("hi");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627"
    );
    const res = await data.json();
    // console.log(res);
    const cafes =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlist(cafes);
    setfilterlist(cafes);
    // console.log(cafes);
  };

  const status = useOnlinestatus()
  if(status===false){
    return (<h1>You  r offline</h1>)
  }

  const Newcard = Updatedcard(Card)

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="sorting flex">
        <div className="p-4 m-4">
          <input
           className="border border-solid border-black"
            type="text"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-1 bg-green-200 mx-2 rounded-lg"
            onClick={() => {
              let temp = list.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilterlist(temp);
            }}
          >
            search
          </button>

          <button
          onClick={() => {
            let newlist = list.filter((it) => it.info.avgRating > 4.5);
            setlist(newlist);
            setfilterlist(newlist);
          }}
          className="px-3 py-1  bg-green-200 rounded-lg"
        >
          Top rated restaurants
        </button>

            <input className="border border-violet-900" onChange={(e)=>{
                setusername(e.target.value)
            }}></input>
        </div>

       

       
      </div>
      <div className="flex flex-wrap">
        {filterlist.map((restrau) => (
          <Link key={restrau.info.id}  to={'/restarants/' + restrau.info.id}>
            {restrau.info.avgRating>=4.6?(<Newcard resdata={restrau}/>):(<Card  resdata={restrau} />)}    
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
