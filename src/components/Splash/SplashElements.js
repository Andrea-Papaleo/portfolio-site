import styled from "styled-components";
import { dimensions, colors, breakpoints } from "../../utilities";
export const SplashWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      135deg,
      ${colors.amaranth_purple_70},
      ${colors.cambridge_blue_70}
    ),
    linear-gradient(
      225deg,
      ${colors.atomic_tangerine_70},
      ${colors.peach_puff_70}
    );
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.small}px) {
    height: 100vh;
  }
`;
