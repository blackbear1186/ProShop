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
  13. Import ./Rating
  14. Replace product rating and numReview with Rating Tag value={product.rating} text={`${product.numReview} reviews`}
  15. Import { Link } from 'react-router-dom'
  16. Replace a href= with Link to= to speed up load page time
*/
// import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image}/>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <div className='my-3'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>     
    </Card>
  )
}

export default Product
