import React from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import SubmitButton from "../UI/SubmitButton/SubmitButton";
import envelope from "../../img/svg/envelope.svg";
import pen from "../../img/svg/pen.svg";
import person from "../../img/svg/person.svg";

const StyledWrapper = styled.div`
  padding-top: 20px;
  width: 600px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactForm = () => (
  <StyledWrapper>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Input
        type="text"
        name="name"
        placeholder="Your name..."
        image={person}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email..."
        image={envelope}
      />
      <Textarea name="message" placeholder="Message..." rows="8" image={pen} />
      <SubmitButton>SEND</SubmitButton>
      <input type="hidden" name="form-name" value="contact-form" />
    </form>
  </StyledWrapper>
);

export default ContactForm;
