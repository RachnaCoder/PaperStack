import mongoose from mongoose

const subjectSchema = new mongoose.Schema(
    {
   name: { 
    type: String,
     required: true 
    },
  
  course: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Course', 
    required: true 
},
  
  createdAt: { 
    type: Date,
     default: Date.now 
    }
})

export const Subject = mongoose.model("Subject", subjectSchema)