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
var inputBase = css(_templateObject());

var inputRaw = function inputRaw(_ref) {
  var className = _ref.className,
      label = _ref.label,
      type = _ref.type,
      name = _ref.name;
  return React.createElement("p", {
    className: className
  }, React.createElement("label", {
    htmlFor: name
  }, React.createElement("span", null, label, ":")), React.createElement("input", {
    id: name,
    name: name,
    type: type,
    itemRef: name
  }));
};

var Input = styled(inputRaw)(_templateObject2(), inputBase);
export { Input };