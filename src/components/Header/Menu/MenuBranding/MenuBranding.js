import React from "react";
import styled from "styled-components";
import Portrait from "./Portrait/Portrait";
import posed from "react-pose";

const PosedBranding = posed.div({
  visible: {
    x: 0,
    transition: {
      default: { duration: 300 },
    },
  },
  hidden: {
    x: "-100%",
    transition: {
      default: { duration: 300 },
    },
  },
});

const StyledBranding = styled(PosedBranding)`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: 100vh;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    float: none;
    width: 100%;
    height: 25vh;
  }

  @media ${({ theme }) => theme.media.landscapeL} {
    display: none;
  }
`;

const MenuBranding = ({ menuOpen }) => (
  <StyledBranding pose={menuOpen ? "visible" : "hidden"}>
    <Portrait />
  </StyledBranding>
);

export default MenuBranding;
