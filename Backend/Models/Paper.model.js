import mongoose from mongoose

const paperSchema = new paperSchema(
{
course:{
type: String,
required: true,
},

subject:{
type: String,
required: true,
},

year:{
type:Number,
required: true
},

uploadedBy:{
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
},

fileUrl: { 
    type: String, 
    required: true 
  },

}
)

 export const Paper = mongoose.model("Paper", paperSchema)