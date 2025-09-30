import React from "react";
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import About from './pages/About'
import Digital from './pages/Digital'
import Drawing from './pages/Drawing'
import Painting from './pages/Painting'
import Sculpture from './pages/Sculpture'
import Sketchbook from './pages/Sketchbook'
import SeriesDetails from "./components/SeriesDetails/SeriesDetails";

function Layout() {
  const location = useLocation();
  const pageClass = location.pathname === "/" ? "home" : location.pathname.replace("/", "");

  return(
    <div className={`page-layout ${pageClass}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Sculpture />} />
          <Route path="/sculpture" element={<Sculpture />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/sketchbook" element={<Sketchbook />} />
          <Route path="/about" element={<About />} />

          <Route path="/:category/series/:seriesId" element={<SeriesDetails />} />
        </Routes>
      </main>
    </div>
  )
}


function App() {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App;
