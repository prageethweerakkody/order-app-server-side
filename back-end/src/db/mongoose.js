const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/order-app-database", {
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(() => {
     console.log('Connected to database')
}).catch(console => {
    console.error(error);
})