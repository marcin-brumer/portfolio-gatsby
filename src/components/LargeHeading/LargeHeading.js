import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 6rem;
  margin: 0;
  font-weight: 400;

  @media ${({ theme }) => theme.media.mobileL} {
    font-size: 5rem;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const LargeHeading = ({ children }) => {
  const [first, second] = children.split(" ");
  return (
    <StyledHeading>
      {first}
      <StyledSpan> {second}</StyledSpan>
    </StyledHeading>
  );
};

export default LargeHeading;
