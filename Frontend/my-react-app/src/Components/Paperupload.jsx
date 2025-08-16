import react from "react" ;
import { useState, useEffect } from "react";

 export default function Paperupload({onClose}){
const [SubjectName, setSubjectName] = useState([]);
const [CourseName, setCourseName] = useState([]);
const [Year, setYear] = useState('');
const [PaperFile, setPaperFile] = useState(["null"]);

const [error, setError] = useState('');


const handleSubmit = async (e)=>{
    e.preventDefault();

    // formdata ek javascript object hai jo  text + files dono ko ek specific format me backend me bhejta hai kyuki ise ham json me (images, pdfs, files nahi bhejh sakte ) 

const formData = new FormData();
formData.append("SubjectName", SubjectName);
formData.append("CourseName", CourseName);
formData.append("Year", Year);
formData.append("PaperFile", PaperFile );

// backend ke pas request bhejhna 
const res = await fetch("http://localhost:5000/api/papers", {
    method : "POST",
    body : formData
})


const data =  await res.json();
console.log(data);

}

return(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">UPLOAD PAPER</h2>
            <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold">Subject Name</label>
        <input 
        type = "text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        placeholder = "Subject Name"
        value = {SubjectName}
        onChange ={(e)=> setSubjectName(e.target.value)}
        required />
      </div>

        <br/>
        <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">Course Name</label>
        <input 
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        type ="text"
        placeholder ="Course Name"
        value = {CourseName}
        onChange = {(e)=> setCourseName(e.target.value)}
        required />
        </div>
        <br/>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold"> Year</label>
        <div>
  <input
    type="text"
    placeholder="Year"
    value={Year}
    onChange={(e) => {
      const value = e.target.value;
      if (/^\d{0,4}$/.test(value)) {
        setYear(value);
        setError('');
      } else {
        setError('Please enter a valid year (numbers only)');
      }
    }}
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
    required
  />
  {error && <p className="text-red-500 text-xs">{error}</p>}
</div>

        </div>
       <br/>

<div className="mb-4">
        <input className="hidden"
        type ="file"
        id ="file-upload"
        onChange ={(e)=> setPaperFile(e.target.files[0])}
        required />

        <label
  htmlFor="file-upload"
  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
>Upload File</label>

        </div>

         <br/>
        <button className="h-10 w-15 border rounded bg-blue-500 text-white " type ="submit"> Submit </button>
        
        <button className="bg-blue-500 h-10 w-15 rounded float-right text-white " type="button" onClick ={(onClose) } > 
       Close </button>
       </form>
    </div>


    )}



