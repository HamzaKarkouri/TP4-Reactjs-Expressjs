const express = require('express')
const app = express();
const productrouter=require("./routes/products.routes")
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require("dotenv");

dotenv.config()

//URL Mongodb: mongodb+srv://zoubair:jkCfDXOsFQGSBhLT@cluster0.4yqvred.mongodb.net/db_catalogue?retryWrites=true&w=majority
const URL = "mongodb://127.0.0.1:27017/db_catalogue";
mongoose.connect(process.env.DB_URL) //process.env.DB_URL
.then(result=>app.listen(process.env.SERVER_PORT,()=>console.log("server running"))) //process.env.SERVER_PORT
.catch(err=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/products",productrouter); 
