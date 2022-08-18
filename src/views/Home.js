import { useSelector } from "react-redux";
import { contentSelector } from "../features/content/contentSlice";
import Banner from "../components/Banner";
import ContentCarrousel from "../components/ContentCarrousel";
import { authSelector } from "../features/auth/authSlice";

const Home = () => {
  const { content, loading, hasError } = useSelector(contentSelector);
  const { user_favorites } = useSelector(authSelector);

  if (loading) return <p>Loading content</p>;
  if (hasError) return <p>Content not available</p>;

  console.log(user_favorites);

  const userFavorites = content.filter((element1) =>
    user_favorites.some((element2) => element2.content_id === element1.show.id)
  );

  console.log(userFavorites);

  return (
    <div className="grow bg-black">
      <Banner content={content} />
      <div className="px-6 pt-6 space-y-2">
        <span className="text-white text-md">Your favorites</span>
        <ContentCarrousel elements={userFavorites} />
      </div>
    </div>
  );
};

export default Home;
