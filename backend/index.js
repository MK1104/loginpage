const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
dotenv.config();

const connectToMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
  
//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
  
app.listen(3000, () => {
  console.log("Server is running");
});