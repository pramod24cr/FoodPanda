// import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRated, setIsTopRated] = useState(false); // New state to track top-rated filter
  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://swiggy-proxy.pramod24cr.workers.dev?type=restaurants"
    );
    const json = await data.json();
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-xl font-semibold text-red-500">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleTopRatedClick = () => {
    setIsTopRated(!isTopRated); // Toggle the state when button is clicked
    if (isTopRated) {
      // If we are in "Top Rated" mode, reset to show all restaurants
      setFilteredRestaurant(listOfRestaurants);
    } else {
      // If not in "Top Rated" mode, filter to show only top-rated restaurants
      const filteredList = listOfRestaurants.filter(
        (res) => res.info.avgRating > 4.2
      );
      setFilteredRestaurant(filteredList);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap justify-between mb-6">
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
          />
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-green-200 transition"
            onClick={() => {

              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            🔍
          </button>
        </div>

        <div className="flex items-center mb-4 lg:mb-0">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg  hover:bg-green-200 transition"
            onClick={handleTopRatedClick}
          >
            {isTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>

        {/* <div className="flex items-center space-x-2">
          <label className="text-lg font-medium">Username</label>
          <input
            className="border border-black p-2 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto"
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
