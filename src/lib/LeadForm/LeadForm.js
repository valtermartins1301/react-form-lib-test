import React from 'react'
import {
  createMemorySource,
  createHistory,
  LocationProvider,
  Router,
} from "@reach/router"
import loadable from '@loadable/component'
import LoadableContact from '../pages/ContactInformation'

const source = createMemorySource("/")
const history = createHistory(source)

const Loading = () => <p>Loading...</p>

const LoadableVehicle = loadable(() => import('../pages/VehicleInformation'), {
  fallback: <Loading/>,
})

const LeadForm = (props) => {
  return (
    <LocationProvider history={history}>
      <Router>
        <LoadableContact path="/" {...props}/>
        <LoadableVehicle path="/vehicle" {...props}/>
      </Router>
    </LocationProvider>
  )
}

export { LeadForm };
