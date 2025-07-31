import connectDB from "./Config/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env"  
})

connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000 ,()=>{
  console.log(`server is running on port  ${process.env.PORT}`);
})
})

.catch((err)=>{
console.log("Mongodb connection Failed", err);
}
)
