import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Preloader from './components/Preloader';
import Experience from './components/Experience';
import Inspiration from './components/Inspiration';
import Package from './components/Package';
import Guidline from './components/Guidline';
import Perfection from './components/Perfection';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ImageSliderModal from './components/ImageSliderModal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer for 5 seconds to hide the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* Redirect from "/" to "/Explore" */}
            <Route path="/" element={<Navigate to="/Explore" />} />
            <Route path="/Explore" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/perfection" element={<Perfection />} />
            <Route path="/package" element={<Package />} />
            <Route path="/guideline" element={<Guidline />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/imageslider" element={<ImageSliderModal />} />
          </Routes>
          <Subscribe />
        </>
      )}
    </Router>
  );
}

export default App;