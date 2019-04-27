import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.white};
  height: 50px;
`;

const Footer = ({ children }) => <StyledFooter>{children}</StyledFooter>;

export default Footer;
