// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './pages/Main';
import Login from "./pages/Login";
import Newinformation from './pages/NewInformation';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/apply" element={<Financing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/newInformation" element={<Newinformation />} />
            </Routes>
        </Router>

        
    );
};

export default App;


