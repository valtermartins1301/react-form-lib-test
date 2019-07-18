import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import {Input} from '../../components/Input';

const Intro = ({className}) => {
  return (
    <div className={className}>
      <section>
        <InputGroup label="Nome Completo" type="text" name="username" placeholder="Ex: André Marques"/>
      </section>
      <Input type="submit" value="Continuar"/>
    </div>
  )
}

export { Intro };