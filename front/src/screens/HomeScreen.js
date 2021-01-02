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
  21. Bring in Redux ->Delete axios
  22. Delete useEffect function data, const [products, setProducts], useState
  23. Import useDispatch, useSelector
  24. Import listProducts
  25. Set const dispatch equal to useDispatch()
  26. Pass listProducts() into dispatch in useEffect()
  27. Set productList equal to useSelector with state param function
  28. Set const {loading, error, products} equal to product list
  29. Check if loading under <h1></h1>
*/
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList
  // create fetchProducts function within useEffect
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
