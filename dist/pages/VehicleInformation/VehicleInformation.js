import React from 'react';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
var YEARS = [{
  value: '',
  text: 'Selecione um item'
}, {
  value: '2019',
  text: '2019'
}, {
  value: '2018',
  text: '2018'
}, {
  value: '2017',
  text: '2017'
}];

var VehicleInformation = function VehicleInformation(_ref) {
  var history = _ref.history,
      className = _ref.className;
  return React.createElement("div", null, React.createElement("section", {
    className: className
  }, React.createElement("h2", null, "Nos conte sobre o seu ve\xEDculo"), React.createElement(Input, {
    label: "Qual \xE9 a marca e modelo?",
    type: "text",
    name: "vehicle"
  }), React.createElement(Select, {
    label: "Qual \xE9 o ano fabrica\xE7\xE3o?",
    name: "manufacturing-year",
    options: YEARS
  }), React.createElement(Select, {
    label: "Qual \xE9 o ano modelo?",
    name: "auto-year",
    options: YEARS
  })), React.createElement("input", {
    type: "submit",
    value: "Finalizar"
  }));
};

export { VehicleInformation };