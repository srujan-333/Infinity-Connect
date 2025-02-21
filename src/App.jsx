import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Search from "./components/search"
import Home from "./components/home";
import Login from "./components/login"
import RegistrationForm from './components/register';
function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element = {<Home/>}/>
        </Routes>
        <Routes>
        <Route path="/" element = {<Login/>}/>
        </Routes>
        <Routes>
          <Route path="/search" element={<Search/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App; 