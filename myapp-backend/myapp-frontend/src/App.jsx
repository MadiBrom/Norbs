import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MathPage from './Components/MathPage'; 
import EnglishPage from './Components/EnglishPage'; 
import WritingPage from './Components/WritingPage';
import AboutPage from './Components/AboutPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/reading" element={<EnglishPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
