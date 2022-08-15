import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";
import "swiper/css";
import "./index.css";

const ContentCarrousel = ({ elements }) => {
  const ContentCard = (elem) => {
    console.log(elem);
    return (
      <div
        className="h-48 w-32 bg-cover rounded-md"
        style={{ backgroundImage: `url(${elem.element.show.image.original})` }}
      ></div>
    );
  };

  return (
    <Swiper spaceBetween={2} slidesPerView={"auto"}>
      {elements.map((item, i) => (
        <SwiperSlide key={i}>
          <ContentCard element={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentCarrousel;
