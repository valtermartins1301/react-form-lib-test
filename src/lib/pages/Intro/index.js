import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import { Form } from "../../components/Form"
import { Heading } from "../../components/Heading"
import {Subheading} from "../../components/Subheading"
import logo from '../../images/logo.svg';
import {Intro} from './Intro'

const introBase = css`
  text-align: center;

  img {
    height: 5em;
  }
`

const introRaw = (props) => {
  return (
    <div className={props.className}>
      <img src={logo} alt="Logo" />
      <Heading>Queremos conhecer você</Heading>
      <Subheading>Vamos encontrar o empréstimo ideal para o seu momento</Subheading>
      <Form nextStep="contact" {...props}>
        <Intro/>
      </Form>
    </div>
  )
}

const IntroForm = styled(introRaw)`
  ${introBase}
`

export default IntroForm;