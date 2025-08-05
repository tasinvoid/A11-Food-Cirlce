import React from "react";

const FoodHandlingEssentials = () => {
  return (
    <div className="bg-transparent text-yellow-100 p-8 max-w-[1500px] mx-auto my-12"> {/* Changed to bg-transparent */}
      <h2 className="text-2xl lg:text-4xl font-extrabold text-yellow-400 mb-6 text-center"> {/* Adjusted text color */}
        Food Handling & Sharing Essentials
      </h2>
      <p className="text-lg text-yellow-300 mb-8 leading-relaxed text-center max-w-3xl mx-auto"> {/* Adjusted text color and added text-center, max-w */}
        Ensuring food safety and convenience is key to successful food sharing.
        Here's a rundown of essential items for preparing, storing, and
        transporting food safely.
      </p>
      <div className="bg-transparent rounded-lg shadow-xl p-8 max-w-[1500px] mx-auto my-8 gap-5 flex flex-col lg:flex-row "> {/* Main wrapper transparent */}
        <section className="flex-1 p-8 bg-gray-800 rounded-lg shadow-xl border border-yellow-700"> {/* Section background dark, border dark yellow */}
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-600 pb-3"> {/* Adjusted text and border color */}
            Kitchen Tools for Preparation
          </h3>
          <ul className="list-disc pl-6 text-yellow-200 space-y-3 text-lg"> {/* Adjusted list item text color */}
            <li>
              <strong>Cutting Boards (Separate):</strong> Use different boards for raw
              meat/poultry and ready-to-eat foods to prevent cross-contamination.
            </li>
            <li>
              <strong>Sharp Knives:</strong> Essential for safe and efficient food
              preparation, from slicing produce to portioning cooked meals.
            </li>
            <li>
              <strong>Food Thermometer:</strong> Crucial for ensuring meats and
              cooked dishes reach safe internal temperatures, preventing foodborne
              illnesses.
            </li>
            <li>
              <strong>Mixing Bowls & Utensils:</strong> A good set of durable
              bowls and spatulas/spoons for preparing meals in various quantities.
            </li>
          </ul>
        </section>

        <section className="flex-1 p-8 bg-gray-800 rounded-lg shadow-xl border border-yellow-700"> {/* Section background dark, border dark yellow */}
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-600 pb-3"> {/* Adjusted text and border color */}
            Storage & Transportation Gear
          </h3>
          <ul className="list-disc pl-6 text-yellow-200 space-y-3 text-lg"> {/* Adjusted list item text color */}
            <li>
              <strong>Airtight Containers:</strong> Indispensable for keeping
              food fresh, preventing spills, and organizing surplus in fridges or
              pantries. Glass or BPA-free plastic is recommended.
            </li>
            <li>
              <strong>Reusable Bags & Coolers:</strong> For safely transporting
              perishable items, especially in Dhaka's climate, maintaining
              temperature is crucial.
            </li>
            <li>
              <strong>Labels & Markers:</strong> Clearly label food items with
              contents and dates to ensure freshness and reduce waste.
            </li>
            <li>
              <strong>Sanitizing Wipes/Spray:</strong> For quick clean-ups of
              surfaces and containers before and after handling food, promoting
              hygiene.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FoodHandlingEssentials;