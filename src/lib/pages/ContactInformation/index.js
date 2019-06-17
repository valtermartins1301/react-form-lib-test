import React from 'react'
import { Form } from "../../components/Form"

import {ContactInformation} from './ContactInformation'

const ContactForm = (props) => {
    return (
      <Form nextStep="vehicle" {...props}>
        <ContactInformation/>
      </Form>
    )
  }

export default ContactForm;