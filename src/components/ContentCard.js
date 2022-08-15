import React from "react";

const ContentCard = (elem) => {
  return (
    <div
      className="h-48 w-32 bg-cover rounded-md"
      style={{ backgroundImage: `url(${elem.element.show.image.original})` }}
    ></div>
  );
};

export default ContentCard;
