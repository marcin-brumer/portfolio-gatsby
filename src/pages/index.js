import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import LargeHeading from "../components/LargeHeading/LargeHeading";
import SmallHeading from "../components/SmallHeading/SmallHeading";
import background from "../img/background.jpg";

const StyledWrapper = styled.main`
  background: url(${background}) no-repeat center center;
  background-size: cover;
  position: relative;
  height: 100vh;
  padding: 25vh 3rem 3rem 3rem;
  z-index: -1;
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    z-index: -1;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
  }

  @media ${({ theme }) => theme.media.tablet} {
    text-align: center;
  }

  @media ${({ theme }) => theme.media.mobileL} {
    padding: 25vh 2rem 2rem 2rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <StyledWrapper>
      <LargeHeading>Marcin Brumer</LargeHeading>
      <SmallHeading text={["Web Developer", "Programmer"]} typeWriter />
    </StyledWrapper>
  </Layout>
);

export default IndexPage;
