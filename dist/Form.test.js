import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(Form, null), div);
  ReactDOM.unmountComponentAtNode(div);
});