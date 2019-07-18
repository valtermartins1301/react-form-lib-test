import React from 'react';
import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { ContactInformation } from './ContactInformation';

var ContactForm = function ContactForm(props) {
  return React.createElement("div", {
    className: props.className
  }, React.createElement(Heading, null, "Nos conte sobre voc\xEA"), React.createElement(Form, Object.assign({
    nextStep: "vehicle"
  }, props), React.createElement(ContactInformation, null)));
};

export default ContactForm;