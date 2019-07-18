import React from 'react'
import { Form } from "../../components/Form"
import { Heading } from "../../components/Heading"
import {ContactInformation} from './ContactInformation'

const ContactForm = (props) => {
    return (
      <div className={props.className}>
        <Heading>Nos conte sobre você</Heading>
        <Form nextStep="vehicle" {...props}>
          <ContactInformation/>
        </Form>
      </div>
    )
  }

export default ContactForm;