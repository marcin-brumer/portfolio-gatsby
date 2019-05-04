import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

const StyledHeading = styled.h2`
  margin: 0 0 1.5rem 0;
  padding: 0.2rem 1rem;
  font-size: 2rem;
  font-weight: 400;
  position: relative;
  z-index: 1;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
    z-index: -1;
  }

  @media ${({ theme }) => theme.media.tablet} {
    text-align: center;
  }

  @media ${({ theme }) => theme.media.mobileS} {
    font-size: 1rem;
  }
`;

const SmallHeading = ({ text, typeWriter, children }) => {
  if (!typeWriter) {
    return <StyledHeading>{children}</StyledHeading>;
  } else {
    const [first, second] = text;
    return (
      <StyledHeading>
        <Typist startDelay="2000">
          {first}
          <Typist.Backspace count={first.length} delay={2000} />
          <Typist.Delay ms={2000} />
          {second}
        </Typist>
      </StyledHeading>
    );
  }
};

export default SmallHeading;
