import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n\n  img {\n    height: 5em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { Subheading } from "../../components/Subheading";
import logo from '../../images/logo.svg';
import { Intro } from './Intro';
var introBase = css(_templateObject());

var introRaw = function introRaw(props) {
  return React.createElement("div", {
    className: props.className
  }, React.createElement("img", {
    src: logo,
    alt: "Logo"
  }), React.createElement(Heading, null, "Queremos conhecer voc\xEA"), React.createElement(Subheading, null, "Vamos encontrar o empr\xE9stimo ideal para o seu momento"), React.createElement(Form, Object.assign({
    nextStep: "contact"
  }, props), React.createElement(Intro, null)));
};

var IntroForm = styled(introRaw)(_templateObject2(), introBase);
export default IntroForm;