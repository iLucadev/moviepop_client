import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/react";
import "swiper/css";
import TagLabel from "./labels/TagLabel";

const Banner = () => {
  const content = useSelector((state) => state.contentReducer);

  //Get the maxRating
  const maxRating = Math.max(...content.map((e) => e.show.rating.average));
  const flagshipContent = content.find(
    (e) => e.show.rating.average === maxRating
  );

  //Get the content for the carousel
  const top3 = content.slice(0, 3);

  const removeTags = (str) => {
    /**
     * Regular expression to identify HTML tags in the
     * input string. Replacing the identified HTML tag
     * with a null string.
     */

    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const CarouselCard = ({ element }) => {
    const tags = element.show.genres;

    return (
      <div
        style={{
          height: "520px",
        }}
        className="bg-gradient-to-t from-black relative"
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
