import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnglishPage.css'; // Add your CSS in a separate file

const EnglishPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigate = useNavigate();

  const topics = [
    {
      title: 'Phonics & Letter Sounds',
      description:
        'Learn to recognize and pronounce letter sounds, building the skills needed to read and write.',
    },
    {
      title: 'Building Vocabulary',
      description:
        'Expand your vocabulary by learning new words and their meanings through fun, interactive activities.',
    },
    {
      title: 'Grammar & Sentence Structure',
      description:
        'Understand the parts of a sentence, punctuation rules, and how to write grammatically correct sentences.',
    },
    {
      title: 'Reading Comprehension',
      description:
        'Enhance your understanding of texts by practicing key skills like summarizing and finding main ideas.',
    },
    {
      title: 'Creative & Academic Writing',
      description:
        'Learn to write creative stories or academic papers with structure, flow, and clarity.',
    },
    {
      title: 'Advanced Writing Techniques',
      description:
        'Explore advanced writing techniques such as persuasive writing, argumentation, and narrative skills.',
    },
  ];

  const handleNavigateBack = () => {
    navigate('/');
  };

  return (
    <div className="english-page">
      <h1>English Mastery</h1>
      <p>Embark on an exciting journey to master the English language!</p>

      <div className="topics-list">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="topic-card"
            onClick={() => setSelectedTopic(topic)}
          >
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedTopic.title}</h2>
            <p>{selectedTopic.description}</p>
            <div>
              <h3>Games</h3>
              <h3>Flashcards</h3>
              <h3>Videos</h3>
            </div>
            <button onClick={() => setSelectedTopic(null)}>Close</button>
          </div>
        </div>
      )}

      <button className="back-button" onClick={handleNavigateBack}>
        Back to Home
      </button>
    </div>
  );
};

export default EnglishPage;
