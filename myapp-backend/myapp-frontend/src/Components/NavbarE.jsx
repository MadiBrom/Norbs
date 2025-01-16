import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Norb's Learning</h2>
        <ul className="navbar-links">
          <li>
            <Link to="/flashcards/phonics-letter-sounds">Phonics Letter Sounds</Link>
          </li>
          <li>
            <Link to="/flashcards/building-vocabulary">Building Vocabulary</Link>
          </li>
          <li>
            <Link to="/flashcards/grammar-sentence-structure">Grammar & Sentence Structure</Link>
          </li>
          <li>
            <Link to="/flashcards/reading-comprehension">Reading Comprehension</Link>
          </li>
          <li>
            <Link to="/flashcards/creative-academic-writing">Creative Academic Writing</Link>
          </li>
          <li>
            <Link to="/flashcards/advanced-writing-techniques">Advanced Writing Techniques</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
