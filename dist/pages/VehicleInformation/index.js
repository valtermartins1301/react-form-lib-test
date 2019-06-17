import React from 'react';
import { Form } from "../../components/Form";
import { VehicleInformation } from './VehicleInformation';

var VehicleForm = function VehicleForm(props) {
  return React.createElement(Form, props, React.createElement(VehicleInformation, null));
};

export default VehicleForm;