import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/commons";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
const Residencies = () => {
  const { data, isError, isLoading } = useProperties();
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error fetching data...</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter h-[60vh]">
        <PuffLoader
          height="80"
          width="80"
          radios={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section id="residencies" className="residence-wrapper">
      <div className="paddings innerWidth residence-container">
        <div className="residence-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(5, 13).map((card, index) => (
            <SwiperSlide key={index}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter residence-btn">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
export default Residencies;
