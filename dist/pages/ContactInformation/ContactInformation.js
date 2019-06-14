import React from 'react';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { withRouter } from "react-router-dom";
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
var ContactInformation = withRouter(function (_ref) {
  var history = _ref.history,
      className = _ref.className;
  return React.createElement("div", null, React.createElement("section", {
    className: className
  }, React.createElement("h2", null, "Nos conte sobre voc\xEA!"), React.createElement(Input, {
    label: "Nome",
    type: "text",
    name: "username"
  }), React.createElement(Input, {
    label: "E-mail",
    type: "email",
    name: "usermail"
  }), React.createElement(Input, {
    label: "De quanto voc\xEA precisa?",
    type: "tel",
    name: "amount"
  }), React.createElement(Select, {
    label: "Como esse empr\xE9stimo vai te ajudar?",
    name: "purpose",
    options: LEAD_PURPOSE
  })), React.createElement("input", {
    type: "submit",
    value: "Prosseguir",
    onClick: function onClick() {
      return history.push("/vehicle");
    }
  }));
});
export { ContactInformation };