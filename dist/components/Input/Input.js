import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  background-color: #285;\n  text-transform: uppercase;\n  font-weight: 600;\n  text-align: center;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.75rem;\n  border: 0.0625em solid #ddd;\n  border-radius: .125em;\n  font-size: 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from '@emotion/styled';
import { css } from '@emotion/core';
var inputBase = css(_templateObject());

var inputSubmit = function inputSubmit(_ref) {
  var type = _ref.type;
  return type === 'submit' && css(_templateObject2());
};

var Input = styled.input(_templateObject3(), inputBase, inputSubmit);
export { Input };