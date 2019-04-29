import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondaryDarken};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 7px;
  border: none;
  transition: all 0.3s ease-out;
  position: relative;
  overflow: hidden;
  :before {
    content: ">>";
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: -30px;
    width: 30px;
    height: 100%;
    transition: all 0.2s linear 0s;
    text-align: center;
  }
  :hover {
    text-indent: -30px;
    :before {
      right: 5px;
      text-indent: 0px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SubmitButton = ({ children }) => (
  <StyledButton type="submit">{children}</StyledButton>
);

export default SubmitButton;
