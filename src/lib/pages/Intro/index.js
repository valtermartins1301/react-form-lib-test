import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import { Form } from "../../components/Form"
import { Heading } from "../../components/Heading"
import {Subheading} from "../../components/Subheading"
import { ReactComponent as Logo } from '../../images/logo.svg';
import {Intro} from './Intro'

const introBase = css`
  text-align: center;

  svg {
    height: 5em;
  }
`

const introRaw = (props) => {
  return (
    <div className={props.className}>
      <Logo/>
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
const firstPage = (props) => {
  return (
    <IntroForm></IntroForm>
  )
}

export default firstPage;