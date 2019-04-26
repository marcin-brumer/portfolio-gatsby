import React from "react";
import styled from "styled-components";
import portrait from "../../../../../img/portrait.jpg";
import smallPortrait from "../../../../../img/portrait_small.jpg";

const StyledPortrait = styled.div`
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

const Portrait = () => <StyledPortrait />;

export default Portrait;
