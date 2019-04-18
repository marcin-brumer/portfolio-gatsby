import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  position: absolute;
  z-index: 3;
  right: 35px;
  top: 35px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  transform: ${({ menuOpen }) => (menuOpen ? "rotate(180deg)" : "none")};
`;

const ButtonLine = styled.div`
  width: 28px;
  height: 3px;
  margin: 0 0 5px 0;
  background: ${({ theme }) => theme.colors.white};
  transition: all 0.5s ease-out;

  &:nth-child(1) {
    width: ${({ menuOpen }) => (menuOpen ? "34px" : "inherit")};
    transform: ${({ menuOpen }) =>
      menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
  }
  &:nth-child(2) {
    opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  }
  &:nth-child(3) {
    width: ${({ menuOpen }) => (menuOpen ? "34px" : "inherit")};
    transform: ${({ menuOpen }) =>
      menuOpen ? "rotate(-45deg) translate(7px, -6px)" : "none"};
  }
`;

const MenuButton = ({ clicked, menuOpen }) => {
  return (
    <StyledButton onClick={clicked} menuOpen={menuOpen}>
      <ButtonLine menuOpen={menuOpen} />
      <ButtonLine menuOpen={menuOpen} />
      <ButtonLine menuOpen={menuOpen} />
    </StyledButton>
  );
};

export default MenuButton;
