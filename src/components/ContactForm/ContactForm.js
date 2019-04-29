import React from "react";
import styled from "styled-components";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import SubmitButton from "../UI/SubmitButton/SubmitButton";
import envelope from "../../img/svg/envelope.svg";
import pen from "../../img/svg/pen.svg";
import person from "../../img/svg/person.svg";

const StyledForm = styled.form`
  padding-top: 20px;
  width: 600px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactForm = () => (
  <StyledForm netlify>
    <Input type="text" name="name" placeholder="Your name..." image={person} />
    <Input type="email" name="email" placeholder="Email..." image={envelope} />
    <Textarea name="message" placeholder="Message..." rows="8" image={pen} />
    <SubmitButton>SEND</SubmitButton>
  </StyledForm>
);

export default ContactForm;
