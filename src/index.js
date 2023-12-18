const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
// const userRoutes = require("../src/routes/sensor");
const userRoutes = require("./routes/alerta");
const { randomBytes } = require('crypto');

const app = express();
const port = process.env.PORT || 4001;


// middlewares
app.use(express.json());
app.use("/api", userRoutes);


// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});



// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, ()=>{
    console.log("Listening on port: 4001");
})