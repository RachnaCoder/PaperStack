import passport from "passport";
import localstrategy from "passport-local";
import {User} from "../Models/Users.model.js";

//import { ApiError } from "../Utils/ApiError.js";
//import { ApiResponse } from "../Utils/ApiResponse.js";

passport.use(new localstrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  async (username, password, done) => {
    try {

      const user = await User.findOne({ username });

      
      if (!user)
         return done(null, false, { message: 'User not found' });
      const isMatch = await user.comparePassword(password);
      if (!isMatch)
         return done(null, false, { message: 'Incorrect password' });
        
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

export default passport;








