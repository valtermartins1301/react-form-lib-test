import React from 'react'
import {
  createMemorySource,
  createHistory,
  LocationProvider,
  Router,
} from "@reach/router"
import loadable from '@loadable/component'
import Intro from '../pages/Intro'

const source = createMemorySource("/")
const history = createHistory(source)

const Loading = () => <p>Loading...</p>

const LoadableContact = loadable(() => import('../pages/ContactInformation'), {
  fallback: <Loading/>,
})

const LoadableVehicle = loadable(() => import('../pages/VehicleInformation'), {
  fallback: <Loading/>,
})

const LeadForm = (props) => {
  return (
    <LocationProvider history={history}>
      <Router>
        <Intro path="/" {...props}/>
        <LoadableContact path="/contact" {...props}/>
        <LoadableVehicle path="/vehicle" {...props}/>
      </Router>
    </LocationProvider>
  )
}

export { LeadForm };
