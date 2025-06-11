import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Search from "./components/search"
import Home from "./components/home";
import Login from "./components/login"
import Chat from './components/chat';
import RegistrationForm from './components/register';
import PrivacyToggle from './components/privacy';
import Profile from './components/profile';
function App(){
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/" element = {<Login/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/privacy" element={<PrivacyToggle/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    )
}
export default App; 