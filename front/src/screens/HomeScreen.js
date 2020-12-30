/*
  1. Import React 
  2. Import products ../products
  3. Make div empty
  4. Add h2 
  5. Add Row 
  6. Import Row, Col from react-bootstrap
  7. Iterate through products using .map() inside of Row 
  8. Set h3 of product.name iteration inside of Col
  9. set columns to sm={12} md={6} lg={4} xl={3} as class
  10. Import Product from ../components/Product
  11. Replace h3 with Product tag and product={product} from map array
*/
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

