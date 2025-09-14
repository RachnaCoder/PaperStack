import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/Register.jsx';
 import Login from './Pages/Login.jsx'; 
 import Home from './Pages/Home.jsx';   
import  Paperdetail  from "./Pages/Paperdetail.jsx";

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Register />} /> 
         <Route path="/login" element={<Login />} /> 
         <Route path="/home" element={<Home />} /> 
        <Route path="/Papers/:id" element={<Paperdetail />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
