import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-full sm:w-[300px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col items-center shadow-md transition-shadow duration-300 ease-in-out"
    >
      <img
        className="rounded-lg w-full h-40 object-cover mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg text-center text-gray-800 truncate w-full">{name}</h3>
      <h4
        className="text-sm text-gray-600 text-center overflow-hidden text-ellipsis w-full"
        style={{ maxHeight: "40px" }}
      >
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-sm text-center text-gray-800">{avgRating} ⭐</h4>
      <h4 className="text-sm text-center text-gray-800">{costForTwo}</h4>
      <h4 className="text-sm text-center text-gray-800">{sla?.slaString}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => (
//     <div className="relative">
//       <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md">
//         Promoted
//       </span>
//       <RestaurantCard {...props} />
//     </div>
//   );
// };

export default RestaurantCard;
