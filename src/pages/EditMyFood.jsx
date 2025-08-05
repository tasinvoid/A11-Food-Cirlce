import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const EditMyFood = () => {
  const { user } = useContext(AuthContext);
  const tipToEdit = useLoaderData();
  console.log(tipToEdit);
  const {
    Email,
    Name,
    foodName,
    availability,
    expiredDate,
    additionalNotes,
    pickupLocation,
    photoURL,
    foodQuantity,
    _id,
  } = tipToEdit[0];
  function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const foodData = Object.fromEntries(formData.entries());
    console.log(foodData);

    // send data to backend
    fetch(`https://food-circle-server-plum.vercel.app/editMyFood/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          background: "#191E24",
          foodName: "Successfully added",
          text: "Successfully added data in DB",
          icon: "success",
        });
      });
  }
  return (
    <div>
      <div className="my-5">
        <form
          onSubmit={handleOnSubmit}
          className="text-4xl font-extrabold text-yellow-400 mb-6 text-center  "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">foodName</label>
              <input
                type="text"
                className="input focus:outline-none focus:border-yellow-500"
                defaultValue={foodName}
                name="foodName"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Email</label>
              <input
                type="text"
                className="input"
                name="Email"
                value={user.email}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Name</label>
              <input
                type="text"
                className="input"
                name="Name"
                value={user.displayName}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Food Quantity</label>
              <input
                type="number"
                className="input focus:outline-none focus:border-yellow-500"
                defaultValue={foodQuantity}
                name="foodQuantity"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Expired Date/Time</label>
              <input
                type="date"
                className="input"
                name="expiredDate"
                defaultValue={expiredDate}
              ></input>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Pickup Location</label>
              <input
                type="text"
                className="input focus:outline-none focus:border-yellow-500"
                defaultValue={pickupLocation}
                name="pickupLocation"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Food Photo URL</label>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-yellow-500"
                defaultValue={photoURL}
                name="photoURL"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label w-full">Availability</label>
              <select
                name="availability"
                className="form-select input focus:outline-none focus:border-yellow-500"
                defaultValue={availability}
              >
                <option value="">-- select Availability --</option>
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
              </select>
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
            <label className="label w-full">Additional Notes</label>
            <input
              type="text"
              className="input w-full h"
              name="additionalNotes"
              defaultValue={additionalNotes}
            />
          </fieldset>
          <input
            type="submit"
            className="btn w-full text-xl font-extrabold text-yellow-400 rounded-xl pt-2 pb-6 "
            value="Add Food"
          />
        </form>
      </div>
    </div>
  );
};

export default EditMyFood;
