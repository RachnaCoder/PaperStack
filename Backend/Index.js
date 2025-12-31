import connectDB from "./Config/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./.env"  
})



// Add this debug line
console.log("MongoDB URI:", process.env.MONGODB_URI);

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


