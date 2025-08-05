import React from "react";
import Carousel from "../../Components/Carousel";
import { useLoaderData, useNavigation } from "react-router";
import FoodSharingGuide from "../../Components/FoodSharingGuide";
import FoodHandlingEssentials from "../../Components/FoodHandlingEssentials";
import FeaturedFoods from "../../Components/FeaturedFoods";
import HomePageHero from "../../Components/HomePageHero";

const Home = () => {
  const navigation = useNavigation();

  return (
    <div>
      {navigation.state === "loading" ? (
        <span className="loading loading-spinner text-success"></span>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center ">
            <Carousel></Carousel>
           <HomePageHero></HomePageHero>
            {/* <div className="grid gap-5 lg:grid-cols-3 ">
              {gardenersData.map((gardener) => (
                <GardenerCard
                  gardener={gardener}
                  key={gardener._id}
                ></GardenerCard>
              ))}
            </div> */}
            {/* <Tips></Tips>
            <SoilGuide></SoilGuide>
            <ToolsEssentials></ToolsEssentials> */}
            <FeaturedFoods></FeaturedFoods>
            <FoodSharingGuide></FoodSharingGuide>
            <FoodHandlingEssentials></FoodHandlingEssentials>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
