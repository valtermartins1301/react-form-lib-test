import React from 'react';
import ReactDOM from 'react-dom';
import { LeadForm } from '../LeadForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeadForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
