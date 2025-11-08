
import {Link} from "react-router-dom";

import { HiOutlineBookOpen,  HiOutlineCalendar, HiOutlineUser, HiOutlineDownload, HiOutlineShare } from 'react-icons/hi'; 


export default function Papercard({ Paper }) {
  // Destructure paper object properties
  const {Subject, Course, Year, UploadedBy, FileUrl } = Paper;


  // Handler for download button
  const handleDownload = () => {
    // Open file URL in new tab to allow download or viewing
    window.open(FileUrl[0], "_blank");
  };

  // Handler for share button (example: share paper URL)
  

  const handleShare = (Paper) => {

    if (navigator.share) {
      navigator.share({
        title: Paper.Subject,
        text: `Check out this paper ${Paper.Subject}`,
        url: Paper.FileUrl[0]
      });
    } else {
      alert("Share not supported");
    }};


    console.log("fetched papers are:", Paper);
  return (
    <Link  to ={`/Papers/${Paper._id}`}>
    <div className="border rounded-lg shadow-md p-4 flex flex-col justify-between bg-white w-54 h-54  sm:w-64 h-64  md:w-64 h-64 group hover:shadow-2xl   transition-all duration-300  backdrop-blur-sm   hover:-translate-y-1">
      
     <div classname="">
      <h1 className="font-bold color-black-600 text-2xl">{Subject}</h1>
     </div>
    
      <div className="text-sm mb-4">
        <p className="flex items-center gap-2 mb-3">
        <HiOutlineBookOpen className="w-4 h-4" /> {Course}
        </p>
        <p className="flex items-center gap-2 mb-3">
       <HiOutlineCalendar className="w-4 h-4" /> {Year}
     </p>
        <p className="flex items-center gap-2">
      <HiOutlineUser className="w-4 h-4" /> {UploadedBy.Fullname}
    </p>
      </div>


      <div className="flex justify-between">
        <button
        size="sm"
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700  text-white px-3 py-1 rounded text-sm "
        ><HiOutlineDownload classname="w-4 h-4 mr-1"/>
          Download
        </button>
        <button
        variant ="outline"
        size ="sm"
          onClick={()=> handleShare(Paper)}
          className=" border text-black px-3 py-1 rounded hover:bg-gray-300"
        >
          <HiOutlineShare ></HiOutlineShare>
        </button>
      </div>
    </div>
  
</Link>
    );


}
