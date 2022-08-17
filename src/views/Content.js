import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { contentSelector } from "../features/content/contentSlice";
import ContentGrid from "../components/ContentGrid";

const Content = () => {
  const { content, loading, hasError } = useSelector(contentSelector);

  const [searchInput, setSearchInput] = useState("");
  const [dataToMap, setDataToMap] = useState([]);

  const searchBarHandler = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    /**
     * Content filter function. Get the user's search string from the
     * search bar component and filters the content array.
     */
    setDataToMap(
      content.filter((item) =>
        Object.values(item.show.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  if (hasError) return <p>Content not available</p>;
  if (loading) return <p>Loading content</p>;

  return (
    <div className="grow">
      <SearchBar
        searchInput={searchInput}
        searchBarHandler={searchBarHandler}
      />
      {searchInput.length > 0 ? (
        <ContentGrid elements={dataToMap} />
      ) : (
        <ContentGrid elements={content} />
      )}
    </div>
  );
};

const SearchBar = ({ searchInput, searchBarHandler }) => {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex relative p-2 rounded-xl bg-gray-900 w-2/3">
        <input
          placeholder="Search your favorite content..."
          className="flex-1 p-1 pl-2 w-full text-sm text-white bg-gray-900 outline-none"
          type="text"
          value={searchInput}
          onChange={searchBarHandler}
        ></input>
      </div>
    </div>
  );
};

export default Content;
