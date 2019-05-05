import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Header from "../components/Header/Header";
import LargeHeading from "../components/LargeHeading/LargeHeading";
import SmallHeading from "../components/SmallHeading/SmallHeading";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import background from "../img/background2.png";

const StyledMain = styled.main`
  background: url(${background}) center center repeat;
  padding: 3rem;
  min-height: calc(100vh - 50px);

  @media ${({ theme }) => theme.media.mobileL} {
    padding: 3rem 1rem 1rem 1rem;
  }
`;

const ContactPage = () => (
  <Layout>
    <Header />
    <StyledMain>
      <LargeHeading>Contact Me</LargeHeading>
      <SmallHeading>Let's have a chat...</SmallHeading>
      <ContactForm />
    </StyledMain>
    <Footer>Copyright © 2019 Marcin Brumer</Footer>
  </Layout>
);

export default ContactPage;
