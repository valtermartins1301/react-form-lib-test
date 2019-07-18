import React from 'react'
import { Form } from "../../components/Form"
import { Heading } from "../../components/Heading"

import {VehicleInformation} from './VehicleInformation'

const VehicleForm = (props) => {
    return (
      <div className={props.className}>
        <Heading>Nos conte sobre o seu veículo</Heading>
        <Form {...props}>
          <VehicleInformation/>
        </Form>
      </div>
    )
  }

export default VehicleForm