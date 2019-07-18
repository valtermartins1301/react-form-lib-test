import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

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
import { Input } from '../Input';
import { Label } from '../Label';
var inputBase = css(_templateObject());

var inputRaw = function inputRaw(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? '' : _ref$type,
      name = _ref.name,
      placeholder = _ref.placeholder;
  return React.createElement("p", {
    className: className
  }, React.createElement(Label, {
    htmlFor: name,
    label: label
  }), React.createElement(Input, {
    id: name,
    name: name,
    type: type,
    itemRef: name,
    placeholder: placeholder
  }));
};

var InputGroup = styled(inputRaw)(_templateObject2(), inputBase);
export { InputGroup };