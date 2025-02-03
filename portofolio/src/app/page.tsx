/**
 * File Name: page.tsx
 * Description: Page component for the app.
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2022
 * License: 
 * Language: TypeScript
 */

"use client";
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import './App.css';
import "./stylesheet/style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    // <Router>
        <div className='App'>
          <NavBar />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> */}
          <Home />
          <Footer />
        </div>
      // </Router>
  );
}

export default App;