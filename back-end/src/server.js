// server.js
const express = require('express');
const product = require('./routes/product');
require('./db/mongoose');

const app = express();

app.use(express.json());

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS, PATCH');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-Width');
    next();
})



app.use(product);
//var bodyParser = require('body-parser');
//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//equire('dotenv').config();
//const connectDB = require('./config/dbConnect');

// db
//const db  = process.env.DATABASE_URI;
//connectDB(db);



const port = 3000

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})




// Routes



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  