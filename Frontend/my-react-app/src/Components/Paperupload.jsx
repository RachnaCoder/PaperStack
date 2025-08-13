import react from react ;
import { useState, useEffect } from "react";

 export default function Paperupload(){
const [SubjectName, setSubjectName] = useState([]);
const [CourseName, setCourseName] = useState([]);
const [Year, setYear] = useState([]);
const [PaperFile, setPaperFile] = useState(["null"]);


const handleSubmit = async (e)=>{
    e.preventDefault();

    // formdata ek javascript object hai jo  text + files dono ko ek specific format me backend me bhejta hai kyuki ise ham json me (images, pdfs, files nahi bhejh sakte ) 

const formData = new FormData();
formData.append("subjectName", subjectName);
formData.append("CourseName", CourseName);
formData.append("Year", Year);
formData.append("PaperFile", PaperFile );

// backend ke pas request bhejhna 
const res = await fetch("http://localhost:5000/api/papers", {
    method : "POST"
    body : formData
});
//response ko json form me convert karna 

const data =  await res.json();
console.log("data");

}

return(
        <div  className ="min-h-screen flex items-center justify-center">
        <h1> Upload paper </h1>
        <form>
        <input type = "text"
        placeholder = "Subject Name"
        value = {subjectName}
        onChange ={(e)=> setSubjectName(e.target.value)}
        required />

        <br/>
        <input type ="text"
        placeholder ="Course Name"
        value = {CourseName}
        onChange = {(e)=> setCourseName(e.target.value)}
        required />
        <br/>

        <input type = "text"
        placeholder = "Year"
        value = {Year}
        onChange ={(e)=> setYear(e.target.value)}
        required />
       <br/>
        <input type = "file"
        placeholder = ""
        value = {PaperFile}
        onChange ={(e)=> setPaperFile(e.target.file[0])}
        required />

        <button type ="submit"> Submit </button>
        <button type="button" onClick ={() => setShowform(false)} > 
       Close </button>
       </form>
    </div>


    )}



