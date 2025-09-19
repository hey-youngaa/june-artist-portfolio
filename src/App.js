import React from "react";
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from './pages/About'
import Digital from './pages/Digital'
import Drawing from './pages/Drawing'
import Painting from './pages/Painting'
import Sculpture from './pages/Sculpture'
import Sketchbook from './pages/Sketchbook'


function App() {
  return (
    <Router>
      <div className="page-layout">
        <Navbar />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/drawing" element={<Drawing />} />
            <Route path="painting" element={<Painting />} />
            <Route path="/sculpture" element={<Sculpture />} />
            <Route path="/sketchbook" element={<Sketchbook />} />
          </Routes>   
        </main>     
      </div>
    </Router>
  );
}

export default App;
