import React from 'react';
import {Global, css} from '@emotion/core'
import { LeadForm } from './lib'

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`

// App LeadForm
const App = ({className}) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <LeadForm/>
    </div>
  )
}

export default App;

