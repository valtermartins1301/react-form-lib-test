import React, { Component } from "react";
import styled from '@emotion/styled'
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
    beforeSubmit: this.props.beforeSubmit || (() => Promise.resolve()),
    afterSubmit: this.props.afterSubmit || (() => Promise.resolve()),
    nextStep: this.props.nextStep || ""
  }

  handleSubmit = async (event) => {
    event.persist();
    event.preventDefault();
    const { beforeSubmit, afterSubmit, nextStep } = this.state;

    const mappedValues = mapFormValues(event.target.elements);
    await beforeSubmit(event, mappedValues);

    console.log(mappedValues);

    await afterSubmit();

    this.props.navigate(`/${nextStep}`)

  }

  render() {
    return (
      <form 
        data-netlify="true" 
        className={this.props.className} 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
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