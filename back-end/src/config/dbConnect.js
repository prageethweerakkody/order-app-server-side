// dbConnect.js
const mongoose = require('mongoose');

const dbConnect = async(db) => {
  try {
       await mongoose.connect(db, {
           useUnifiedTopology: true,
           useNewUrlparser: true
       });
       console.log("connected to db");
  } catch (error) {
      console.error(error);
  }
}

module.exports = dbConnect


