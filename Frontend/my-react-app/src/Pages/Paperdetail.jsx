import axios from "axios"

import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

function Paperdetail() {
const { id } = useParams();

const[ paper, setpaper] = useState(null)

useEffect(()=> {
    async function fetchpapers (){
        const res = await axios.get(`http://localhost:8000/api/v1/users/Papers/${id}`);
        setpaper(res.data.paper);
         
    }
    fetchpapers();
 }, [id] );

return(

<div>
{paper ? (
<>
{/* <h1>{paper.Subject}</h1>
<p>{paper.Course}</p> */}

{/* Loop over files */}
{paper.FileUrl && paper.FileUrl.map((url, idx) => (
<div key={idx} className="flex justify-center items-center  bg-gray-700 min-h-screen ">

{url.endsWith(".pdf") ? ( <embed  src={url}  type="application/pdf" className="w-1500  h-1000 " />  
) : (<img src={url}  alt = {`file-${idx}`}  className="w-150 h-400 mt-0 gap-2px object-contain "/>)}


{/* <a href={url}  download className="btn">
    Download </a> */}
</div>

)

)}
</>
    )  
    
: (
    <div> Loading.... </div>
)}

</div>

)

}

export default Paperdetail
