import passport from "passport";
import localstrategy from "passport-local";
import {User} from "../Models/Users.model.js";
import bcrypt from "bcrypt";
//import { ApiError } from "../Utils/ApiError.js";
//import { ApiResponse } from "../Utils/ApiResponse.js";

passport.use(new localstrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {

      const user = await User.findOne({ email });

      
      if (!user)
         return done(null, false, { message: 'User not found' });
      const isMatch = await  bcrypt.compare(password, user.password);

      if (!isMatch)
         return done(null, false, { message: 'Incorrect password' });
        
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

export default passport;








