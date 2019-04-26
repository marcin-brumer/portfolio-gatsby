import React from "react";
import styled from "styled-components";
import portrait from "../../../../img/portrait.jpg";
import smallPortrait from "../../../../img/portrait_small.jpg";
import posed from "react-pose";

const PosedBranding = posed.div({
  visible: {
    y: 0,
    x: 0,
    transition: {
      default: { duration: 500 },
    },
  },
  hidden: {
    y: "-100%",
    x: "-100%",
    transition: {
      default: { duration: 500 },
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

const Portrait = styled.div`
  width: 250px;
  height: 250px;
  background: url(${portrait});
  border-radius: 50%;
  border: solid 3px ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.media.tablet} {
    background: url(${smallPortrait});
    width: 150px;
    height: 150px;
  }
`;

const MenuBranding = ({ menuOpen }) => (
  <StyledBranding pose={menuOpen ? "visible" : "hidden"}>
    <Portrait />
  </StyledBranding>
);

export default MenuBranding;
