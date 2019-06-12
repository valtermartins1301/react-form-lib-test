import React from 'react';
import {Global, css} from '@emotion/core'
import { Form } from './lib'

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
`

// App form
const App = ({className}) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Form/>
    </div>
  )
}

export default App;

