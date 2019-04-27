import React from "react";
import styled from "styled-components";

const StyledBio = styled.div`
  grid-area: b;
  font-size: 1.5rem;
  text-align: justify;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Bio = () => (
  <StyledBio>
    <H3>BIO</H3>
    <p>
      I'm a self taught developer from Poland. I have a master degree in civil
      engineering, but my true passion is web development. I always wanted to
      learn some programing language, and about year ago I decided that it's
      time to stop making excuses why I cant't do that, and just start working
      on it. I began my journey by making few simple mobile games using C# and
      Unity, but then I realized that web development is the thing for me. Today
      I mainly work with front-end technologies, trying to learn something new
      every day. These are some of the technologies and tools that I'm familiar
      with:
    </p>
  </StyledBio>
);

export default Bio;
