const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const {errorHandler} = require("./middleware/errorModdleware.js");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db.js")

connectDB();


// initialize express
const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded())
app.use("/api/products", require("./routes/productRoute.js"));
app.use(errorHandler);


// start server
app.listen(port, () => console.log(`Server running on port: ${port}`));
