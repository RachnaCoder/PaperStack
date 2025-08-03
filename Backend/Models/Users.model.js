import mongoose from mongoose

const userSchema = new userSchema({

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
        type :mongoose.Schema.Types.ObjectId,
         ref:'Paper',
    }],

}, {timestamps:true}

)

export  const User = mongoose.model("User", userSchema)