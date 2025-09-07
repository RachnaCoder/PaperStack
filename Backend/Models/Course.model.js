import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
 },

  
  createdAt: {
     type: Date,
      default: Date.now 
    }
})

export const Course = mongoose.model("Course", courseSchema)