import React from "react";
import { resumeData } from "./resume-data";
import {
  ResumeContactWrapper,
  ResumeHeader,
  ResumeEntrySection,
  EntryItemsContainer,
  ResumeEntriesWrapper,
  ResumeObjectiveWrapper,
  ResumeWrapper,
  EntryItem,
  EntryTitle,
  EntrySubtitleContainer,
  EntryDescription,
  EntryHighlights,
  EntryHighlight,
} from "./ResumeElements";
import Logo from "../SVGComponents/Logo";
import { Button } from "../../Elements";
import { colors } from "../../utilities";
import { Link } from "gatsby";
import ResumeContactComponent from "./ResumeContactComponent";
import { useWindowDimensions } from "../../hooks";

const Resume = () => {
  const { width } = useWindowDimensions();
  return (
    <ResumeWrapper>
      {width >= 750 && (
        <ResumeContactWrapper>
          <Logo sideLength="15.25vw" strokeColor={colors.space_cadet} />
          <ResumeContactComponent />
        </ResumeContactWrapper>
      )}

      <ResumeEntriesWrapper>
        <ResumeObjectiveWrapper>
          <ResumeHeader>
            {width < 750 && (
              <Logo sideLength="80px" strokeColor={colors.space_cadet} />
            )}
            <h1>Andrea Papaleo</h1>
            {width < 750 && <ResumeContactComponent />}
          </ResumeHeader>

          <p>
            I am a front-end engineer with backgrounds in scientific computing,
            physics, and engineering. I enjoy research and finding the best ways
            to effectively communicate ideas and information. Experienced in
            front-end code, back-end code, and data analysis & visualization.
          </p>
          <Button
            as={Link}
            color={colors.cosmic_latte}
            $backgroundColor={colors.amaranth_purple}
            size="btn--long"
            to="/resume"
          >
            Download PDF
          </Button>
        </ResumeObjectiveWrapper>
        <ResumeEntrySection>
          <h2>Experience</h2>
          <EntryItemsContainer>
            {resumeData.experience.map((item, idx) => {
              return (
                <EntryItem key={`${item.org}-${idx}`}>
                  <EntryTitle>{item.position}</EntryTitle>
                  <EntrySubtitleContainer>
                    <h4>{item.org}</h4>
                    <h4>
                      {item.duration.start} - {item.duration.end}
                    </h4>
                  </EntrySubtitleContainer>

                  <EntryDescription>{item.description}</EntryDescription>
                  <EntryHighlights>
                    {item.highlights.map((highlight, idx) => {
                      return (
                        <EntryHighlight key={idx}>{highlight}</EntryHighlight>
                      );
                    })}
                  </EntryHighlights>
                </EntryItem>
              );
            })}
          </EntryItemsContainer>
        </ResumeEntrySection>
        <ResumeEntrySection>
          <h2>Education</h2>
          <EntryItemsContainer>
            {resumeData.education.map((item, idx) => {
              return (
                <EntryItem key={`${item.org}-${idx}`}>
                  <EntryTitle>{item.position}</EntryTitle>
                  <EntrySubtitleContainer>
                    <h4>{item.org}</h4>
                    <h4>
                      {item.duration.start} - {item.duration.end}
                    </h4>
                  </EntrySubtitleContainer>

                  <EntryDescription>{item.description}</EntryDescription>
                  <EntryHighlights>
                    {item.highlights.map((highlight, idx) => {
                      return (
                        <EntryHighlight key={idx}>{highlight}</EntryHighlight>
                      );
                    })}
                  </EntryHighlights>
                </EntryItem>
              );
            })}
          </EntryItemsContainer>
        </ResumeEntrySection>
        <ResumeEntrySection>
          <h2>Skills {width > 1100 && <br />}& Expertise</h2>
          <EntryItemsContainer twoColumn={true}>
            {resumeData.skills.map((item, idx) => {
              return (
                <EntryItem key={`${item.org}-${idx}`}>
                  <EntryTitle>{item.position}</EntryTitle>

                  <EntryDescription>{item.description}</EntryDescription>
                </EntryItem>
              );
            })}
          </EntryItemsContainer>
        </ResumeEntrySection>
        <ResumeEntrySection>
          <h2>PostScript</h2>
          <EntryItemsContainer twoColumn={true}>
            {resumeData.postscript.map((item, idx) => {
              return (
                <EntryItem key={`${item.org}-${idx}`}>
                  <EntryTitle>{item.position}</EntryTitle>

                  <EntryDescription>{item.description}</EntryDescription>
                </EntryItem>
              );
            })}
          </EntryItemsContainer>
        </ResumeEntrySection>
      </ResumeEntriesWrapper>
    </ResumeWrapper>
  );
};

export default Resume;
