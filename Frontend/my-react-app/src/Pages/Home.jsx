import react, { useEffect } from "react";
import {useState} from "react";
import Navbar from "../Components/Navbar.jsx";
import { useNavigate } from 'react-router-dom';
//import Sidebar from "../Components/Sidebar.jsx";
import Paperupload from "../Components/Paperupload.jsx";

//  import Papercard from "../Components/Papercard.jsx";


export default function Home(){

    const [Showform, setShowform] = useState(false);
//     const [Courses, setCourses] = useState([])

//     useEffect(() => { //jab component load ho jaye tab course data fetch karo
//     fetch("http://localhost:5000/api/courses")
//       .then(res => res.json())
//       .then(data => {
//         setCourses(data); // backend se array ka data set karo
//       });
//   }, []);

return(

<>
<Navbar setShowform={setShowform}/>
{Showform && (<Paperupload  onClose={()=> setShowform(false)}/>)}
  

</>
)
}






