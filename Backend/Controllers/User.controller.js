
import {User} from "../Models/Users.model.js";
import passport from "../Config/Passport.config.js";

  
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


// const registerUser = async (req, res, next) => {
//   try {
//     const { Fullname, email, password } = req.body;
//     const newUser = new User({ Fullname, email });

//     User.register(newUser, password, (err, user) => {
//       if (err) {
//         console.log("registration error", err);
//         return res.status(400).json({ message: err.message });
//       }
//       // User registered successfully
//       res.status(201).json({ message: "User registered", userId: user._id });
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const registerUser = async (req, res, next) => {
  try {
    const { Fullname, email, password } = req.body;
    
    // Create new user instance
    const newUser = new User({ Fullname, email });
    
    // Register user with passport-local-mongoose
    User.register(newUser, password, (err, user) => {
      if (err) {
        console.log("registration error", err);
        return res.status(400).json({ 
          success: false,
          message: err.message 
        });
      }
      
      // User registered successfully
      return res.status(201).json({ 
        success: true,
        message: "User registered successfully", 
        userId: user._id 
      });
    });
    
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


///////////LOGIN USER CONTROLLER//////////////////
// get user details from the frontend -- req.body
// check that all fields are filled -  otherwise validation error
// find the user in db
//  check password with  stored password in database
// if matched then send the user to  home page
// if not matched then  send it to register page


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