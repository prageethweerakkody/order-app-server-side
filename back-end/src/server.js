// server.js
const express = require('express');
const app = express();

const product = require('./routes/product');

require('dotenv').config();
const connectDB = require('./config/dbConnect');

// db
const db  = process.env.DATABASE_URI;
connectDB(db);

const port = 3000

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

app.use(express.json());


// Routes

app.use(product);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  