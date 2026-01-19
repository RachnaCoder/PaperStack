import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import logo2 from "../assets/logo2.png";
import { API_BASE } from "../api";

export default function Register() {
  const [form, setForm] = useState({ Fullname: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if(!form.Fullname || !form.email || !form.password){
    setError("Please fill in all fields");
    return;
  }

  if(form.password.length < 6){
    setError("Password must be atleast of 6 characters");
    return;
  }

  try {
    const response = await axios.post(
      `${API_BASE}/api/v1/users/register`, 
      form,
      { withCredentials: true } 
    );
    
    console.log("Registration success:", response.data);
    navigate("/");
    
  } catch (err) {
    const errormessage = err.response?.data?.message || "Registration failed ! Please try again.";
    setError(errormessage);
    console.error("Registration error:", err.response?.data);


  }
};


  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <img src={logo2} alt="Logo" className="h-15 w-15 block mx-auto" />
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create Account</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-semibold">Full Name *</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              placeholder="Name"
              required
              name="Fullname"
              value={form.Fullname}
              onChange={handleChange}
            />
          </div>
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

          {error && (
           <div style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontSize: '14px',
            textAlign: 'center'
             }}>
            {error}
            </div>
             )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >Register
          </button>
          <p className="text-center mt-4 text-gray-500">
            Already have an account?
            <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}




