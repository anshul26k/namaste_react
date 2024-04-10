import {CDN_IMG} from "../utils/constants";

const Card = (props) => {
    // console.log(props)
    const { resdata } = props;
    const { name, cuisines, avgRating, costForTwo,
      cloudinaryImageId } = resdata.info;
    return (
      <div
        className="card"
        style={{
          backgroundColor: "red",
        }}
      >
        <img
          src={CDN_IMG+
            cloudinaryImageId}
          alt="Biryani"
          className="card-img"
        />
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

export default Card;  