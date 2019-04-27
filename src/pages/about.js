import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Header from "../components/Header/Header";
import LargeHeading from "../components/LargeHeading/LargeHeading";
import SmallHeading from "../components/SmallHeading/SmallHeading";
import AboutSection from "../components/AboutSection/AboutSection";
import Footer from "../components/Footer/Footer";
import background from "../img/background2.png";

const StyledMain = styled.main`
  background: url(${background}) center center repeat;
  padding: 3rem;
  min-height: calc(100vh - 50px);
`;

const AboutPage = () => (
  <Layout>
    <Header />
    <StyledMain>
      <LargeHeading>About Me</LargeHeading>
      <SmallHeading>Let me tell a few things...</SmallHeading>
      <AboutSection />
    </StyledMain>
    <Footer>Copyright © 2019 Marcin Brumer</Footer>
  </Layout>
);

export default AboutPage;
