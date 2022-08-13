import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const homeIcon = faHome;
const searchIcon = faSearch;

const Header = () => {
  return (
    <div className="px-4 flex justify-end space-x-4 grow-0">
      <FontAwesomeIcon icon={homeIcon} className="h-6" />
      <FontAwesomeIcon icon={searchIcon} className="h-6" />
    </div>
  );
};

export default Header;
