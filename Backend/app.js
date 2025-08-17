import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true  
}))

app.use(express.json({
    limit:"20kb"
}))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static("public"))
app.use(cookieparser())



// import routes
import userRouter from "./Routes/User.routes.js"


// routes declaration

app.use("/api/v1/users", userRouter)   ///standard practice


///   http://localhost:8000/api/v1/users/register


export default app;