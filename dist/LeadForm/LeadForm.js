import React from 'react';
import { MemoryRouter as Router } from "react-router";
import { Route } from "react-router-dom";
import { Form } from "components/Form";
import loadable from '@loadable/component';

var Loading = function Loading() {
  return React.createElement("p", null, "Loading...");
};

var LoadableContact = loadable(function () {
  return import('pages/ContactInformation');
}, {
  fallback: Loading
});
var LoadableVehicle = loadable(function () {
  return import('pages/VehicleInformation');
}, {
  fallback: Loading
});

var ContactForm = function ContactForm(props) {
  return React.createElement(Form, props, React.createElement(LoadableContact, null));
};

var VehicleForm = function VehicleForm(props) {
  return React.createElement(Form, props, React.createElement(LoadableVehicle, null));
};

var LeadForm = function LeadForm(_ref) {
  var step = _ref.step,
      beforeSubmit = _ref.beforeSubmit,
      afterSubmit = _ref.afterSubmit;
  return React.createElement(Router, null, React.createElement(Route, {
    path: "/",
    exact: true,
    component: ContactForm
  }), React.createElement(Route, {
    path: "/vehicle",
    component: VehicleForm
  }));
};

export { LeadForm };