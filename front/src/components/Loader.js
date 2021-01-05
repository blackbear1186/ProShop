/*
  1. Import React
  2. Import {Spinner} from 'react-bootstrap'
  3. Return spinner tag styles
  4. Create span and add loading text
*/

import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span class='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
