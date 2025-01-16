import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Games.css';
import PhonicsGame from './Games/PhonicsGame';

const Games = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const topics = [
    'phonics-letter-sounds',
    'building-vocabulary',
    'grammar-sentence-structure',
    'reading-comprehension',
    'creative-academic-writing',
    'advanced-writing-techniques',
  ];

  const currentIndex = topics.indexOf(topicId);

  const handlePrevious = () => {
    const previousTopic = topics[currentIndex - 1] || topics[topics.length - 1]; // Loop back to the last topic if at the start
    navigate(`/games/${previousTopic}`);
  };

  const handleNext = () => {
    const nextTopic = topics[currentIndex + 1] || topics[0]; // Loop back to the first topic if at the end
    navigate(`/games/${nextTopic}`);
  };

  const renderGameContent = () => {
    switch (topicId) {
      case 'phonics-letter-sounds':
        return <PhonicsGame />;
      case 'building-vocabulary':
        return <div>Vocabulary Game: Guess the meaning of the word!</div>;
      case 'grammar-sentence-structure':
        return <div>Grammar Game: Fix the sentence!</div>;
      case 'reading-comprehension':
        return <div>Reading Game: Answer questions about the passage!</div>;
      case 'creative-academic-writing':
        return <div>Writing Game: Create a story based on prompts!</div>;
      case 'advanced-writing-techniques':
        return <div>Advanced Writing Game: Improve a draft!</div>;
      default:
        return <div>Select a valid topic to play a game!</div>;
    }
  };

  return (
    <div className="games-container">
      <div className="game-header">
        <h1>Games for Learning</h1>
        <p>Play and learn with fun interactive games!</p>
      </div>

      <div className="game-area">
        <div>{renderGameContent()}</div>
      </div>

      <div className="game-sidebar">
        <h3>Instructions</h3>
        <p>Follow the rules of the game to learn and have fun!</p>
      </div>

      <div className="game-footer">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Games;
