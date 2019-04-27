import React from "react";
import styled from "styled-components";
import portrait from "../../../img/portrait.jpg";

const StyledPortrait = styled.img`
  grid-area: i;
  margin: auto;
  border-radius: 50%;
  border: solid 3px ${({ theme }) => theme.colors.secondary};
`;

const Portrait = () => <StyledPortrait src={portrait} alt="Marcin Brumer" />;

export default Portrait;
