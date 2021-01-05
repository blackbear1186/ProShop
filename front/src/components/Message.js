/*
  1. Import React
  2. Import {Alert} from 'react-bootstrap'
  3. Add variant and children parameters to Message function in brackets
  4. Add Alert tags variant 
  5. Create Message.defaultProps object 
*/

import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      {children} 
    </Alert>
  )

  Message.defaultProps = {
    variant: 'info',
  }
}

export default Message
