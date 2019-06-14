import React from 'react'
import { MemoryRouter as Router } from "react-router"
import { Route } from "react-router-dom"
import { Form } from "../components/Form"
import loadable from '@loadable/component'
import {ContactInformation} from '../pages/ContactInformation'
const Loading = () => <p>Loading...</p>


const LoadableVehicle = loadable(() => import('../pages/VehicleInformation'), {
  fallback: Loading,
})

const ContactForm = (props) => {
  return (
    <Form {...props}>
      <ContactInformation/>
    </Form>
  )
}

const VehicleForm = (props) => {
  return (
    <Form {...props}>
      <LoadableVehicle/>
    </Form>
  )
}

const LeadForm = ({step, beforeSubmit, afterSubmit}) => {
  return (
    <Router>
      <Route path="/" exact component={ContactForm} />
      <Route path="/vehicle" component={VehicleForm} />
    </Router>
  )
}

export { LeadForm };
