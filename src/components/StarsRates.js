import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { makeRating } from "../utils/utils";

const StarsRates = ({ rating }) => {
  const newRate = makeRating(rating);

  /**
   * Make an array with the integer rating value and returns the
   * rating stars
   */
  return [...Array(newRate)].map((e, i) => (
    <FontAwesomeIcon icon={faStar} className="text-amber-300 h-6" key={i} />
  ));
};

export default StarsRates;
