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

  &::before {
    content: "";
    position: absolute;
    transition: transform 0.5s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    transform: scaleX(0);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    &::before {
      transform: scaleX(1);
    }
  }
`;

const NavigationLink = ({ children, destination }) => (
  <StyledLink to={destination}>{children}</StyledLink>
);

export default NavigationLink;
