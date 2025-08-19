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
    if(!localfilepath) return null //upload the file on cloudinary
const response = await cloudinary.uploader.upload(localfilepath, {
    resource_type :"auto"
})
//file is uploaded successfully
    console.log("file is uploaded on cloudinary", response.url);
    return response;
}
catch(error){
fs.unlinkSync(localfilepath) //remove the localy saved temporary file as the file operation got failed
return null
}
    }
     
    export {uploadOnCloudinary}
    
    
