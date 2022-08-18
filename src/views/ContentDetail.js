import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StarsRates from "../components/StarsRates";
import {
  authSelector,
  getUserFavoritesFunction,
  saveNewUserFavorite,
} from "../features/auth/authSlice";
import { contentSelector } from "../features/content/contentSlice";
import { removeTags } from "../utils/utils";

const ContentDetail = () => {
  const { content, loading, hasError } = useSelector(contentSelector);
  const { user } = useSelector(authSelector);
  const [detailed, setDetailed] = useState(null);

  const dispatch = useDispatch();

  //Get the route params
  const { id } = useParams();

  useEffect(() => {
    const detailedContent = content.find((elem) => String(elem.show.id) === id);
    setDetailed(detailedContent);
  }, [content]);

  useEffect(() => {
    dispatch(getUserFavoritesFunction(user.user_id));
  }, [loading]);

  const handleAddFavorite = (userId, contentId) => {
    dispatch(saveNewUserFavorite(userId, contentId));
  };

  if (hasError) return <p>Content not available</p>;
  if (!detailed) return <p>Loading content</p>;

  return (
    <div className="text-white grow">
      <ContentDetailRender
        element={detailed}
        user={user}
        handleAddFavorite={handleAddFavorite}
      />
    </div>
  );
};

const ContentDetailRender = ({ element, user, handleAddFavorite }) => {
  return (
    <div className="space-y-8">
      <div
        style={{
          height: "520px",
        }}
        className="relative"
      >
        <img
          src={element.show.image.original}
          alt={element.show.name}
          className="w-full h-full object-cover absolute"
        />
        <button
          className="absolute bottom-4 left-6 bg-black p-2 rounded-md"
          onClick={() => handleAddFavorite(user.user_id, element.show.id)}
        >
          Add to favorites
        </button>
        <div className="absolute bottom-4 right-6 space-x-3">
          <StarsRates rating={element.show.rating.average} />
        </div>
      </div>
      <div className="px-6 space-y-6">
        <div className="text-white text-center font-bold text-3xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 p-2">
          {element.show.name}
        </div>
        <div className="text-white text-sm space-y-2">
          <p>Languages: {element.show.language}</p>
          <p>Genres: {element.show.genres.join(", ")} </p>
          <p>Premiered on: {element.show.premiered}</p>
        </div>
        <div className="text-white text-center font-medium underline underline-offset-2 text-xl w-full">
          Sinopsis
        </div>
        <p className="text-md">{removeTags(element.show.summary)}</p>
      </div>
    </div>
  );
};

export default ContentDetail;
