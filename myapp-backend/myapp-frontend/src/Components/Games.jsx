import React from 'react';
import { useParams } from 'react-router-dom';

const Games = () => {
  const { topicId } = useParams();

  const renderGameContent = () => {
    switch (topicId) {
      case 'phonics-letter-sounds':
        return <div>Phonics Game: Match letters to sounds!</div>;
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
    <div>
      <h1>Games</h1>
      <div>{renderGameContent()}</div>
    </div>
  );
};

export default Games;
