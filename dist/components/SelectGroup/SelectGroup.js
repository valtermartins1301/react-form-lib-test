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
import { Label } from '../Label';
import { Select } from '../Select';
var selectGroupBase = css(_templateObject());

var selectGroupRaw = function selectGroupRaw(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      options = _ref.options;
  return React.createElement("p", {
    className: className
  }, React.createElement(Label, {
    htmlFor: name,
    label: label
  }), React.createElement(Select, {
    id: name,
    name: name
  }, options.map(function (_ref2, index) {
    var value = _ref2.value,
        text = _ref2.text;
    return React.createElement("option", {
      key: index,
      value: value
    }, text);
  })));
};

var SelectGroup = styled(selectGroupRaw)(_templateObject2(), selectGroupBase);
export { SelectGroup };