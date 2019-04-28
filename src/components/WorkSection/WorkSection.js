import React from "react";
import styled from "styled-components";
import Project from "./Project/Project";
import avoidSpikes from "../../img/projects/Avoid The Spikes.jpg";
import comingSoon from "../../img/projects/Coming Soon.jpg";
import copywriter from "../../img/projects/Copywriter Portfolio.jpg";
import devQuiz from "../../img/projects/devQuiz.jpg";
import github from "../../img/projects/GitHub Search.png";
import landingPage from "../../img/projects/Landing Page.jpg";

const StyledSection = styled.section`
  display: grid;
  grid-gap: 0.7rem;
  padding-top: 2rem;
  grid-template-columns: repeat(4, 1fr);

  @media ${({ theme }) => theme.media.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${({ theme }) => theme.media.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WorkSection = () => (
  <StyledSection>
    <Project
      image={comingSoon}
      alt="Coming Soon"
      demo="https://inspiring-haibt-e93e3f.netlify.com/"
      git="https://github.com/marcin-brumer/Coming-Soon-Page"
    >
      Coming Soon
    </Project>
    <Project
      image={devQuiz}
      alt="dev Quiz"
      demo="https://vigorous-gates-13b65a.netlify.com/"
      git="https://github.com/marcin-brumer/devQuiz"
    >
      dev Quiz
    </Project>
    <Project
      image={avoidSpikes}
      alt="Avoid Spikes"
      demo="https://dazzling-raman-82fe6d.netlify.com/"
      git="https://github.com/marcin-brumer/Avoid-The-Spikes"
    >
      Avoid Spikes
    </Project>
    <Project
      image={copywriter}
      alt="KB Copywriting"
      demo="https://karolinabrumer.pl/"
      git="https://github.com/marcin-brumer/Copywriter-Portfolio"
    >
      KB Copywriting
    </Project>
    <Project
      image={github}
      alt="GitHub Search"
      demo="https://determined-heisenberg-39b0a3.netlify.com/index.html"
      git="https://github.com/marcin-brumer/GitHub-Search"
    >
      GitHub Search
    </Project>
    <Project
      image={landingPage}
      alt="Landing Page"
      demo="https://codepen.io/Brumek/full/WKGwmp/"
      git="https://github.com/marcin-brumer/Landing-Page"
    >
      Landing Page
    </Project>
  </StyledSection>
);

export default WorkSection;
