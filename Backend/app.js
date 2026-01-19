import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import passport from "./Config/Passport.config.js";
import expressSession from "express-session";
import {User} from "./Models/Users.model.js";

const app = express();

// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
//   credentials: true  
// }));


app.use(cors({
  origin: function (origin, callback) {
    console.log('Request Origin:', origin);  // Debug logs
    if (!origin || origin === process.env.CORS_ORIGIN) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
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
    secret: process.env.SESSION_SECRET,

    cookie: {
    sameSite: 'lax', // 'None' if using HTTPS and cross-domain
    secure: false,   // true if using HTTPS
  }
  }));

  app.use(passport.initialize());
  app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// import routes
import userRouter from "./Routes/User.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter)   ///standard practice

export default app;

