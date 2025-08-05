import React from "react";

const FoodSharingGuide = () => {
  return (
    <div className="bg-transparent text-yellow-100 rounded-xl shadow-2xl p-8 max-w-[1500px] mx-auto my-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center drop-shadow-md">
        Maximizing Our Shared Bounty
      </h2>
      <p className="text-lg md:text-xl text-yellow-300 mb-10 leading-relaxed max-w-3xl mx-auto text-center">
        Reducing food waste and sharing surplus strengthens our community and
        ensures that good food nourishes those around us. Discover simple ways
        to contribute to a more sustainable food system right here in Dhaka.
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="flex-1 p-8 bg-gray-00 rounded-lg shadow-xl border border-yellow-700">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-600 pb-3">
            Smart Sharing Practices
          </h3>
          <ul className="list-disc pl-6 text-yellow-200 space-y-3 text-lg">
            <li>
              <strong>Know Your Surplus:</strong> Regularly check your pantry and
              fridge to identify items you will not use before they expire.
            </li>
            <li>
              <strong>Share Freshness:</strong> Offer produce at its peak quality.
              Consider ripeness and shelf life when sharing.
            </li>
            <li>
              <strong>Package Thoughtfully:</strong> Use clean and appropriate
              packaging to maintain the quality and safety of shared food.
            </li>
            <li>
              <strong>Clear Communication:</strong> When listing food, clearly state
              what it is, its quantity, and any important details like
              preparation instructions or potential allergens.
            </li>
          </ul>
          <p className="mt-8 text-gray-400 text-base italic leading-snug">
            By adopting mindful sharing habits, we can collectively minimize waste
            and make food accessible to everyone in our community.
          </p>
        </section>

        <section className="flex-1 p-8 bg-gray-00 rounded-lg shadow-xl border border-yellow-700">
          <h3 className="text-3xl font-bold text-yellow-400 mb-4 border-b-2 border-yellow-600 pb-3">
            Effective Surplus Reduction Tips
          </h3>
          <div className="space-y-6 text-lg text-yellow-200">
            <div>
              <h4 className="text-2xl font-semibold text-yellow-500 mb-2">
                1. Plan Your Meals Wisely
              </h4>
              <p>
                Creating a weekly meal plan and sticking to your shopping list
                helps prevent overbuying and reduces the likelihood of food
                spoilage.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-yellow-500 mb-2">
                2. Store Food Correctly
              </h4>
              <p>
                Understanding the best storage methods for different types of
                food can significantly extend their shelf life and prevent
                premature spoilage.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-yellow-500 mb-2">
                3. Get Creative with Leftovers
              </h4>
              <p>
                Transforming leftover ingredients into new and exciting meals is a
                fantastic way to reduce waste and discover new culinary
                possibilities.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-yellow-500 mb-2">
                4. Preserve Seasonal Abundance
              </h4>
              <p>
                Consider preserving techniques like pickling, canning, or freezing
                fruits and vegetables when they are in season and abundant in Dhaka.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodSharingGuide;