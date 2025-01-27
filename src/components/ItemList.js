import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

const ItemList = ({ items, showAddButton = true }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [addedCount, setAddedCount] = useState({}); // Track added count per item

  const handleAddItem = (item) => {
    
    // Dispatch an action
    dispatch(addItem(item));

    // Increment the count for the specific item
    setAddedCount((prevState) => {
      const newCount = prevState[item.card.info.id]
        ? prevState[item.card.info.id] + 1
        : 1;
      return {
        ...prevState,
        [item.card.info.id]: newCount,
      };
    });
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-6 m-4 border-b border-gray-300 flex justify-between items-center rounded-lg shadow-lg"
        >
          {/* Food Info Section */}
          <div className="w-9/12">
            <div className="font-semibold text-lg">
              <span>{item.card.info.name}</span>
              <span className="ml-4 text-green-600">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {item.card.info.description || "No description available."}
            </p>
          </div>

          {/* Image and Button Section */}
          <div className="w-3/12 flex flex-col items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name || "Food item"}
              className="w-32 h-32 object-cover rounded-lg"
            />
            {showAddButton && (
              <button
                className="mt-4 px-6 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 shadow-md transition-all"
                onClick={() => handleAddItem(item)}
              >
                {addedCount[item.card.info.id] ? (
                  `Added (${addedCount[item.card.info.id]})`
                ) : (
                  "Add +"
                )}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
