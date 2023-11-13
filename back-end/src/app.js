const express = require('express')
const app = express()
const port = 3001

const mysql = require('mysql2')
const db = require('./database/models');

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})