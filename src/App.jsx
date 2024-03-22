import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Pages.jsx/Home.jsx/Nav.jsx';
import Secondnav from './Components/Pages.jsx/Home.jsx/Secondnav.jsx';
import Content from './Components/Pages.jsx/Home.jsx/Content.jsx';
import Awareness from './Components/Pages.jsx/Home.jsx/Awareness.jsx';
import Paragraph from './Components/Pages.jsx/Home.jsx/Paragraph.jsx';
import Card from './Components/Pages.jsx/Home.jsx/Card.jsx';
import Future from './Components/Pages.jsx/Home.jsx/Future.jsx';
import Aboutus from './Components/Aboutus.jsx';
import Dashboard from './Components/Dashboard.jsx';
import ContactUs from './Components/ContactUs.jsx';

import './index.css';
import Contact from './Components/Pages.jsx/Home.jsx/Contact.jsx';
import Footer from './Components/Pages.jsx/Home.jsx/Footer.jsx';



const App = () => {
  return (
    <Router>
      <Nav />
      <Secondnav />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />
     
      </Routes>
    <Contact />
    <Footer />
    </Router>
  );
};

const Home = () => {
  return (
    <>
    <Content />
      <Paragraph />
      <Awareness />
      <Card />
      <Future />

      
  

   

    </>
  );
};



export default App;

