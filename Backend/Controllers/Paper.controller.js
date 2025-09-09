// import { asyncHandler } from "../Utils/AsyncHandler.js";
// import { ApiError } from "../Utils/ApiError.js";
// import { ApiResponse } from "../Utils/ApiResponse.js";
import {Paper} from "../Models/Paper.model.js";
import {uploadOnCloudinary} from "../Utils/Cloudinary.js";

const Uploadpapers = async(req, res,next) => {
try{
    const {Subject, Course, Year} = req.body;

    // validate that files exist and atleast one file is uploaded

    if(!req.files || req.files.length === 0){
        return res.status(400).json({ message : "file upload is required"});
    }

const uploadedUrls = [];
//upload each file to cloudinnarry and collect fileurls

console.log(req.files);
 for(let file of req.files ){
    try{
    console.log("Uploading file:", file.path);
const result = await uploadOnCloudinary(file.path);

if(result && result.url){
console.log("cloudinary file url :", result.url);

uploadedUrls.push(result.url);

}
else {
  console.log("Cloudinary upload failed for:", file.path);
}
    }
 catch(err){
console.error("error in uploading files :", file.path, err); }
 }
const paper =  new Paper({
Course,
Subject,
Year,
FileUrl: uploadedUrls,
UploadedBy : req.user._id

});
await paper.save();
res.status(201).json({message : "paper is uploaded successfully", urls : uploadedUrls});
}
catch(error){

    next(error);
}







// try{
// const {Subject, Course, Year} = req.body;

// const paperLocalPath = await req.files?.FileUrl[0]?.path;

// if(!paperLocalPath){
//     res.status(400).json({message : "Paper is required"});
// }

// const paperpath = await uploadOnCloudinary(paperLocalPath)

// if(!paperpath){
//     res.status(400).json({message : "Paper is required"})
// }
// // const file  = req.file ? req.file.filename : null;
// const paper =  new Paper({
// Course,
// Subject,
// Year,
// FileUrl: paperpath,
// UploadedBy : req.user._id

// });

// await paper.save();

// res.status(201).json({message :" paper uploaded successfully"});
// }
// catch(error){
//     console.log("error :", error);
//     next(error)
// }
 };

export default Uploadpapers