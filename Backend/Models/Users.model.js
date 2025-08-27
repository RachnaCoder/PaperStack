import mongoose from "mongoose";
import plm from "passport-local-mongoose";

const userSchema = new mongoose.Schema({

    username : {
     type: String,
     required: true,
     unique: true
    },

    email:{
     type: String,
     required: true,
     unique: true,
     lowercase:true
    },


    password:{
        type:String,
        required:[true, "password is required"]
    },

    uploadedPapers: [{
        type : mongoose.Schema.Types.ObjectId,
         ref:'Paper',
    }],

}, {timestamps:true}

)

userSchema.plugin(plm);

export  const User = mongoose.model("User", userSchema)