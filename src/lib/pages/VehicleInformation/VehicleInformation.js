import React from 'react';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

const YEARS = [{
  value: '',
  text: 'Selecione um item'
},
{
  value: '2019',
  text: '2019'
},
{
  value: '2018',
  text: '2018'
},
{
  value: '2017',
  text: '2017'
}]

const VehicleInformation = ({history, className}) => {
  return (
    <div>
      <section className={className}>
        <h2>Nos conte sobre o seu veículo</h2>
        <Input label="Qual é a marca e modelo?" type="text" name="vehicle"/>
        <Select label="Qual é o ano fabricação?" name="manufacturing-year" options={YEARS}/>
        <Select label="Qual é o ano modelo?" name="auto-year" options={YEARS}/>
      </section>
      <input type="submit" value="Finalizar"/>
    </div>
  )
}

export { VehicleInformation };