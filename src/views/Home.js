import React from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import ContentCarrousel from "../components/ContentCarrousel";

const Home = () => {
  const userData = useSelector((state) => state.authReducer);
  const content = useSelector((state) => state.contentReducer);
  console.log(userData);
  console.log(content);
  const userFavorites = content.filter((element1) =>
    userData.favorites.some((element2) => element2.id === element1.show.id)
  );
  console.log(userFavorites);

  return (
    <div className="grow">
      <Banner />
      <div className="px-5 pt-6 space-y-2">
        <span className="text-white text-md">Your favorites</span>
        <ContentCarrousel elements={userFavorites} />
      </div>
    </div>
  );
};

export default Home;
