import React from "react";
import { resumeData } from "./resume-data";
import {
  ResumeContactItem,
  ResumeContactItems,
  ResumeContactLink,
  ResumeContactWrapper,
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

const Resume = () => {
  return (
    <ResumeWrapper>
      <ResumeContactWrapper>
        <Logo sideLength="200px" strokeColor={colors.space_cadet} />
        <ResumeContactItems>
          <ResumeContactItem>
            <ResumeContactLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                <path
                  d="M45 0C20.3 0 .2 20.1 0 44.7c-.1 12 4.5 23.4 13 31.9 8.4 8.6 19.7 13.3 31.7 13.4h.3c24.7 0 44.8-20.1 45-44.7C90.2 20.5 70.1.2 45 0zm21.8 60l-1.9 1.9-.1.1c-3.3 3.3-6.1 4.1-10.5 2.8-4.6-1.4-8.7-3.9-12.4-6.9-5.3-4.3-11-9.9-14.7-15.7-3.7-6-4.9-12.3.3-17.5l.1-.1 1.9-1.9c1.4-1.4 3.7-1.4 5.2 0l5.9 5.9c1.4 1.4 1.4 3.7 0 5.2l-3.5 3.5.1.1c3.9 5.9 9 11 14.9 14.9l.1.1 3.5-3.5c1.4-1.4 3.7-1.4 5.2 0l5.9 5.9c1.5 1.5 1.5 3.8 0 5.2z"
                  fillRule="nonzero"
                ></path>
              </svg>
              631-942-3888
            </ResumeContactLink>
          </ResumeContactItem>
          <ResumeContactItem>
            <ResumeContactLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78">
                <path
                  d="M39 0C17.681 0 .238 17.442.238 38.761c0 21.318 17.442 38.762 38.761 38.762H39c21.32 0 38.761-17.443 38.761-38.762C77.762 17.443 60.32 0 39 0zm19.457 24.144L39.044 41.903 19.619 24.144h38.838zm2.084 30.341H17.548V26.061l20.547 18.785.949.867.949-.867L60.54 26.05v28.435h.001z"
                  fillRule="nonzero"
                ></path>
              </svg>
              hello@apapaleo.com
            </ResumeContactLink>
          </ResumeContactItem>
          <ResumeContactItem>
            <ResumeContactLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path
                  d="M32 .8C14.3.8 0 15.1 0 32.8c0 14.1 9.2 26.1 21.9 30.4 1.6.3 2.2-.7 2.2-1.5v-5.4C15.2 58.2 13.3 52 13.3 52c-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7.3-2.1 1.1-3.5 2-4.3-7.1-.8-14.6-3.6-14.6-15.8 0-3.5 1.2-6.3 3.3-8.6-.3-.8-1.4-4.1.3-8.5 0 0 2.7-.9 8.8 3.3 2.6-.7 5.3-1.1 8-1.1s5.5.4 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3 1.7 4.4.6 7.7.3 8.5 2.1 2.2 3.3 5.1 3.3 8.6 0 12.3-7.5 15-14.6 15.8 1.1 1 2.2 2.9 2.2 5.9v8.8c0 .9.6 1.9 2.2 1.5C54.8 58.9 64 46.9 64 32.8c0-17.7-14.3-32-32-32z"
                  fillRule="evenodd"
                ></path>
              </svg>
              @andrea-papaleo
            </ResumeContactLink>
          </ResumeContactItem>
          <ResumeContactItem>
            <ResumeContactLink href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
                <path
                  d="M44 88c24.3 0 44-19.7 44-44S68.3 0 44 0 0 19.7 0 44s19.7 44 44 44zM32 64.5h-9.5V34H32v30.5zm-4.8-34.7c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5c0 3.1-2.4 5.5-5.5 5.5zm40.3 34.7H58V49.7c0-3.5-.1-8.1-4.9-8.1-4.9 0-5.7 3.9-5.7 7.8v15.1h-9.5V34H47v4.2h.1c1.3-2.4 4.4-4.9 9-4.9 9.6 0 11.4 6.3 11.4 14.5v16.7z"
                  fillRule="nonzero"
                ></path>
              </svg>
              /in/andrea-papaleo
            </ResumeContactLink>
          </ResumeContactItem>
        </ResumeContactItems>
      </ResumeContactWrapper>
      <ResumeEntriesWrapper>
        <ResumeObjectiveWrapper>
          <h1>Andrea Papaleo</h1>
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
          <h2>
            Skills &<br /> Expertise
          </h2>
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
