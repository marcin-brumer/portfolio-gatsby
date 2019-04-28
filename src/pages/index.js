import React from "react";
import styled from "styled-components";
import Layout from "../layout/Layout";
import Header from "../components/Header/Header";
import LargeHeading from "../components/LargeHeading/LargeHeading";
import SmallHeading from "../components/SmallHeading/SmallHeading";
import SocialButton from "../components/UI/SocialButton/SocialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import background from "../img/background.jpg";

const StyledMain = styled.main`
  background: url(${background}) no-repeat center center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 25vh 3rem 3rem 3rem;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(68, 68, 68, 0.8);
  }

  @media ${({ theme }) => theme.media.tablet} {
    text-align: center;
  }

  @media ${({ theme }) => theme.media.mobileL} {
    padding: 25vh 2rem 2rem 2rem;
  }
`;

const SocialSection = styled.section`
  display: flex;
  width: 250px;
  justify-content: space-between;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.media.mobileS} {
    width: 60px;
    margin: 0 auto;
    flex-direction: column;
  }
`;

const IndexPage = () => (
  <Layout>
    <Header />
    <StyledMain>
      <LargeHeading>Marcin Brumer</LargeHeading>
      <SmallHeading text={["Web Developer", "Programmer"]} typeWriter />
      <SocialSection>
        <SocialButton link="https://www.linkedin.com/in/marcin-brumer-21469b175/">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialButton>
        <SocialButton link="https://github.com/marcin-brumer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialButton>
        <SocialButton link="https://codepen.io/Brumek/">
          <FontAwesomeIcon icon={faCodepen} />
        </SocialButton>
      </SocialSection>
    </StyledMain>
  </Layout>
);

export default IndexPage;
