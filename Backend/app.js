import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import passport from "./Config/Passport.config.js";

import expressSession from "express-session";

 


const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true  
}));

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static("public"))

app.use(cookieparser())

app.use(
  expressSession({
    resave:false,
    saveUninitialized: false,
    secret: 123476,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

// import routes
import userRouter from "./Routes/User.routes.js"


// routes declaration

app.use("/api/v1/users", userRouter)   ///standard practice


///   http://localhost:8000/api/v1/users/register



export default app;

