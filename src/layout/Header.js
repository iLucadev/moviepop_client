import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSearch,
  faUserCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logOutFunction } from "../features/auth/authSlice";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname;
  console.log(path);

  const handleLogOut = () => {
    removeCookie("jwt");
    dispatch(logOutFunction());
    window.location.reload();
  };

  if (path == "/sign-in") {
    return <HeaderWrapper></HeaderWrapper>;
  }

  if (path == "/home") {
    return (
      <HeaderWrapper>
        <NavLink to="/content">
          <FontAwesomeIcon icon={faSearch} className="h-6" />
        </NavLink>
        <FontAwesomeIcon
          icon={faUserCircle}
          className="h-6"
          onClick={() => handleLogOut()}
        />
      </HeaderWrapper>
    );
  }

  if (path == "/content") {
    return (
      <HeaderWrapper>
        <NavLink to="/home">
          <FontAwesomeIcon icon={faHouse} className="h-6" />
        </NavLink>
        <FontAwesomeIcon
          icon={faUserCircle}
          className="h-6"
          onClick={() => handleLogOut()}
        />
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <NavLink to="/content">
        <FontAwesomeIcon icon={faArrowLeft} className="h-6" />
      </NavLink>
      <FontAwesomeIcon
        icon={faUserCircle}
        className="h-6"
        onClick={() => handleLogOut()}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = ({ children }) => {
  return (
    <header className="flex items-center justify-between text-white fixed top-0 left-0 right-0 z-20 grow-0 px-6 pt-6 drop-shadow-lg">
      <h1 className="font-semibold text-2xl underline underline-offset-4 decoration-cyan-500">
        Moviepop
      </h1>
      <nav className="space-x-6">{children}</nav>
    </header>
  );
};

export default Header;
