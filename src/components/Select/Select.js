import React from 'react';
import styled from '@emotion/styled'
import {css} from '@emotion/core'

const selectBase = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const selectRaw = ({className, label, name, options}) => {
  return (
    <p className={className}>
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
      <select id={name} name={name}>  
        {options.map(({value, text}, index) => {
          return (
            <option key={index} value={value}>
              {text}
            </option>
          )
        })}
      </select>
    </p>
  )
}

const Select = styled(selectRaw)`
  ${selectBase}
`

export { Select }