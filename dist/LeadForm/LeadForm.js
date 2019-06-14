import React from 'react';
import { MemoryRouter as Router } from "react-router";
import { Route } from "react-router-dom";
import { Form } from "../components/Form";
import loadable from '@loadable/component';
import ContactInformation from '../pages/ContactInformation';

var Loading = function Loading() {
  return React.createElement("p", null, "Loading...");
};

var LoadableVehicle = loadable(function () {
  return import('../pages/VehicleInformation');
}, {
  fallback: Loading
});

var ContactForm = function ContactForm(props) {
  return React.createElement(Form, props, React.createElement(ContactInformation, null));
};

var VehicleForm = function VehicleForm(props) {
  return React.createElement(Form, props, React.createElement(LoadableVehicle, null));
};

var LeadForm = function LeadForm(_ref) {
  var step = _ref.step,
      beforeSubmit = _ref.beforeSubmit,
      afterSubmit = _ref.afterSubmit;
  return React.createElement(Router, {
    initialEntries: ["/", "/vehicle"],
    initialIndex: 0
  }, React.createElement(Route, {
    path: "/",
    exact: true,
    component: ContactForm
  }), React.createElement(Route, {
    path: "/vehicle",
    component: VehicleForm
  }));
};

export { LeadForm };