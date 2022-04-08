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
import { colors } from "../../utilities";
import { Link } from "gatsby";

const fontColors = {
  resume: colors.space_cadet,
  default: colors.kombu_green,
};
const Navbar = ({ page }) => {
  const [isNavShown, setIsNavShown] = useState(false);
  const [width, isTop] = useContext(WindowContext);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };

  const activeFontColor = fontColors.hasOwnProperty(page)
    ? fontColors[page]
    : fontColors.default;
  console.log(activeFontColor);

  return (
    <NavbarContainer
      color={activeFontColor}
      isTop={page === "resume" ? false : isTop}
    >
      <NavbarLogoContainer>
        <NavbarTitle
          isTop={page === "resume" ? false : isTop}
          color={activeFontColor}
          to="/"
        >
          {width < breakpoints.small ? "AP" : "APapaleo"}
        </NavbarTitle>
      </NavbarLogoContainer>
      <NavbarHamburger
        active={isNavShown}
        isTop={page === "resume" ? false : isTop}
        color={activeFontColor}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </NavbarHamburger>
      <NavbarMenu
        active={isNavShown}
        isTop={page === "resume" ? false : isTop}
        color={activeFontColor}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Works</NavLink>
        <NavLink to="/">Research</NavLink>
        <NavLink to="/">Uses</NavLink>
        <NavLink to="/">Contact</NavLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
