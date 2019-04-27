import React from "react";
import styled from "styled-components";
import Logo from "./Logo/Logo";
import html from "../../../img/logos/HTML5.png";
import css from "../../../img/logos/css3.png";
import js from "../../../img/logos/javascript.png";
import react from "../../../img/logos/react.png";
import sass from "../../../img/logos/sass.png";
import bootstrap from "../../../img/logos/Bootstrap.png";
import github from "../../../img/logos/github.png";
import npm from "../../../img/logos/npm.png";
import webpack from "../../../img/logos/webpack.png";
import vscode from "../../../img/logos/vscode.png";

const StyledLogos = styled.div`
  grid-area: s;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Logos = () => (
  <StyledLogos>
    <Logo image={html}>HTML5</Logo>
    <Logo image={css}>CSS3</Logo>
    <Logo image={js}>JavaScript</Logo>
    <Logo image={react}>React.js</Logo>
    <Logo image={sass}>Sass</Logo>
    <Logo image={bootstrap}>Bootstrap</Logo>
    <Logo image={github}>GitHub</Logo>
    <Logo image={npm}>npm</Logo>
    <Logo image={webpack}>webpack</Logo>
    <Logo image={vscode}>VS Code</Logo>
  </StyledLogos>
);

export default Logos;
