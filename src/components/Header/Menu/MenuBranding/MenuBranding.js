import React from "react";
import styled from "styled-components";
import portrait from "../../../../img/portrait.jpg";
import smallPortrait from "../../../../img/portrait_small.jpg";

const StyledBranding = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  transform: ${({ menuOpen }) =>
    menuOpen ? "translate3d(0, 0, 0)" : "translate3d(0, 100%, 0)"};
  transition: all 0.5s ease-out;
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
    transform: ${({ menuOpen }) =>
      menuOpen ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)"};
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
  <StyledBranding menuOpen={menuOpen}>
    <Portrait />
  </StyledBranding>
);

export default MenuBranding;
