import React, { useState } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton/MenuButton";
import Menu from "./Menu/Menu";

const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
`;

const Header = () => {
  const [menuOpen, toggleMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Menu menuOpen={menuOpen} />
      <MenuButton
        clicked={() => toggleMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
    </StyledHeader>
  );
};

export default Header;
