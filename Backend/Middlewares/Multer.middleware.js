import multer from "multer";

const storage = multer.diskStorage({
destination:function (req, file,cb) {
   cb(null,"./public/uploads") 
},

filename: function(req, file, cb ){
    cb(null, file.originalname)
}

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
}
})
const upload = multer({ storage, fileFilter });
module.exports = upload;
