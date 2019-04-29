import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: ${({ image }) => `url(${image})`};
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  width: 100%;
  line-height: 22px;
  font-size: 16px;
  padding: 13px 13px 13px 54px;
  margin: 15px 0;
  outline-color: ${({ theme }) => theme.colors.secondary};
  border: none;
`;

const Input = ({ type, name, placeholder, image }) => (
  <StyledInput
    type={type}
    name={name}
    placeholder={placeholder}
    image={image}
    required
  />
);

export default Input;
