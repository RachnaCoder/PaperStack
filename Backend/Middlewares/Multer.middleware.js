import multer from "multer";
import path from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
destination:function (req, file,cb) {
   cb(null, path.join(__dirname,"../public/Uploads"));
},

// filename: function(req, file, cb ){
//     cb(null, file.originalname)
// }

filename: function(req, file, cb) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  cb(null, uniqueSuffix + '-' + file.originalname);
}
});

const fileFilter = (req, file, cb) => {

  if (
    file.mimetype === 'application/pdf' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF or image files (JPG/PNG) are allowed!'), false);
  }
};

 export const upload = multer({ storage, fileFilter });


