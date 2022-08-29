const express = require('express')
const product = require('./data/products.json')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.send(wantedData)
})

app.get('/products', (req, res) => {
    res.json(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let  wantedData = product.filter(function(i) {
    return i.id === 10;
  });