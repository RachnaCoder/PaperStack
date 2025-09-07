import mongoose from "mongoose"

const paperSchema = new mongoose.Schema(
{ 
  Course:{
type: String,
required: true,
},

Subject:{
type: String,
required: true,
},

Year:{
type:Number,
required: true
},

UploadedBy:{
type: mongoose.Schema.Types.ObjectId,
ref: 'User'
},

FileUrl: [{ 
    type: String, 
    required: true 
  }],
})

 export const Paper = mongoose.model("Paper", paperSchema)