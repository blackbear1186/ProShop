/*
  1. Import Container, row, col
  2. Add container, row, col tags with col text center padding y-axis
*/
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer>
    <Container>
      <Row>
        <Col className='text-center py-3'>
          Copyright &copy; ProShop
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

export default Footer
