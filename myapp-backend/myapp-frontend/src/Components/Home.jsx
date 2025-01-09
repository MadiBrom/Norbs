import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Add your CSS in a separate file

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsModalOpen(false); // Close the modal after navigation
  };

  return (
    <div>
      <h1>Welcome to Norb's Learning</h1>
      <h3>Your Interactive Learning Adventure Starts Here!</h3>

      <p>
        Whether you're just starting with numbers and sounds or exploring advanced concepts, Norb's Learning offers a fun and engaging platform for learners of all ages.
      </p>

      <div>
        <h4>Math Journey</h4>
        <p>
          From the basics of counting in Kindergarten to mastering calculus, our math curriculum is designed to take you through each level at your own pace. Explore topics like:
        </p>
        <ul>
          <li>
            Counting & Number Recognition
            <div className="tooltip">
              Learn how to recognize and write numbers, count objects, and understand the concept of quantity.
            </div>
          </li>
          <li>
            Addition & Subtraction
            <div className="tooltip">
              Master basic addition and subtraction to build a strong foundation for all future math!
            </div>
          </li>
          <li>
            Multiplication & Division
            <div className="tooltip">
              Understand multiplication tables and division as you work with groups of objects and equal sharing.
            </div>
          </li>
          <li>
            Fractions, Decimals, and Percentages
            <div className="tooltip">
              Learn about parts of a whole, decimals, and percentages, and how to work with them in everyday situations.
            </div>
          </li>
          <li>
            Pre-Algebra & Algebra
            <div className="tooltip">
              Start solving equations and work with variables to understand abstract mathematical concepts.
            </div>
          </li>
          <li>
            Geometry & Trigonometry
            <div className="tooltip">
              Dive into shapes, angles, and measurements, and understand how geometry works in the world around us.
            </div>
          </li>
          <li>
            Advanced Calculus
            <div className="tooltip">
              Learn about rates of change, integrals, and the foundations of higher-level mathematics.
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h4>English Mastery</h4>
        <p>
          Whether you're just learning to sound out letters or crafting essays with complex structure, our English curriculum covers it all. Topics include:
        </p>
        <ul>
          <li>
            Phonics & Letter Sounds
            <div className="tooltip">
              Learn to recognize and pronounce letter sounds, building the skills needed to read and write.
            </div>
          </li>
          <li>
            Building Vocabulary
            <div className="tooltip">
              Expand your vocabulary by learning new words and their meanings through fun, interactive activities.
            </div>
          </li>
          <li>
            Grammar & Sentence Structure
            <div className="tooltip">
              Understand the parts of a sentence, punctuation rules, and how to write grammatically correct sentences.
            </div>
          </li>
          <li>
            Reading Comprehension
            <div className="tooltip">
              Enhance your understanding of texts by practicing key skills like summarizing and finding main ideas.
            </div>
          </li>
          <li>
            Creative & Academic Writing
            <div className="tooltip">
              Learn to write creative stories or academic papers with structure, flow, and clarity.
            </div>
          </li>
          <li>
            Advanced Writing Techniques
            <div className="tooltip">
              Explore advanced writing techniques such as persuasive writing, argumentation, and narrative skills.
            </div>
          </li>
        </ul>
      </div>

      <p>
        Get ready to embark on your personalized learning journey. Choose your path below and let's make learning fun!
      </p>

      <button onClick={handleModalToggle}>Start Your Adventure!</button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Select Your Learning Path</h2>
            <ul>
              <li onClick={() => handleNavigate('/math')}>Math Journey</li>
              <li onClick={() => handleNavigate('/english')}>English Mastery</li>
              <li onClick={() => handleNavigate('/about')}>About Us</li>
              {/* Add more links as needed */}
            </ul>
            <button onClick={handleModalToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
