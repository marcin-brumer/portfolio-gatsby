import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet
        title={"Portfolio - Marcin Brumer"}
        meta={[
          { name: "description", content: "Portfolio - Marcin Brumer" },
          {
            name: "keywords",
            content: "portfolio webdeveloper marcin brumer programmer",
          },
        ]}
      />
      <>
        <GlobalStyle />
        {children}
      </>
    </>
  </ThemeProvider>
);

export default Layout;
