import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>Loading user...</div>;
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const foodData = Object.fromEntries(formData.entries());

    // send data to backend
    fetch("https://food-circle-server-plum.vercel.app/addFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            background: "#191E24",
            title: "Successfully added",
            text: "Successfully added data in DB",
            icon: "success",
          });
          form.reset();
        }
      });
  }

  return (
    <div className="lg:p-24 pt-5 ">
      <div className="p-12 text-center pt-0">
        <h1 className="text-3xl text-yellow-400 bolder pb-5">Add a Food</h1>
        <p>
          Every contribution, no matter how small, makes a significant
          difference in our community. If you have surplus food – whether it's
          an extra harvest from your garden, unused pantry staples, or delicious
          leftovers that won't go to waste – we encourage you to share it here.
        </p>
      </div>
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
              placeholder="foodName"
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
              placeholder="Food Quantity"
              name="foodQuantity"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Expired Date/Time</label>
            <input type="date" className="input" name="expiredDate"></input>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Pickup Location</label>
            <input
              type="text"
              className="input focus:outline-none focus:border-yellow-500"
              placeholder="Pickup Location"
              name="pickupLocation"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Food Photo URL</label>
            <input
              type="text"
              className="input w-full focus:outline-none focus:border-yellow-500"
              placeholder="Photo URL"
              name="photoURL"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label w-full">Availability</label>
            <select
              name="availability"
              className="form-select input focus:outline-none focus:border-yellow-500"
              value={"available"}
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
            placeholder="Type here"
            className="input w-full h"
            name="additionalNotes"
            defaultValue={"Enter notes"}
          />
        </fieldset>
        <input
          type="submit"
          className="btn w-full text-xl font-extrabold text-yellow-400 rounded-xl pt-2 pb-6 "
          value="Add Food"
        />
      </form>
    </div>
  );
};

export default AddFood;
