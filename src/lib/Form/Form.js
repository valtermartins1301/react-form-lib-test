import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const LEAD_PURPOSE = [{
  value: '',
  text: 'Selecione um item'
},
{
  value: 'debts_payment',
  text: 'Pagar dívidas'
},
{
  value: 'investment_in_own_business',
  text: 'Investir'
},
{
  value: 'real_estate_renovation',
  text: 'Reformar a casa'
},
{
  value: 'goods_acquisition',
  text: 'Adquirir bens'
},
{
  value: 'debts_refinancing',
  text: 'Refinanciar dívidas'
},
{
  value: 'others',
  text: 'Outros'
}]

// Select
const selectBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const selectRaw = ({className, label, name, options}) => {
  return (
    <p className={className}>
      <label for={name}>
        <span>{label}</span>
      </label>
      <select id={name} name={name}>  
        {options.map(({value, text}) => {
          return (
            <option value={value}>
              {text}
            </option>
          )
        })}
      </select>
    </p>
  )
}

const Select = styled(selectRaw)`
  ${selectBase}
`

// Input
const inputBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const inputRaw = ({className, label, type, name}) => {
  return (
    <p className={className}>
      <label for={name}>
        <span>{label}:</span>
      </label>
      <input id={name} name type/>
    </p>
  )
}

const Input = styled(inputRaw)`
  ${inputBase}
`

// Contact information
const ContactInformation = ({className}) => {
  return (
    <section className={className}>
      <h2>Nos conte sobre você!</h2>
      <Input label="Nome" type="text" name="username"/>
      <Input label="E-mail" type="email" name="usermail"/>
      <Input label="De quanto você precisa?" type="tel" name="amount"/>
      <Select label="Como esse empréstimo vai te ajudar?" name="purpose" options={LEAD_PURPOSE}/>
    </section>
  )
}

// Form
const baseForm = css`
  display: flex;
  justify-content: center;
`;

const FormRaw = ({className}) => {
  return (
    <form className={className} name="contact" method="POST" data-netlify="true">
      <ContactInformation/>
    </form>
  )
}

const Form = styled(FormRaw)`
  ${baseForm}
`

export { Form };
