import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const StyledProject = styled.figure`
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;

  img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.9;
    border-radius: 15px;
  }

  figcaption {
    padding: 2em;
    color: #fff;
    font-size: 1.25em;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    h2,
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transition: opacity 0.35s, transform 0.35s;
      transform: translate3d(-50%, -50%, 0);
      transform-origin: 50%;
    }

    h2 {
      word-spacing: -0.15em;
      font-weight: 300;
      font-size: 158.75%;
      margin: 0;

      span {
        font-weight: 600;
      }
    }

    p {
      margin: 0;
      display: flex;
      justify-content: space-between;
      width: 100px;
      font-size: 200%;
      line-height: 2;

      a {
        &:first-child svg {
          transform: translate3d(-60px, -60px, 0);
        }

        &:nth-child(2) svg {
          transform: translate3d(60px, -60px, 0);
        }

        svg {
          opacity: 0;
          color: ${({ theme }) => theme.colors.white};
          transition: opacity 0.35s, transform 0.35s;
        }
      }

      a:hover,
      p a:focus {
        opacity: 0.6;
      }
    }

    > a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      text-indent: 200%;
      white-space: nowrap;
      font-size: 0;
      opacity: 0;
    }
  }

  figcaption::before,
  figcaption::after {
    pointer-events: none;
  }

  figcaption::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 148px;
    height: 148px;
    border: 2px solid #fff;
    content: "";
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg)
      scale3d(0, 0, 1);
    transform-origin: 50%;
  }

  :hover {
    figcaption::before {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, -45deg)
        scale3d(1, 1, 1);
    }

    h2 {
      opacity: 0;
      transform: translate3d(-50%, -50%, 0) scale3d(0.8, 0.8, 1);
    }

    a {
      &:first-child svg {
        transform: translate3d(0, 0, 0);
      }

      &:nth-child(2) svg {
        transform: translate3d(0, 0, 0);
      }

      svg {
        opacity: 1;
      }
    }
  }
`;

const Project = ({ image, demo, git, alt, children }) => {
  const [firstWord, secondWord] = children.split(" ");
  return (
    <StyledProject>
      <img src={image} alt={alt} />
      <figcaption>
        <h2>
          {firstWord}
          <span> {secondWord}</span>
        </h2>
        <p>
          <a href={demo}>
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href={git}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </figcaption>
    </StyledProject>
  );
};

export default Project;
