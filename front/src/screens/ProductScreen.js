/*
  1. Import {Link} from 'react-router-dom'
  2. Import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap
  3. Import Rating 
  4. Import products from '../products'
  5. Set {id} equal to useParams();
  6. Find correct product with const product = products.find(p => p._id === id)
  7. Test if right product, inside of div place {product.name}
  8. Make empty div in return <> </>
  9. Inside empty div <Link className="btn btn-light my-3" to='/'>Go Back</Link>
  10. Make <Row> inside of Row place <Col md={6}> next <Col md={3}
  11. Inside <Col md={6}> place <Image src={product.image} alt={product.name} fluid> #fluid keeps image inside of its container
  12. Add <ListGroup variant="flush"> inside place <ListGroup.Item>
  13. Inside ListGroup.Item, place <h3>{product.name}</h3>
  14. Add another ListGroup.Item inside place <Rating value={product.rating} text={`${product.numReviews} reviews`}
  15. Another ListGroup.Item place: Price: ${product.price}
  16. Another ListGroup.Item place Description: {product.description}
  17. Add <Col md={3}-> <Card> -> <ListGroup variant='flush'> -> <ListGroup.Item> -> <Row> -> <Col> -> Price:
  18. Add another <Col> <strong>${product.price}</strong>
  19. Copy paste ListGroup and change Price to Status
  20. Inside second <Col> {product.countInStock greater than 0 ? 'In Stock' else 'Out of Stock'}
  21. New <ListGroup.Item> -> <Button className='btn-block' type='button' disabled={product.countInStock === 0} -> Add To Cart
  22.

*/
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  let {id} = useParams();

  const product = products.find(p => p._id === id)
  // const product = products.find(p => p._id === match.params.id)
  
  return (
    <>
      <Link className="btn btn-light my-3" to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
