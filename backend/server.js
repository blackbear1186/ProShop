/*
  1. Set const express = require('express')
  2. Set app = express();
  3. Set app.listen(5000, console.log('Server running...))
  4. In package.json, inside scripts change test to start and value to 'node backend/server to run server with 'npm start'
  5. Set app.get('/', (req, res) => { res.send('API is running...)})
  5. Set app.get('/api/products', (req, res) => { res.json(products)})
  6. Inside /data/products.js Change 'export default' to 'module.exports = '
  7. Set products = require('./data/products')
  8. Set app.get('/api/products/:id', (req, res) => { const product = products.find(p => p._id === req.params.id)}) res.json(products)-> Restart server
*/

const express = require('express')

const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('Api running......')
})
// create json api from products.js and get on site
app.get('/api/products', (req, res) => {
  res.json(products)
})
// create route to get single product by id
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
app.listen(5000, console.log('Server is running on port 5000'))