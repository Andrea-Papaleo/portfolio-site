import React, { useState, useContext } from "react";
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarMenu,
  NavLink,
  NavbarTitle,
  NavbarHamburger,
} from "./NavbarElements";
import { useWindowDimensions, useScrollPosition } from "../../hooks";
import { breakpoints } from "../../utilities";
import { WindowContext } from "../../contexts";

const Navbar = () => {
  const [isNavShown, setIsNavShown] = useState(false);
  //const { width } = useWindowDimensions();
  //const { isTop } = useScrollPosition();
  const [width, isTop] = useContext(WindowContext);
  console.log(width);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };

  return (
    <NavbarContainer isTop={isTop}>
      <NavbarLogoContainer>
        <NavbarTitle isTop={isTop}>
          {width < breakpoints.small ? "AP" : "APapaleo"}
        </NavbarTitle>
      </NavbarLogoContainer>
      <NavbarHamburger active={isNavShown} isTop={isTop} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </NavbarHamburger>
      <NavbarMenu active={isNavShown}>
        <NavLink isTop={isTop} to="/">
          Home
        </NavLink>
        <NavLink isTop={isTop} to="/about">
          About
        </NavLink>
        <NavLink isTop={isTop} to="/">
          Works
        </NavLink>
        <NavLink isTop={isTop} to="/">
          Uses
        </NavLink>
        <NavLink isTop={isTop} to="/">
          Contact
        </NavLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
