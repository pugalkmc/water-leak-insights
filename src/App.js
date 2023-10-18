// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import Contact from './pages/Contact';
import Footer from '../src/components/Footer'
import BulkRegister from './BulkRegister';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <BulkRegister/>
        <Footer/>
    </Router>
  );
}

export default App;
