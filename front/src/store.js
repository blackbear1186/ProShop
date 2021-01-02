/*
  1. Import redux
  2. Import thunk
  3. Import composeWithDevTools
  4. Set const store equal to createStore pass in reducer, and initialState
  5. Set const reducer equal to combineReducers empty object
  6. Set middleware equal to thunk
  7. Set initialState equal to empty object
  8. export store

*/

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
