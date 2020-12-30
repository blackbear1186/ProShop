/*
  1. Add value, and text as function parameters
  2. Add className='rating to div
  3. Add span tags between div
  4. Add i className={if value >= 1 full star or value >= .5 half star else empty star}
  5. Copy & paste span i class 4 times and increase value by 1 each if statement
  6. Add new span beneath first span include if there is text show it {text ? text : '' or text && text}
  7. Add color parameter to function
  8. Add i style={{color: color}} or {{color}} to all i tags
  9. Below function add default color with Rating.defaultProps { color: '#ffd700'}
  10. Type impt to import PropTypes
  11. Under defaultProps type check props  -> Rating.propTypes = {value: PropTypes.number.isRequired, text: PropTypes.string.isRequired, color: PropTypes.string,}
  12. Go to HomeScreen set key for Col
*/

import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        <i style={{color}}
          className={
            value >= 1
              ? 'fas fa-star'
              : value >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 2
              ? 'fas fa-star'
              : value >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 3
              ? 'fas fa-star'
              : value >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 4
              ? 'fas fa-star'
              : value >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 5
              ? 'fas fa-star'
              : value >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>{text ? text : ''}</span>
    </div>
  )
}

// make default color for ratings
Rating.defaultProps = {
  color: '#ffd700'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating

