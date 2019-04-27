import React from "react";
import styled from "styled-components";
import NavigationLink from "./NavigationLink/NavigationLink";
import posed from "react-pose";

const PosedNavigation = posed.ul({
  visible: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
    transition: {
      default: { duration: 300 },
    },
  },
  hidden: {
    x: "100%",
    transition: {
      default: { duration: 300 },
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

const Item = posed.li({
  visible: { y: 0, opacity: 1 },
  hidden: { y: 40, opacity: 0 },
});

const MenuNavigation = ({ menuOpen }) => (
  <StyledNavigation pose={menuOpen ? "visible" : "hidden"}>
    <Item>
      <NavigationLink destination="/">Home</NavigationLink>
    </Item>
    <Item>
      <NavigationLink destination="/about/">About Me</NavigationLink>
    </Item>
    <Item>
      <NavigationLink destination="/work/">My Work</NavigationLink>
    </Item>
    <Item>
      <NavigationLink destination="/contact/">Contact</NavigationLink>
    </Item>
  </StyledNavigation>
);

export default MenuNavigation;
