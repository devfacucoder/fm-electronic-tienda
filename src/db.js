import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();



mongoose.connect(process.env.URL_DB)
.then(()=>{
    console.log("database successfully connected")
})


export {mongoose}