import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #4a4a4a;\n  margin-bottom: .5rem;\n  font-family: 'Work Sans',sans-serif;\n  letter-spacing: -.25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
var labelBase = css(_templateObject());

var labelRaw = function labelRaw(_ref) {
  var className = _ref.className,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      htmlFor = _ref.htmlFor;
  return React.createElement("label", {
    className: className,
    htmlFor: htmlFor
  }, React.createElement("span", null, label.toUpperCase()));
};

var Label = styled(labelRaw)(_templateObject2(), labelBase);
export { Label };