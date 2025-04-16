/**
 * File Name: page.tsx
 * Description: Page component for the app.
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: 
 * Language: TypeScript
 */

"use client";
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';

import './App.css';
import "./stylesheet/style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Home />
    </>
        // <section className='App'>
        //   <NavBar />
          // <Home />
          // {/* <Projects /> */}
          // <Footer />
        // </section>
  );
}

export default App;