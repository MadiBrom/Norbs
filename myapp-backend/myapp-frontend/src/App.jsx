import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MathPage from './Components/MathPage'; 
import EnglishPage from './Components/EnglishPage'; 
import AboutPage from './Components/AboutPage';
import Games from './Components/Games';
import Flashcards from './Components/Flashcards';
import Videos from './Components/Videos';
import Navbar from './Components/NavbarE';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/math" element={<MathPage />} />
        <Route path="/english" element={<EnglishPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/games/:topicId" element={<Games />} />
        <Route path="/flashcards/:topicId" element={<Flashcards />} />
        <Route path="/videos/:topicId" element={<Videos />} />
      </Routes>
    </Router>
  );
};

export default App;
