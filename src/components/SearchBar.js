import React from "react";

const SearchBar = () => {
  return (
    <form className="flex justify-center mt-24">
      <div className="flex relative p-2 rounded-xl bg-gray-900 w-2/3">
        <input
          type="search"
          placeholder="Search your favorite content..."
          className="flex-1 p-1 pl-2 w-full text-sm text-white bg-gray-900"
        ></input>
      </div>
    </form>
  );
};

export default SearchBar;
