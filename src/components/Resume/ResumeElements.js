import styled, { css } from "styled-components";
import { colors, dimensions } from "../../utilities";

export const ResumeWrapper = styled.section`
  width: 100%;
  padding: ${dimensions.navHeight} 5rem;
  background-color: ${colors.cosmic_latte};
  display: flex;
  overflow: visible;
  gap: 3rem;
`;

export const ResumeContactWrapper = styled.div`
  padding: 2rem;
  height: 500px;
  position: sticky;
  top: ${dimensions.navHeight};
  display: block;
`;
export const ResumeContactItems = styled.ul`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 0.5rem;
`;
export const ResumeContactItem = styled.li`
  display: flex;
  padding-left: 1rem;
  justify-content: flex-start;
`;
export const ResumeContactLink = styled.a`
  font-size: clamp(0.75rem, 1.1vw, 1rem);
  color: ${colors.space_cadet};
  text-decoration: none;
  text-align: left;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  svg {
    width: clamp(0.75rem, 1.1vw, 1rem);
    height: clamp(0.75rem, 1.1vw, 1rem);
    fill: ${colors.amaranth_purple};
  }
`;

export const ResumeEntriesWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
`;

export const ResumeObjectiveWrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2rem;
  border-bottom: 2px solid ${colors.amaranth_purple};
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    letter-spacing: 0.05em;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  p {
    max-width: 40rem;
    font-family: "EB Garamond";
    font-size: 1.2rem;
  }
`;
export const ResumeEntrySection = styled.div`
  padding: 2.5rem 2rem 2.5rem 0;
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid ${colors.amaranth_purple};

  h2 {
    height: 2rem;
    position: sticky;
    top: calc(${dimensions.navHeight} + 1rem);
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${colors.space_cadet};
  }
`;

export const EntryItemsContainer = styled.div`
  width: 75%;
  ${(props) => {
    if (props.twoColumn) {
      return css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        ${EntryItem} {
          width: 90%;
        }
        ${EntryTitle} {
          border-bottom: none;
        }
        ${EntryDescription} {
          padding-top: 0.5rem;
          text-align: left;
        }
      `;
    }
    return css`
      display: flex;
      flex-direction: column;
    `;
  }}
  row-gap: 3rem;
`;

export const EntryItem = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const EntryTitle = styled.h3`
  color: ${colors.space_cadet};
  font-size: 1.5rem;
  font-weight: 400;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid ${colors.space_cadet};
`;
export const EntrySubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-top: 0.2rem;

  h4 {
    font-size: 0.875rem;
    font-weight: 300;
    text-transform: uppercase;
  }
`;

export const EntryDescription = styled.p`
  font-family: "EB Garamond";
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: justify;
`;

export const EntryHighlights = styled.ul`
  width: 95%;
  margin-left: 1rem;
  display: grid;
  row-gap: 0.5rem;
  list-style: none;
`;

export const EntryHighlight = styled.li`
  font-size: 0.875rem;
  font-weight: 300;
  &:before {
    content: "\\26AC";
    display: inline-block;
    color: ${colors.amaranth_purple};
    width: 1rem;
    margin-left: -1rem;
  }
`;
