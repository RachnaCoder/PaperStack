import { connect } from "mongoose";
import connectDB from "./Config/db.js";

import dotenv from "dotenv";
dotenv.config({
  path: "./env"  
})
connectDB();
