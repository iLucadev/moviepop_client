import React from "react";
import { useSelector } from "react-redux";
import ContentGrid from "../components/ContentGrid";
import SearchBar from "../components/SearchBar";

const Content = () => {
  const content = useSelector((state) => state.contentReducer);

  return (
    <div className="grow">
      <SearchBar />
      <ContentGrid elements={content} />
    </div>
  );
};

export default Content;
