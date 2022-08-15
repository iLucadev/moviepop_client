import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const homeIcon = faHome;
const searchIcon = faSearch;

const Header = () => {
  return (
    <div className="flex items-center justify-between text-white fixed top-0 left-0 right-0 z-20 grow-0 px-6 pt-6">
      <h1 className="font-semibold text-2xl underline underline-offset-4 decoration-cyan-500">
        Moviepop
      </h1>
      <div className="space-x-6">
        <FontAwesomeIcon icon={homeIcon} className="h-6" />
        <FontAwesomeIcon icon={searchIcon} className="h-6" />
      </div>
    </div>
  );
};

export default Header;
