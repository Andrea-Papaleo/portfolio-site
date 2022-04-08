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
  border-bottom: 1px solid
    ${(props) => (props.isTop ? "transparent" : props.color)};
`;

export const NavbarLogoContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  text-decoration: none;
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

export const NavbarTitle = styled(NavLink)`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => (props.isTop ? colors.cosmic_latte : props.color)};
`;

export const NavbarMenu = styled.ul`
  margin: 0 2rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  transition: all 0.3s ease-in-out, border-color 0.1s ease-in 0.25s;
  ${NavLink} {
    color: ${(props) => (props.isTop ? colors.cosmic_latte : props.color)};
  }
  @media screen and (max-width: ${breakpoints.smed}px) {
    position: fixed;
    margin-right: -0.5rem;
    padding: 1rem;
    background-color: ${(props) =>
      props.isTop ? colors.cosmic_latte_00 : colors.cosmic_latte};
    flex-direction: column;
    row-gap: 2rem;
    right: 0px;
    border: 1px solid transparent;
    border-bottom-left-radius: 0.5rem;
    top: -400px;
    transition: all 0.3s ease-in-out 0.1s, border-color 0.1s ease-in,
      border-bottom-color 0.01s linear 0.25s;
    ${NavLink} {
      color: ${(props) => (props.isTop ? colors.cosmic_latte : props.color)};
    }
    ${(props) => {
      if (props.active) {
        return css`
          transition: all 0.3s ease-in-out, border-color 0.3s linear 0.25s,
            border-top 0.1s ease-in-out 0.25s;

          border-color: ${(props) =>
            props.isTop ? colors.cosmic_latte : props.color};
          border-top: 1px solid ${colors.cosmic_latte};
          top: calc(${dimensions.navHeight} - 1px);
        `;
      }
    }}
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
      props.isTop ? colors.cosmic_latte : props.color};
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

  @media screen and (min-width: ${breakpoints.smed}px) {
    display: none;
  }
`;
