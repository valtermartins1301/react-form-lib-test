import React from 'react'
import { Form } from "../../components/Form"

import {VehicleInformation} from './VehicleInformation'

const VehicleForm = (props) => {
    return (
      <Form {...props}>
        <VehicleInformation/>
      </Form>
    )
  }

export default VehicleForm