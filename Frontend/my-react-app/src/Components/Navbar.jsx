import react from "react";
import{useState} from "react";
import logo2 from "../assets/logo2.png";
import Paperupload from "./Paperupload.jsx";
import { useNavigate } from "react-router-dom";


  export default function Navbar({setShowform}){

const navigate = useNavigate();

const  handleClick = () => {
  navigate("/Login");           //  redirects to /login page

};
    
return(
    <nav className="w-full bg-gray-50 text-black shadow">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center">
          <img src={logo2} alt="Logo" className="h-15 w-15 mr-2" />
          <span className="text-xl font-semibold tracking-wide">COLLEGE PAPERS PORTAL</span>
        </div>
        <div>
          <button onClick={handleClick} className="mx-2 px-4 py-2 rounded border hover:bg-gray-300">Login</button>

          <button className="mx-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick ={() => setShowform(true)}>Upload</button>

          
        </div>
      </div>
    </nav>
)
}






