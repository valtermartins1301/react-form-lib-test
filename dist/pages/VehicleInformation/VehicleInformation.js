import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SelectGroup } from '../../components/SelectGroup';
import { Input } from '../../components/Input';
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
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement("section", null, React.createElement(InputGroup, {
    label: "Qual \xE9 a marca e modelo?",
    type: "text",
    name: "vehicle"
  }), React.createElement(SelectGroup, {
    label: "Qual \xE9 o ano fabrica\xE7\xE3o?",
    name: "manufacturing-year",
    options: YEARS
  }), React.createElement(SelectGroup, {
    label: "Qual \xE9 o ano modelo?",
    name: "auto-year",
    options: YEARS
  })), React.createElement(Input, {
    type: "submit",
    value: "Finalizar"
  }));
};

export { VehicleInformation };