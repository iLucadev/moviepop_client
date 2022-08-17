import React from "react";
import ContentCard from "./ContentCard";

const ContentGrid = ({ elements }) => {
  return (
    <form
      className="w-full mt-12 px-12 mb-6"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))",
        gridGap: "24px",
        gridAutoFlow: "dense",
      }}
    >
      {elements.map((item, i) => (
        <ContentCard element={item} key={i} />
      ))}
    </form>
  );
};

export default ContentGrid;
