import React, { useState, useContext } from "react";
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarMenu,
  NavLink,
  NavbarTitle,
  NavbarHamburger,
} from "./NavbarElements";
import { breakpoints } from "../../utilities";
import { WindowContext } from "../../contexts";

const Navbar = ({ page }) => {
  const [isNavShown, setIsNavShown] = useState(false);
  const [width, isTop] = useContext(WindowContext);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <NavbarContainer isTop={isTop}>
      <NavbarLogoContainer>
        <NavbarTitle isTop={page === "resume" ? false : isTop}>
          {width < breakpoints.small ? "AP" : "APapaleo"}
        </NavbarTitle>
      </NavbarLogoContainer>
      <NavbarHamburger
        active={isNavShown}
        isTop={page === "resume" ? false : isTop}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </NavbarHamburger>
      <NavbarMenu active={isNavShown} isTop={page === "resume" ? false : isTop}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Works</NavLink>
        <NavLink to="/">Uses</NavLink>
        <NavLink to="/">Contact</NavLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
