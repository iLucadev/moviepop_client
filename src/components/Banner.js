import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";
import "swiper/css";
import TagLabel from "./labels/TagLabel";
import { removeTags } from "../utils/utils";

const Banner = ({ content }) => {
  //Get the content for the carousel
  const top3 = content.slice(0, 3);

  const CarouselCard = ({ element }) => {
    const tags = element.show.genres;

    return (
      <div
        style={{
          height: "520px",
        }}
        className="relative bg-gradient-to-t from-black"
      >
        <img
          src={element.show.image.original}
          alt="banner"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="text-white absolute bottom-0 left-0 px-6 pb-6 space-y-4 w-full">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 px-2">
              {element.show.name}
            </span>
            <span className="text-sm">{element.show.type}</span>
          </div>
          <p className="text-sm font-light">
            {removeTags(element.show.summary)}
          </p>
          <div className="space-x-4">
            {tags.map((tag, i) => (
              <TagLabel key={i} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Swiper spaceBetween={0} slidesPerView={1}>
      {top3.map((item, i) => (
        <SwiperSlide key={i}>
          <CarouselCard element={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
