import React from 'react';
import { createMemorySource, createHistory, LocationProvider, Router } from "@reach/router";
import loadable from '@loadable/component';
import Intro from '../pages/Intro';
var source = createMemorySource("/");
var history = createHistory(source);

var Loading = function Loading() {
  return React.createElement("p", null, "Loading...");
};

var LoadableContact = loadable(function () {
  return import('../pages/ContactInformation');
}, {
  fallback: React.createElement(Loading, null)
});
var LoadableVehicle = loadable(function () {
  return import('../pages/VehicleInformation');
}, {
  fallback: React.createElement(Loading, null)
});

var LeadForm = function LeadForm(props) {
  return React.createElement(LocationProvider, {
    history: history
  }, React.createElement(Router, null, React.createElement(Intro, Object.assign({
    path: "/"
  }, props)), React.createElement(LoadableContact, Object.assign({
    path: "/contact"
  }, props)), React.createElement(LoadableVehicle, Object.assign({
    path: "/vehicle"
  }, props))));
};

export { LeadForm };