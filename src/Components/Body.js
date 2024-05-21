import Card from "./Card";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  //  state variona similar like
  //  let list = [{},{}]
  const [list, setlist] = useState([]);
  const [filterlist,setfilterlist] = useState("");
  const [searchtext, setsearchtext] = useState("");
  // console.log("hi");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627"
    );
    const res = await data.json();
    console.log(res);
    const cafes =
      res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlist(cafes);
    setfilterlist(cafes);
  };

  const status = useOnlinestatus()
  if(status===false){
    return (<h1>You  r offline</h1>)
  }


  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="sorting">
        <div className="search-box">
          <input
            type="text"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              let temp = list.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilterlist(temp);
            }}
          >
            search
          </button>
        </div>

        <button
          onClick={() => {
            let newlist = list.filter((it) => it.info.avgRating > 4.5);
            setlist(newlist);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="rest-container">
        {filterlist.map((restrau) => (
          <Link key={restrau.info.id}  to={'/restarants/' + restrau.info.id}>
          <Card  resdata={restrau} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
