import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";

const AvailableFoods = () => {
  const {
    data: availableFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const res = await fetch(
        "https://food-circle-server-plum.vercel.app/allFoods"
      );
      return res.json();
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
  if (isError) {
    return;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-3 mt-5">
      {availableFoods.map((food, index) => (
        <div
          key={index}
          className=" p-4 rounded-lg  border border-base-300 rounded-box shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col justify-between items-center "
        >
          <img
            src={food.photoURL}
            alt={food.Name}
            className="w-48 h-48 object-cover object-center m-10 rounded-2xl"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-yellow-400 mb-3">
              {food.foodName}
            </h2>
            <p className="text-gray-300 mb-4 text-lg">{}</p>
            <div className="grid grid-cols-2 gap-2 text-md">
              <p>
                <strong className="text-yellow-400">Quantity:</strong>{" "}
                {food.foodQuantity}
              </p>
              <p>
                <strong className="text-yellow-400">exp:</strong>{" "}
                {food.expiredDate}
              </p>
              <p>
                <strong className="text-yellow-400">Location:</strong>{" "}
                <span className={`font-semibold `}>
                  {console.log(food)}
                  {food.pickupLocation}
                </span>
              </p>
              <p>
                <strong className="text-yellow-400">Availability:</strong>{" "}
                {food.availability}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>Shared by: {food.Name}</p>
              <p>Contact: {food.Email}</p>
            </div>
          </div>
          <div>
            <Link to={`/availableFoods/${food._id}`}>
              <button className="btn btn-warning  ">details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableFoods;
