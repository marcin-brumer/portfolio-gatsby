import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 20px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
    z-index: -2;
  }

  * {
    transition: 0.2s linear;
    color: #fff;
  }

  :hover * {
    transform: translateX(-2%) scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }

  ::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background: ${({ theme }) => theme.colors.secondary};
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
    z-index: -1;
  }

  :hover::before {
    animation: anim 0.7s 1;
    top: -10%;
    left: -10%;
  }

  @keyframes anim {
    0% {
      left: -110%;
      top: 90%;
    }
    50% {
      left: 10%;
      top: -30%;
    }
    100% {
      top: -10%;
      left: -10%;
    }
  }
`;

const SocialButton = ({ children, link }) => (
  <StyledButton href={link} target="_blank" rel="noopener noreferrer">
    {children}
  </StyledButton>
);

export default SocialButton;
