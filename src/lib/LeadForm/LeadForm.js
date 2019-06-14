import React from 'react';
import { MemoryRouter as Router } from "react-router";
import { Route } from "react-router-dom";
import { Form } from "../../components/Form";
import loadable from '@loadable/component'

const Loading = () => <p>Loading...</p>

const LoadableContact = loadable(() => import('./ContactInformation'), {
  fallback: Loading,
})
const LoadableVehicle = loadable(() => import('./VehicleInformation'), {
  fallback: Loading,
})

const ContactForm = (props) => {
  return (
    <Form {...props}>
      <LoadableContact/>
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
