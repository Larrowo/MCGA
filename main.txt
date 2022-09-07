const express = require("express");
const products = require("./data/products.json");
const employees = require("./data/employees.json");
const companies = require("./data/companies.json");
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get("/", (req, res) => {
  res.send(wantedData);
});

app.get("/login", (req, res) => {
  res.send("login");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/companies", (req, res) => {
  res.json(companies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

let wantedData = products.filter(function (i) {
  return i.id === 10;
});
