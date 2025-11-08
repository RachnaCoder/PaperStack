import axios from "axios";
import { useState} from "react";

 export default function Paperupload({onClose}){
const [Subject, setSubject] = useState([]);
const [Course, setCourse] = useState([]);
const [Year, setYear] = useState('');
const [FileUrl, setFileUrl] = useState(["null"]);

const [error, setError] = useState('');
const [SubjectError, setSubjectError] = useState("");
const [CourseError, setCourseError] =useState("");
const[isLoading, setisLoading] = useState(false);

const handleSubmit = async (e)=>{
    e.preventDefault();
setisLoading(true);
    // formdata ek javascript object hai jo  text + files dono ko ek specific format me backend me bhejta hai kyuki ise ham json me (images, pdfs, files nahi bhejh sakte ) 

const formData = new FormData();

for(let i=0; i<FileUrl.length; i++){
formData.append("FileUrl", FileUrl[i]);}

formData.append("Subject", Subject);
formData.append("Course", Course);
formData.append("Year", Year);
formData.append("FileUrl", FileUrl );

// backend ke pas request bhejhna 

const res = await axios.post("http://localhost:8000/api/v1/users/papers", formData, 
    {
      headers : {
      "Content-Type": "multipart/form-data"
      },
      withCredentials : true
     
    }  );
 
const data =  await res.data;
console.log(data);

setisLoading(false);
if(data){
onClose();
}
}

return(
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm mx-8 px-5 ">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">UPLOAD PAPER</h2>
            <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold">Subject Name *</label>
        <input 
        type = "text"
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        placeholder = "Subject Name"
        value = {Subject}
        onChange ={(e)=> {
          const value = e.target.value;
          if(/^[A-Za-z\s]*$/.test(value)){
            setSubject(value);
            setSubjectError(null);
          }
          else{
            setSubjectError("Only letters and spaces are allowed.")
          }
        }}
        required />

        {SubjectError && (
         <span className="text-red-400">{SubjectError}</span>
           )}
      </div>

        <br/>
        <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">Course Name *</label>
        <input 
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        type ="text"
        placeholder ="Course Name"
        value = {Course}
        onChange = {(e)=> {
          const value =e.target.value;
          if(/^[A-Za-z\s]*$/.test(value)){
           setCourse(value);
           setCourseError(null);
          }
          else{
            setCourseError("Only letters and spaces are allowed.")
          }
        }}
        required />

        {CourseError && ( 
          <span className="text-red-400">{CourseError}</span>
        )}

        </div>
        <br/>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold"> Year *</label>
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
        name="FileUrl"
        multiple
        accept = "application/pdf, image/*"
        id ="file-upload"
        onChange ={(e)=> setFileUrl(e.target.files)}
        required />

        <label
  htmlFor="file-upload"
  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
>Upload File</label>

        </div>

         <br/>
               {isLoading && (<div className="text-blue-500 font-bold">File Uploading... Please wait.</div>)}
               <br/>

        <button className="h-10 w-15 border rounded bg-blue-500 text-white " type ="submit"> Submit </button>
        
        <button className="bg-blue-500 h-10 w-15 rounded float-right text-white " type="button" onClick ={(onClose) } > 
       Close </button>
       </form>
    </div>


    )}



