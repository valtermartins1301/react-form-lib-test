import React from 'react';
import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { VehicleInformation } from './VehicleInformation';

var VehicleForm = function VehicleForm(props) {
  return React.createElement("div", {
    className: props.className
  }, React.createElement(Heading, null, "Nos conte sobre o seu ve\xEDculo"), React.createElement(Form, props, React.createElement(VehicleInformation, null)));
};

export default VehicleForm;