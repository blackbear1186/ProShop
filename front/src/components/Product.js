/*
  1. Import card from react bootstrap
  2. Add a link href product._id inside Card tag
  3. Add Card.Img product.image inside a tag
  4. Add Card.Body
  5. Put a href inside Card Body
  6. Add Card.Title inside a link include as='div' to be clickable
  7. Add product.name wrapped in strong inside Card.Title
  8. Add Card.Text as='div' under alink product title 
  9. Inside Card text create div w/ class my-3 
  10. Inside div put {product.rating} from {product.numReviews} reviews
  11. Add new Card.Text as h3
  12. Add dollar sign {product.price} inside Card.Text
*/
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image}/>
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews}
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>     
    </Card>
  )
}

export default Product
