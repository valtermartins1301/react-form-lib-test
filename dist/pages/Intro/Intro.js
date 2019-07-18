import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import { Input } from '../../components/Input';

var Intro = function Intro(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement("section", null, React.createElement(InputGroup, {
    label: "Nome Completo",
    type: "text",
    name: "username",
    placeholder: "Ex: Andr\xE9 Marques"
  })), React.createElement(Input, {
    type: "submit",
    value: "Continuar"
  }));
};

export { Intro };