import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import College from './College';
import Medical from './Medical';
import Engineering from './Engineering';
import Header from './Header';
function RoutingNexted() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* Nested Routing starts here */}
        <Route path="/college" element={<College />}>
          <Route path="engineering" element={<Engineering />} />
          <Route path="medical" element={<Medical />} />
         
        </Route>
      </Routes>
    </Router>

    </div>
  )
}

export default RoutingNexted
