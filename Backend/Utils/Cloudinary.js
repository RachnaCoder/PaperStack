import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET
    });
    
    const uploadOnCloudinary = async(localfilepath) => {
try{ 
    if(!localfilepath) return null
const response = await cloudinary.uploader.upload(localfilepath, {
    resource_type :"auto"
})
    console.log("file is uploaded on cloudinary", response.url);
    return response;
}
catch(error){
fs.unlinkSync()
return null
}
    }
     
    export {uploadOnCloudinary}
    
    
