import PDFDocument from "pdfkit";
import fs from "fs"
import { promises } from "dns";
import { rejects } from "assert";


 export function convertImageToPdf(files , outputPath){
    const doc = new PDFDocument({autoFirstPage : false});

    const stream = fs.createWriteStream(outputPath);

    doc.pipe(stream);

files.forEach(file => {
  doc.addPage();

  doc.image(file.path, {
      fit: [595, 842],  // A4 page dimensions in points (width x height)
      
    });
  
});


doc.end();

return new Promise((resolve, reject) =>  {
stream.on('finish', () => resolve(outputPath));
stream.on('error', reject);
});

  }