import React, { Component } from "react";
import styled from '@emotion/styled'
import { Redirect } from 'react-router'
import {css} from '@emotion/core'

const mapFormValues = (elements) => {
  let response = {}

  for (let index = 0; index < elements.length; index++) {
    const {name, value} = elements[index]

    if(name) response[name] = value
  }

  return response
}

class FormRaw extends Component {
  state = {
    submited: false,
    beforeSubmit: this.props.beforeSubmit || (() => Promise.resolve()),
    afterSubmit: this.props.afterSubmit || (() => Promise.resolve()),
  }

  handleSubmit = async (event) => {
    event.persist();
    event.preventDefault();
    const { beforeSubmit, afterSubmit } = this.state;

    const mappedValues = mapFormValues(event.target.elements);
    await beforeSubmit(event, mappedValues);

    console.log(mappedValues);

    await afterSubmit();

    this.setState({ submited: true })
  }

  render() {
    const { submited } = this.state
    const { from } = this.props.location.state || { from: { pathname: "/" } }

    return (
      submited ? (
        <Redirect to={from}/>
      ) : (
        <form 
          data-netlify="true" 
          className={this.props.className} 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
      )
    );
  }
}

const baseForm = css`
  display: flex;
  justify-content: center;
`;

const Form = styled(FormRaw)`
  ${baseForm}
`

export { Form }