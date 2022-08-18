import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";
import "swiper/css";
import "./index.css";
import ContentCard from "./ContentCard";

const ContentCarrousel = ({ elements }) => {
  return (
    <Swiper spaceBetween={24} slidesPerView={"auto"}>
      {elements.map((item, i) => (
        <SwiperSlide key={i}>
          <ContentCard element={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentCarrousel;
