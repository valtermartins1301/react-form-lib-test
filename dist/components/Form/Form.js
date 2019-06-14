import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { Component } from "react";
import styled from '@emotion/styled';
import { Redirect } from 'react-router';
import { css } from '@emotion/core';

var mapFormValues = function mapFormValues(elements) {
  var response = {};

  for (var index = 0; index < elements.length; index++) {
    var _elements$index = elements[index],
        name = _elements$index.name,
        value = _elements$index.value;
    if (name) response[name] = value;
  }

  return response;
};

var FormRaw =
/*#__PURE__*/
function (_Component) {
  _inherits(FormRaw, _Component);

  function FormRaw() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FormRaw);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FormRaw)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      submited: false,
      beforeSubmit: _this.props.beforeSubmit || function () {
        return Promise.resolve();
      },
      afterSubmit: _this.props.afterSubmit || function () {
        return Promise.resolve();
      }
    };

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(event) {
        var _this$state, beforeSubmit, afterSubmit, mappedValues;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.persist();
                event.preventDefault();
                _this$state = _this.state, beforeSubmit = _this$state.beforeSubmit, afterSubmit = _this$state.afterSubmit;
                mappedValues = mapFormValues(event.target.elements);
                _context.next = 6;
                return beforeSubmit(event, mappedValues);

              case 6:
                console.log(mappedValues);
                _context.next = 9;
                return afterSubmit();

              case 9:
                _this.setState({
                  submited: true
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return _this;
  }

  _createClass(FormRaw, [{
    key: "render",
    value: function render() {
      var submited = this.state.submited;

      var _ref2 = this.props.location.state || {
        from: {
          pathname: "/"
        }
      },
          from = _ref2.from;

      return submited ? React.createElement(Redirect, {
        to: from
      }) : React.createElement("form", {
        "data-netlify": "true",
        className: this.props.className,
        onChange: this.handleChange,
        onSubmit: this.handleSubmit
      }, this.props.children);
    }
  }]);

  return FormRaw;
}(Component);

var baseForm = css(_templateObject());
var Form = styled(FormRaw)(_templateObject2(), baseForm);
export { Form };