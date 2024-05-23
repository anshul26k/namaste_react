import {CDN_IMG} from "../utils/constants";
import UserContext from '../utils/UserContext'
import { useContext } from 'react'

const Card = (props) => {
    // console.log(props)
    const {userlog} = useContext(UserContext)
    const { resdata } = props;
    const { name, cuisines, avgRating, costForTwo,
      cloudinaryImageId } = resdata.info;
    return (
      <div
        className="m-4 p-4 w-[260px] h-[300px] rounded-lg bg-slate-400 hover:bg-slate-600 overflow-hidden"
       
      >
        <img
          src={CDN_IMG+
            cloudinaryImageId}
          alt="Biryani"
          className="card-img rounded-lg h-32 w-56"
        />
        <h4 className="font-bold py-1 text-lg">{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{userlog}</h4> */}

      </div>
    );
  };

export const Updatedcard=(Card)=>{
      return (props)=>{
           return (
               <div>
                <label className="absolute bg-black text-yellow-200 px-2 rounded-lg">Top Rated</label>
                <Card {...props}/>
               </div>
           )
      }
}

export default Card;  