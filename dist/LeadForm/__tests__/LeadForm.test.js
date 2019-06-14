import React from 'react';
import ReactDOM from 'react-dom';
import { LeadForm } from "../LeadForm";
it('renders without crashing', function () {
  var div = document.createElement('div');
  ReactDOM.render(React.createElement(LeadForm, null), div);
  ReactDOM.unmountComponentAtNode(div);
});