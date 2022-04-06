import styled from "styled-components";
import { colors } from "../utilities";

export const Button = styled.div`
  margin: 0.5rem;
  padding: 1em 2em;
  background-color: ${colors.peach_puff};
  color: ${colors.kombu_green};
  text-decoration: none;
  border: 1px solid ${colors.peach_puff};
  border-radius: 3em;
  font-size: clamp(1rem, 1.3vw, 3rem);
  letter-spacing: -0.02rem;
  position: relative;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    transform 0.1s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${colors.peach_puff};
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease-in-out;
  }
`;
