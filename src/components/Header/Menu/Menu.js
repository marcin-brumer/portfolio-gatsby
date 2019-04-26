import React from "react";
import styled from "styled-components";
import MenuBranding from "./MenuBranding/MenuBranding";
import MenuNavigation from "./MenuNavigation/MenuNavigation";

const StyledMenu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.9;
`;

const Menu = ({ menuOpen }) => (
  <StyledMenu menuOpen={menuOpen}>
    <MenuBranding menuOpen={menuOpen} />
    <MenuNavigation menuOpen={menuOpen} />
  </StyledMenu>
);

export default Menu;
