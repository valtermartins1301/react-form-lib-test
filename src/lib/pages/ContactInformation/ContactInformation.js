import React from 'react';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

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

const ContactInformation = ({history, className}) => {
  return (
    <div>
      <section className={className}>
        <h2>Nos conte sobre você!!!</h2>
        <Input label="Nome" type="text" name="username"/>
        <Input label="E-mail" type="email" name="usermail"/>
        <Input label="De quanto você precisa?" type="tel" name="amount"/>
        <Select label="Como esse empréstimo vai te ajudar?" name="purpose" options={LEAD_PURPOSE}/>
      </section>
      <input type="submit" value="Prosseguir"/>
    </div>
  )
}

export { ContactInformation };