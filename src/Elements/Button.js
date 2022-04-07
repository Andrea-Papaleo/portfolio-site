import styled, { css } from "styled-components";
import { colors } from "../utilities";

export const Button = styled.div`
  margin: 0.5rem;
  position: relative;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    transform 0.1s ease-in-out;
  text-decoration: none;
  border-radius: 3em;
  letter-spacing: -0.02rem;

  ${(props) => {
    const color = props.color ? props.color : colors.kombu_green;
    const $backgroundColor = props.$backgroundColor
      ? props.$backgroundColor
      : colors.peach_puff;
    if (props.theme === "btn--outline") {
      return css`
        background-color: transparent;
        color: ${color};
        border: 1px solid ${color};

        &:hover {
          background-color: ${color};
          color: ${$backgroundColor};
        }
      `;
    }
    return css`
      background-color: ${$backgroundColor};
      color: ${color};
      border: 1px solid ${$backgroundColor};
      &:hover {
        background-color: transparent;
        color: ${$backgroundColor};
      }
    `;
  }}
  ${(props) => {
    switch (props.size) {
      case "btn--sm":
        return css`
          padding: 0.5rem 1rem;
          font-size: clamp(0.75rem, 1vw, 2.3rem);
        `;
      case "btn--md":
        return css`
          padding: 1rem 2rem;
          font-size: clamp(1rem, 1.3vw, 3rem);
        `;
      case "btn--lg":
        return css`
          padding: 1.5rem 3rem;
          font-size: clamp(1.25rem, 2vw, 4.5rem);
        `;
      case "btn--long":
        return css`
          padding: 0.5rem 4rem;
          font-size: clamp(1rem, 1.3vw, 3rem);
        `;
      default:
        return css`
          padding: 1rem 2rem;
          font-size: clamp(1rem, 1.3vw, 3rem);
        `;
    }
  }}

  &:hover {
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
`;
