import React from 'react';
import {Global, css} from '@emotion/core'
import { LeadForm } from './lib'
import lucidaGrande from './lib/fonts/lucida-grande.woff';

const globalStyles = css`
  @font-face {
    font-family: 'Lucida Grande';
    src: url('${lucidaGrande}') format("woff");
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: 'Lucida Grande';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-image: linear-gradient(
      to bottom, 
      #fff 0%, 
      #fff 50%, 
      #37b 50%, 
      #37b 100%
    );
    background-size: cover;
    background-repeat: no-repeat;
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

