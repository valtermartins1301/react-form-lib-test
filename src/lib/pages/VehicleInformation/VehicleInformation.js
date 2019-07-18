import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import { SelectGroup } from '../../components/SelectGroup';
import {Input} from '../../components/Input';

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

const VehicleInformation = ({className}) => {
  return (
    <div className={className}>
      <section>
        <InputGroup label="Qual é a marca e modelo?" type="text" name="vehicle"/>
        <SelectGroup label="Qual é o ano fabricação?" name="manufacturing-year" options={YEARS}/>
        <SelectGroup label="Qual é o ano modelo?" name="auto-year" options={YEARS}/>
      </section>
      <Input type="submit" value="Finalizar"/>
    </div>
  )
}

export { VehicleInformation };