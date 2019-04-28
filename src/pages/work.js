import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Header from "../components/Header/Header";
import LargeHeading from "../components/LargeHeading/LargeHeading";
import SmallHeading from "../components/SmallHeading/SmallHeading";
import WorkSection from "../components/WorkSection/WorkSection";
import Footer from "../components/Footer/Footer";
import background from "../img/background2.png";

const StyledMain = styled.main`
  background: url(${background}) center center repeat;
  padding: 3rem;
  min-height: calc(100vh - 50px);

  @media ${({ theme }) => theme.media.mobileL} {
    padding: 1rem;
  }
`;

const WorkPage = () => (
  <Layout>
    <Header />
    <StyledMain>
      <LargeHeading>My Work</LargeHeading>
      <SmallHeading>These are some of my latest projects...</SmallHeading>
      <WorkSection />
    </StyledMain>
    <Footer>Copyright © 2019 Marcin Brumer</Footer>
  </Layout>
);

export default WorkPage;
