import mongoose from "mongoose";
import plm from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    Fullname : {
     type: String,
     required: true,
    },

    email:{
     type: String,
     required: true,
     unique: true,
     lowercase:true
    },

    uploadedPapers: [{
        type : mongoose.Schema.Types.ObjectId,
         ref:'Paper',
    }],

}, {timestamps:true}
)
userSchema.plugin(plm, {usernameField: 'email'});


export  const User = mongoose.model("User", userSchema)

