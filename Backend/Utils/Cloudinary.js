import {v2 as cloudinary} from "cloudinary"
import fs, { existsSync } from "fs"

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
});
//file is uploaded successfully
    console.log("file is uploaded on cloudinary", response.url);

    if(fs.existsSync(localfilepath)){
fs.unlinkSync(localfilepath) //remove the localy saved temporary file as the file operation got  successful
}
 return response;
}

//     if (!response || !response.url) {
//   console.error("Cloudinary upload failed for:", file.path);
// }
catch (error) {
    console.error("Cloudinary upload error:", error); // No unlinkSync here unless you want to "clean up" failed files too.
    return null;
  }

    };
    export {uploadOnCloudinary}
    
    
