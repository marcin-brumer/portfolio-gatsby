import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  font-size: 30px;
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.5s ease-out;
`;

const NavigationLink = ({ children, destination }) => (
  <StyledLink to={destination}>{children}</StyledLink>
);

export default NavigationLink;
