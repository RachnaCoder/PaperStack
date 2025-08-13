import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Pages/Register.jsx';
 import Login from './Pages/Login.jsx'; 
 import Home from './Pages/Home.jsx';   

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Register />} /> 
         <Route path="/login" element={<Login />} /> 
         <Route path="/home" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
