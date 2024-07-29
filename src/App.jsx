// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import New from './pages/New';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Login";

const App = () => {
    return (
        
        <Router>
            <div className="heading">
            <h1 style ={{color:"blue"}}>PM - SURYA GHAR: MUFT BIJLI YOJANA</h1>
            <h3 style ={{color:"blue"}}>National Portal</h3>
            </div>
            <Navbar />
            <section className="headings">
            <div className="h1">
            <h4>Latest Update:Subsidy related information. <a href="/" className="link">Click Here</a></h4>
            </div>
            <div className="h2">
            <h4>Vendors shall update the "Address" in their Profile section of PM Surya Ghar Portal. Refer Section 4 of the Installer Manual.<a href="/" className="link">Click Here</a></h4>
            </div>
            <div className="h3">
            <h4>National Vendor Registration can be done from PM Surya Ghar Portal. <a href="/" className="link">Click Here</a> </h4>
            </div>
           </section>
           <div className="smallerdiv" >
             <div className="left-container">
                <h2>Quick Links</h2>
                <div className="heading-container">
                <h3 className="blue-background"> <i class='fas fa-user-plus'></i> Apply For Rooftop Solar</h3>
                <h3 className="blue-background">Subsidy Structure</h3>
                <h3 className="blue-background">Registered Vendors</h3>
                </div>
            </div>

           </div>
            <Routes>
                <Route path="/" element={<New/>} />
                <Route path="/apply" element={<Financing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
        
    );
};

export default App;


