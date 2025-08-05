import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import Modal from "react-modal";
import { AuthContext } from "../contexts/AuthContext";
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "2.5rem",
    maxWidth: "600px",
    width: "90%",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
};

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const availableFoodsData = useLoaderData();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [additionalNotes, setAdditionalNotes] = useState(
    availableFoodsData[0].additionalNotes
  );
  console.log(user.email);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function handleRequestFood() {
    closeModal();
    fetch(
      `https://food-circle-server-plum.vercel.app/updateAdditionalNotes/${availableFoodsData[0]._id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          message: additionalNotes,
          currentUserEmail: user.email,
          requestTime: new Date().toLocaleString(),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div className="container mx-auto p-6">
          <div>
            {availableFoodsData.map((food, index) => (
              <div
                key={index}
                className="bg-base-200 border border-base-300 rounded-box shadow-lg overflow-hidden transition-transform  "
              >
                {console.log(availableFoodsData)}
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
                  <div className="m-5">
                    <p>Additional Notes: {additionalNotes}</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>Shared by: {food.Name}</p>
                    <p>Contact: {food.Email}</p>
                  </div>
                </div>
                <div className="mb-10">
                  <Link to={`/availableFoods/${food._id}`}>
                    <div>
                      <button onClick={openModal} className="btn btn-warning">
                        Request Food
                      </button>
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customModalStyles}
                        contentLabel="Food Details"
                      >
                        {/* Close Button */}
                        <button
                          onClick={closeModal}
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light transition duration-300"
                          aria-label="Close Modal"
                        >
                          &times;
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col items-center text-center mb-4">
                          {food.photoURL && (
                            <img
                              src={food.photoURL}
                              alt={food.foodName}
                              className="w-40 h-40 object-cover rounded-full border-4 border-yellow-400 shadow-md mb-4"
                            />
                          )}
                          <h2 className="text-3xl font-extrabold text-yellow-700 mb-2 drop-shadow-sm">
                            {food.foodName}
                          </h2>
                          <p className="text-sm text-gray-600">
                            ID: {food._id}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-left w-full">
                          <div className="flex flex-col">
                            <span className="font-semibold text-yellow-600">
                              Quantity:
                            </span>
                            <span className="text-gray-800">
                              {food.foodQuantity}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-yellow-600">
                              Availability:
                            </span>
                            <span
                              className={`${food.availability} font-medium`}
                            >
                              {food.availability}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-yellow-600">
                              Expires:
                            </span>
                            <span className="text-gray-800">
                              {food.expiredDate || "N/A"}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-yellow-600">
                              Pickup Location:
                            </span>
                            <span className="text-gray-800">
                              {food.pickupLocation}
                            </span>
                          </div>
                          <div className="flex flex-col md:col-span-2">
                            <span className="font-semibold text-yellow-600">
                              Donor Name:
                            </span>
                            <span className="text-gray-800">{food.Name}</span>
                          </div>
                          <div className="flex flex-col md:col-span-2">
                            <span className="font-semibold text-yellow-600">
                              Donor Email:
                            </span>
                            <span className="text-gray-800">{food.Email}</span>
                          </div>
                          {food.additionalNotes && (
                            <div className="flex flex-col md:col-span-2">
                              <span className="font-semibold text-yellow-600">
                                Additional Notes:
                              </span>

                              <input
                                type="text"
                                className="text-gray-800 mt-1 p-3 bg-yellow-50 rounded-md border border-yellow-200 input"
                                defaultValue={
                                  additionalNotes
                                    ? `${additionalNotes}`
                                    : "Enter Notes Here"
                                }
                                onChange={(e) =>
                                  setAdditionalNotes(e.target.value)
                                }
                              ></input>
                            </div>
                          )}
                        </div>

                        {/* Optional: Call to action button */}
                        <button
                          onClick={handleRequestFood}
                          className="mt-6 w-full py-3 bg-yellow-600 text-white font-bold rounded-lg hover:bg-yellow-700 transition duration-300 shadow-md"
                        >
                          Submit !
                        </button>
                      </Modal>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
