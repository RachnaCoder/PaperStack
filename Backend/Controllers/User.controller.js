import { asyncHandler } from "../Utils/AsyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import {User} from "../Models/Users.model.js";
import { uploadOnCloudinary } from "../Utils/Cloudinary.js";
import { ApiResponse } from "../Utils/ApiResponse.js";

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



const registerUser = asyncHandler(async (req,res)=>{
    
const {username, email, password} = req.body  
console.log("email :", email);
console.log("username :", username); // get user details from the frontend
 
if ([username, email, password].some((field) => 
field?.trim() === "")     //some is a method like map
)
{
throw new ApiError(400, "all fields are required");
}
//for checking that all fields are filled by  the user or for validation
})


// checking if user already exists or not

 const existedUser = User.findOne({
    $or:[{username}, {email}]
})

if(existedUser){
    throw new ApiError(409, "user with username or email is already exists")
}

const user = await User.create({  // create a user in database 
    username,
    email,
    password,
    username : username.toLowerCase()
})

 const createdUser = await User.findById(user._id).select(
    " -password ") //checking by _id that user is created or not

if(!createdUser){
    throw new ApiError(500, "something went wrong while registering the user")
}
// if not created then throw the error

return res.status(201).json(
new ApiResponse(200, createdUser, "user registerd successfully")
)





export {registerUser}