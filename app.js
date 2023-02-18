const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const productsRouter = require('./routes/product')
const cors = require('cors')

app.use(cors());
app.options('*',cors())

require("dotenv/config");
const api = process.env.API_URL;

//middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use(`${api}/products`,productsRouter)


  mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("server is running....");
});
