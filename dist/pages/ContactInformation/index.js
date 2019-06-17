import React from 'react';
import { Form } from "../../components/Form";
import { ContactInformation } from './ContactInformation';

var ContactForm = function ContactForm(props) {
  return React.createElement(Form, Object.assign({
    nextStep: "vehicle"
  }, props), React.createElement(ContactInformation, null));
};

export default ContactForm;