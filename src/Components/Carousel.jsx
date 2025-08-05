// src/components/MySwiper.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import your background images
import bg1 from "./../assets/delicious-indian-food-tray.jpg";
import bg2 from "./../assets/mixed-fried-meat-with-pomegranate-sauce.jpg";
import bg3 from "./../assets/top-view-table-full-delicious-food-composition.jpg";

const MySwiper = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: bg1,
      title: "Share Food, Spread Joy",
    },
    {
      id: 2,
      backgroundImage: bg2,
      title: "Fighting Food Waste, Together",
    },
    {
      id: 3,
      backgroundImage: bg3,
      title: " Connecting Communities Through Food",
    },
  ];

  return (
    <div className="swiper-container-wrapper h-[200px] my-10 mx-auto max-w-[1200px] w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: "100%", borderRadius: "10px", overflow: "hidden" }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column", // Changed to column to stack title and content
              justifyContent: "center",
              alignItems: "center",
              color: "",
              fontSize: "1em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              position: "relative", // Added for potential absolute positioning of elements
            }}
          >
            {/* Title */}
            <h2
              style={{
                marginBottom: "20px",
                fontSize: "3em",
                color: "yellow",
                textShadow: "2px 2px 10px rgba(0, 0, 1, 0.9)",
              }}
            >
              {slide.title}
            </h2>
            {/* Content */}
            <div style={{ marginBottom: "20px" }}>{slide.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySwiper;
