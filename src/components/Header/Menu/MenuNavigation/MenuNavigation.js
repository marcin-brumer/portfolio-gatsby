import React from "react";
import styled from "styled-components";
import NavigationLink from "./NavigationLink/NavigationLink";
import posed from "react-pose";

const PosedNavigation = posed.div({
  visible: {
    y: 0,
    x: 0,
    transition: {
      default: { duration: 500 },
    },
  },
  hidden: {
    y: "100%",
    x: "100%",
    transition: {
      default: { duration: 500 },
    },
  },
});

const StyledNavigation = styled(PosedNavigation)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.primaryDarken};
  list-style: none;

  @media ${({ theme }) => theme.media.tablet} {
    float: none;
    width: 100%;
    height: 75vh;
  }

  @media ${({ theme }) => theme.media.landscapeL} {
    height: 100vh;
  }
`;

const MenuNavigation = ({ menuOpen }) => (
  <StyledNavigation pose={menuOpen ? "visible" : "hidden"}>
    <li>
      <NavigationLink destination="/">Home</NavigationLink>
    </li>
    <li>
      <NavigationLink destination="/about/">About Me</NavigationLink>
    </li>
    <li>
      <NavigationLink destination="/work/">My Work</NavigationLink>
    </li>
    <li>
      <NavigationLink destination="/contact/">Contact</NavigationLink>
    </li>
  </StyledNavigation>
);

export default MenuNavigation;
