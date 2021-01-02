/*
  1. import bootstrap.min.css
  2. For redux: import Provider & store
  3. Replace React.StrictMode with Provider store={store}
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min .css'
import { Provider } from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
