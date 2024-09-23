import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import the Header component
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Userdata from './components/pages/Userdata';
import Userproject from './components/Userproject';


function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userdata" element={<Userdata />} />
          <Route path="/userproject" element={<Userproject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
