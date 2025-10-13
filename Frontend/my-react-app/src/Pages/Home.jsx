import react, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { useNavigate } from 'react-router-dom';
//import Sidebar from "../Components/Sidebar.jsx";
import Paperupload from "../Components/Paperupload.jsx";
import axios from "axios";

 import Papercard from "../Components/Papercard.jsx";

export default function Home(){

    const [Showform, setShowform] = useState(false);

  const [Papers, setPapers] = useState([]);
  const[Loading, setisLoading] = useState(true);

useEffect(() =>{
  //fetching data from the backend API 
  const fetchPapers = async ()=>{
    try{
const res = await axios.get("http://localhost:8000/api/v1/users/Papers");
setPapers(res.data.Papers || []);
    }
  catch(err){
console.error("failed to load  papers", err);
    }
    finally{
      setisLoading(false);
    }
  };
  fetchPapers();
}, []);
if(Loading) return <p>Loading Papers...</p>;

console.log("fetched papers :", Papers);
return(
<>
 <div className="min-h-screen  bg-gradient-to-r from-blue-200 to-purple-200"> 

<Navbar setShowform={setShowform}/>
{Showform && (<Paperupload  onClose={()=> setShowform(false)}/>)}

{/* <div className="min-h-screen  bg-gradient-to-r from-blue-200 to-purple-200"> */}

<div className=" text-center top-50 bottom-0 left-0 right-0 mt-10 mb-12">
  <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center text-black-700">
    Welcome to PaperStack
  </h1>
  <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-center text-black-600">
    Your gateway to previous year papers and smarter exam prep.
  </p>
</div>

<div className="p-6 mt-20  flex justify-content-center flex-col sm:flex-row">
  {/* <h2 className="text-3xl font-bold color-black  mt-20 mb-6">Available Papers</h2> */}
<div className="ml-8 sm:ml-30 md:ml-40 flex-wrap gap-8 flex justify-center sm:justify-start">
  {Papers.length === 0 ? (
    <p className="">No available papers</p>
  ) : (Papers.map((Paper) =>(
    <Papercard key={Paper._id} Paper={Paper}/>
  ))

  )} 
</div>


</div>









</div>

</>
)
}






