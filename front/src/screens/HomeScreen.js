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
  12. Coming From Product -> add key={product._id} after Col
  13. Go to index.css
  14. From installing axios -> To connect backend to frontend Delete 'import products from'
  15. Add useState -> import React, {useState, useEffect} from 'react'
  16. In function set const [products, setProducts] = useState([])
  17. Declare useEffect(()=> { const fetchProducts = async () => {
    const {data} = await axios.get('/api/products') setProducts(data)
  } fetchProducts() }, [])
  18. Import axios from axios
  19. Create proxy server in package.json frontend
  20. Do the same thing in ProductScreen
*/
import React, {useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

  const [products, setProducts] = useState([])
  // create fetchProducts function within useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      // Destructure would be res but it data
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h2>Latest Products</h2>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

