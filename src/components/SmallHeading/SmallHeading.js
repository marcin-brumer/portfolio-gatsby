import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h2`
  margin-bottom: 1.5rem;
  padding: 0.2rem 1rem;
  font-size: 2rem;
  font-weight: 400;
  position: relative;

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
`;

const SmallHeading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default SmallHeading;
