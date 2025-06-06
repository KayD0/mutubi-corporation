import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import VisionPage from './pages/VisionPage';
import BusinessPage from './pages/BusinessPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
