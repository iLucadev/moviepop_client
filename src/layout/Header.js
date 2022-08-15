import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const homeIcon = faHome;
const searchIcon = faSearch;

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white fixed top-0 left-0 right-0 z-20 grow-0 px-6 pt-6 drop-shadow-lg">
      <h1 className="font-semibold text-2xl underline underline-offset-4 decoration-cyan-500">
        Moviepop
      </h1>
      <nav className="space-x-6">
        <NavLink to="/">
          <FontAwesomeIcon icon={homeIcon} className="h-6" />
        </NavLink>
        <NavLink to="/content">
          <FontAwesomeIcon icon={searchIcon} className="h-6" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
