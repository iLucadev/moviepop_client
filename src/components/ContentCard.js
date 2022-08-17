import React from "react";
import { Link } from "react-router-dom";

const ContentCard = (elem) => {
  return (
    <Link to={`/content/${elem.element.show.id}`}>
      <div
        className="h-48 w-32 bg-cover rounded-md"
        style={{ backgroundImage: `url(${elem.element.show.image.original})` }}
      ></div>
    </Link>
  );
};

export default ContentCard;
