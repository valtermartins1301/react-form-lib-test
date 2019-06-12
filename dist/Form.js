import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
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
}]; // Select

var selectBase = css(_templateObject());

var selectRaw = function selectRaw(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      options = _ref.options;
  return React.createElement("p", {
    className: className
  }, React.createElement("label", {
    "for": name
  }, React.createElement("span", null, label)), React.createElement("select", {
    id: name,
    name: name
  }, options.map(function (_ref2) {
    var value = _ref2.value,
        text = _ref2.text;
    return React.createElement("option", {
      value: value
    }, text);
  })));
};

var Select = styled(selectRaw)(_templateObject2(), selectBase); // Input

var inputBase = css(_templateObject3());

var inputRaw = function inputRaw(_ref3) {
  var className = _ref3.className,
      label = _ref3.label,
      type = _ref3.type,
      name = _ref3.name;
  return React.createElement("p", {
    className: className
  }, React.createElement("label", {
    "for": name
  }, React.createElement("span", null, label, ":")), React.createElement("input", {
    id: name,
    name: true,
    type: true
  }));
};

var Input = styled(inputRaw)(_templateObject4(), inputBase); // Contact information

var ContactInformation = function ContactInformation(_ref4) {
  var className = _ref4.className;
  return React.createElement("section", {
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
  }));
}; // Form


var baseForm = css(_templateObject5());

var FormRaw = function FormRaw(_ref5) {
  var className = _ref5.className;
  return React.createElement("form", {
    className: className,
    name: "contact",
    method: "POST",
    "data-netlify": "true"
  }, React.createElement(ContactInformation, null));
};

var Form = styled(FormRaw)(_templateObject6(), baseForm);
export { Form };