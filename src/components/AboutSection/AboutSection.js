import React from "react";
import styled from "styled-components";
import Portrait from "./Portrait/Portrait";
import Bio from "./Bio/Bio";
import Logos from "./Logos/Logos";

const StyledSection = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-areas:
    "i i i i b b b b b b b b"
    "s s s s s s s s s s s s";
  grid-template-columns: repeat(12, 1fr);

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-areas:
      "i"
      "b"
      "s";
    grid-template-columns: 1fr;
  }
`;

const AboutSection = () => (
  <StyledSection>
    <Portrait />
    <Bio />
    <Logos />
  </StyledSection>
);

export default AboutSection;
