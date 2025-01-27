import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="my-4">
      {/* Category Header */}
      <div className="w-full sm:w-6/12 mx-auto bg-gray-50 shadow-lg p-4 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        <div
          className="flex justify-between cursor-pointer items-center"
          onClick={handleClick}
        >
          <span className="font-bold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`transition-transform ${showItems ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </div>

        {/* Show Items if the flag is true */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
