import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const inputBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const inputRaw = ({className, label, type, name}) => {
  return (
     <p className={className}>
      <label htmlFor={name}>
        <span>{label}:</span>
      </label>
      <input 
        id={name} 
        name={name} 
        type={type}
        itemRef={name}
      />
    </p>
  )
}

const Input = styled(inputRaw)`
  ${inputBase}
`

export { Input }