import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5em;\n  text-align: center;\n  margin: 0.5em 1em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from '@emotion/styled';
import { css } from '@emotion/core';
var HeadingBase = css(_templateObject());
var Heading = styled.p(_templateObject2(), HeadingBase);
export { Heading };