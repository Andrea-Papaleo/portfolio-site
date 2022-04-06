import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { colors, dimensions, breakpoints } from "../../utilities";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${dimensions.navHeight};
  background-color: ${(props) =>
    props.isTop ? colors.cosmic_latte_00 : colors.cosmic_latte};
  position: fixed;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

export const NavbarLogoContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
`;
export const NavbarTitle = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => (props.isTop ? colors.cosmic_latte : colors.kombu_green)};
`;

export const NavbarMenu = styled.ul`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: ${breakpoints.small}px) {
    position: fixed;
    margin-right: 0.5rem;
    padding: 1rem;
    border: 2px solid ${colors.cosmic_latte};
    background-color: rgba(255, 255, 255, 15%);
    flex-direction: column;
    row-gap: 2rem;
    top: ${dimensions.navHeight};
    /*left: */
    right: ${(props) => (props.active ? "0px" : "-200px")};
  }
`;

export const NavbarHamburger = styled.div`
  margin: 0 2rem;
  display: block;
  cursor: pointer;

  span {
    display: block;
    width: 25px;
    height: 2px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) =>
      props.isTop ? colors.cosmic_latte : colors.kombu_green};
  }

  ${(props) => {
    if (props.active) {
      return css`
        & span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        & span:nth-child(2) {
          opacity: 0;
        }
        & span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `;
    }
  }}

  @media screen and (min-width: ${breakpoints.small}px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${(props) => (props.isTop ? colors.cosmic_latte : colors.kombu_green)};
  font-size: 1.25rem;
  transition: transform 0.1s ease-in;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.125);
    transition: transform 0.1s ease-out;
  }
  &:active {
    transform: scale(1);
  }
`;
