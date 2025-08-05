import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const UsersRequestedFoods = () => {
  const { user } = useContext(AuthContext);
  console.log(user.accessToken);
  const currentUserEmail = user.email;
  const {
    data: currentUserRequestedFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["currentUserRequestedFoods"],
    queryFn: async () => {
      const res = await fetch(
        `https://food-circle-server-plum.vercel.app/requestedFoods?Email=${currentUserEmail}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
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
  console.log(currentUserRequestedFoods);
  return (
    <div>
      <div>
        <div className="lg:overflow-x-auto lg:px-50  my-10">
          <table className="table border border-yellow-400">
            {/* head */}
            <thead>
              <tr className="border border-yellow-400 text-center">
                <th className="hidden lg:block">Number</th>
                <th>Name</th>
                <th>Expiry Date</th>
                <th className="hidden lg:block">Quantity</th>
                <th>Request Time</th>
              </tr>
            </thead>
            <tbody>
              {currentUserRequestedFoods.map((userData, index) => (
                <tr key={index} className="border border-yellow-400">
                  <th className="hidden lg:block">{index + 1}</th>
                  <td>
                    <div className="flex flex-col text-center lg:flex-row items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={`${userData.photoURL}`}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="font-bold">{userData.foodName}</div>
                        <div className="text-sm opacity-50 ">
                          {userData.pickupLocation}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className=" text-center">{userData.expiredDate}</span>
                  </td>

                  <td className="text-center">{userData.foodQuantity}</td>
                  <td className="hidden lg:block text-center">
                    {userData.requestTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersRequestedFoods;
