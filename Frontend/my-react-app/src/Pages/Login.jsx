import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo2 from "../assets/logo2.png";

export default function Login(){

    const [form, setForm] = useState("")

    const [error, setError] = useState("")

const navigate = useNavigate();

const handleChange=(e)=> setForm({...form, [e.target.name]:e.target.value})

 const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
        await axios.post("http://localhost:8000/api/v1/users/login", form ,  { withCredentials: true });
        navigate("/")

    }
catch(err){
setError("Login failed");
}
 };
 return(
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm  mx-4 px-4 ">

                  <img src={logo2} alt="Logo" className="h-15 w-15 block mx-auto" />
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login here</h2>
        <form  onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">Email Address *</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700 font-semibold">Password *</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder=""
              required
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Login
          </button>
          
        </form>
      </div>
    </div>

 )

}