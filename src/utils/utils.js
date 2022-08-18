export const removeTags = (str) => {
  /**
   * Regular expression to identify HTML tags in the
   * input string. Replacing the identified HTML tag
   * with a null string.
   */

  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/(<([^>]+)>)/gi, "");
};

export const makeRating = (rating) => {
  /**
   * Regular expression to convert a 1-10 float
   * rating into 1-5 integer rating
   */
  return Math.round((rating * 5) / 10);
};
