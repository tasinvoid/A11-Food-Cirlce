import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const FeaturedFoods = () => {
  const { user } = useContext(AuthContext);
  const {
    data: featuredFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featuredFoods"],
    queryFn: async () => {
      const res = await fetch(
        "https://food-circle-server-plum.vercel.app/featuredFoods"
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
    <div>
      <div className="mx-10 ">
        <h1 className="text-4xl font-bold mt-10 text-center text-yellow-600">
          Featured Foods
        </h1>
        <div className="grid grid-cols-1 gap-2 my-5 lg:grid-cols-2 lg:my-10">
          {featuredFoods.map((data, index) => (
            <div
              key={index}
              tabIndex={0}
              className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-center lg:text-left overflow-hidden rounded-2xl opacity-90  text-gray-700 focus:bg-success focus:text-black collapse relative"
            >
              <div className="collapse-title text-2xl font-semibold">
                {data.foodName}
                <div className="absolute bottom-5 right-5 flex items-center gap-3">
                  <div className="text-2xl font-bold">{data.foodQuantity}</div>
                </div>
              </div>
              <div className="collapse-content text-sm mb-5">{data.Email}</div>
            </div>
          ))}
        </div>
      </div>

      {user ? (
        <button className="btn btn-warning">
          <Link to={"/availableFoods"}>Show More</Link>
        </button>
      ) : (
        <button className="btn btn-warning">
          <Link to={"/login"}>Show More</Link>
        </button>
      )}
    </div>
  );
};

export default FeaturedFoods;
