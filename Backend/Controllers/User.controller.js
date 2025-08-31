import { asyncHandler } from "../Utils/AsyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import {User} from "../Models/Users.model.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import passport from "../Config/Passport.config.js";
import bcrypt from "bcrypt";
  



//////STEPS FOR REGISTERING THE USER TO KEEP IN MIND ////////

// get user details from the frontend
// validation - not empty
//  check if user exists or not {username, password}
//  check for images , avatar
//  upload them to cloudinary -avatar
//  create user object- entry in database
// remove password and refresh token field from response
// check for user creation
// return response
///////// REGISTERING THE USER//////////////////


const registerUser = asyncHandler(async (req,res)=>{
    
const {Fullname, email, password} = req.body  
console.log(req.body);
 // get user details from the frontend
if ([Fullname, email, password].some((field) => 
field?.trim() === "")     //some is a method like map
)
{
throw new ApiError(400, "all fields are required");
}
//for checking that all fields are filled by  the user or for validation

// checking if user already exists or not

 const existedUser = await User.findOne({
    $or:[
         { email:  email}]
});

if(existedUser){
    throw new ApiError(409, "user with username or email is already exists")
}
const SaltRounds = 5;

const hashedPassword = await bcrypt.hash(password, SaltRounds);

const user = await User.create({  // create a user in database 
    email : email,
    password : hashedPassword,
    Fullname : Fullname.toLowerCase()
})
await user.save();

 const createdUser = await User.findById(user._id).select(
    " -password ") //checking by _id that user is created or not

if(!createdUser){
    throw new ApiError(500, "something went wrong while registering the user")
}
// if not created then throw the error

return  res.status(201).json(
new ApiResponse(200, createdUser, "user registerd successfully")
)
})


///////////LOGIN USER CONTROLLER//////////////////
// get user details from the frontend -- req.body
// check that all fields are filled -  otherwise validation error
// find the user in db
//  check password with  stored password in database
// if matched then send the user to  home page
// if not matched then  send it to register page


// const loginUser = asyncHandler(async(req, res, next) =>{
// const {username, password, email} = req.body;
// console.log(req.body);

// if(!username){
//    return  next (new ApiError(400, "username or email is required"));
// }
 
//  passport.authenticate('local', (err, user) => {
//     if (err) 
//         return next(new ApiError(400, "something went wrong"));

//     if (!user) {
//       return next(new ApiError(404, "invalid credentials"));
//     }
//     req.logIn(user, (err) => {
//       if (err) 
//        return next( new ApiError(500, "login failed"));
//       return res.json({ success: true, message: "Login successful", user: { id: user._id, username: user.username } });
//     });
//   })(req, res, next);


// });

 const loginUser = (req, res, next) => {

const {password, email} = req.body;

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err); // Error during authentication process
    }
    if (!user) {
      // Authentication failed (wrong email or password)
      return res.status(401).json({ message: info.message || 'Login failed' });
    }
    // Log the user in (establish session)
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      // Successful login: return user info or success message
      return res.json({ message: 'Login successful', user: { id: user._id, email: user.email } });
    });
  })(req, res, next);
};








export {
    registerUser,
    loginUser
}