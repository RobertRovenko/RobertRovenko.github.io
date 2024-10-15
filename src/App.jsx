// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingPage from './components/LandingPage';
import SignUpLoginPage from './components/SignUpLoginPage';
import CreatorProfilePage from './components/CreatorProfilePage';
import ContentPage from './components/ContentPage';
import SearchDiscoverPage from './components/SearchDiscoverPage';
import HelpSupportPage from './components/HelpSupportPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import './index.css'; // Importing your CSS file here

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignUpLoginPage />} />
          <Route path="/creator/:id" element={<CreatorProfilePage />} />
          <Route path="/content/:id" element={<ContentPage />} />
          <Route path="/search" element={<SearchDiscoverPage />} />
          <Route path="/help" element={<HelpSupportPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
