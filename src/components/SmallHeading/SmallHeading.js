import React from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";

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

  @media ${({ theme }) => theme.media.mobileS} {
    font-size: 1rem;
  }
`;

const SmallHeading = ({ text, typeWriter }) => {
  if (!typeWriter) {
    const displayedText = text.join(" ");
    return <StyledHeading>{displayedText}</StyledHeading>;
  }
  return (
    <StyledHeading>
      <ReactTypingEffect text={text} eraseDelay={3000} />
    </StyledHeading>
  );
};

export default SmallHeading;
