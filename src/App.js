import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from '../src/components/Navbar/Navbar';
import './App.css';
import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { Service } from './components/Service/Service';
import  AboutUs  from './components/AboutUs/AboutUs';
import Feedback from './components/FeedBack/Feedback'
import BookNow from './components/BookNow/BookNow';
import PaymentPage from './components/PaymentPage/PaymentPage';

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>
        <Route path="/BookNow" element={<BookNow/>}/>
        <Route path="/PaymentPage" element={<PaymentPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App