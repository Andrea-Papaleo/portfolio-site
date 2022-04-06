import styled from "styled-components";
import { colors } from "../utilities";

export const BioContainer = styled.main`
  width: 100%;
  padding: 3rem 0;
  background-color: ${colors.kombu_green};
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;

  h1 {
    font-size: clamp(1.75rem, 3vw, 4rem);
    color: ${colors.peach_puff};
  }
  p {
    width: 360px;
    font-family: "noto-serif";
    font-size: clamp(1rem, 1.8vw, 3rem);
    text-align: center;
    color: ${colors.cosmic_latte};
    @media screen and (max-width: 360px) {
      width: 90%;
    }
  }
`;
