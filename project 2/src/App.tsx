import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfileSetup from './components/ProfileSetup';
import MatchResults from './components/MatchResults';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/matches" element={<MatchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;