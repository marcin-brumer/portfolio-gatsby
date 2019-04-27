import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  font-size: 1.1rem;
  margin: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Logo = ({ image, children }) => (
  <StyledLogo>
    <Img src={image} alt={children} />
    <p>{children}</p>
  </StyledLogo>
);

export default Logo;
