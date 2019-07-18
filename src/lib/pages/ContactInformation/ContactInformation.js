import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SelectGroup } from '../../components/SelectGroup';
import {Input} from '../../components/Input';

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

const ContactInformation = ({className}) => {
  return (
    <div className={className}>
      <section>
        <InputGroup label="CPF" type="number" name="cpf"/>
        <InputGroup label="E-mail" type="email" name="usermail"/>
        <InputGroup label="De quanto você precisa?" type="tel" name="amount"/>
        <SelectGroup label="Como esse empréstimo vai te ajudar?" name="purpose" options={LEAD_PURPOSE}/>
      </section>
      <Input type="submit" value="Continuar"/>
    </div>
  )
}

export { ContactInformation };