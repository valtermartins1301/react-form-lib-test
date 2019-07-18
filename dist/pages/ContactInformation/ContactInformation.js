import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SelectGroup } from '../../components/SelectGroup';
import { Input } from '../../components/Input';
var LEAD_PURPOSE = [{
  value: '',
  text: 'Selecione um item'
}, {
  value: 'debts_payment',
  text: 'Pagar dívidas'
}, {
  value: 'investment_in_own_business',
  text: 'Investir'
}, {
  value: 'real_estate_renovation',
  text: 'Reformar a casa'
}, {
  value: 'goods_acquisition',
  text: 'Adquirir bens'
}, {
  value: 'debts_refinancing',
  text: 'Refinanciar dívidas'
}, {
  value: 'others',
  text: 'Outros'
}];

var ContactInformation = function ContactInformation(_ref) {
  var className = _ref.className;
  return React.createElement("div", {
    className: className
  }, React.createElement("section", null, React.createElement(InputGroup, {
    label: "CPF",
    type: "number",
    name: "cpf"
  }), React.createElement(InputGroup, {
    label: "E-mail",
    type: "email",
    name: "usermail"
  }), React.createElement(InputGroup, {
    label: "De quanto voc\xEA precisa?",
    type: "tel",
    name: "amount"
  }), React.createElement(SelectGroup, {
    label: "Como esse empr\xE9stimo vai te ajudar?",
    name: "purpose",
    options: LEAD_PURPOSE
  })), React.createElement(Input, {
    type: "submit",
    value: "Continuar"
  }));
};

export { ContactInformation };