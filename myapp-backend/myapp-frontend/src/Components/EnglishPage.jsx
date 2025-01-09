import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './EnglishPage.css'; // Add your CSS in a separate file

const EnglishPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const navigate = useNavigate();

  const topics = [
    {
      title: 'Phonics & Letter Sounds',
      description:
        'Learn to recognize and pronounce letter sounds, building the skills needed to read and write.',
      id: 'phonics-letter-sounds',
    },
    {
      title: 'Building Vocabulary',
      description:
        'Expand your vocabulary by learning new words and their meanings through fun, interactive activities.',
      id: 'building-vocabulary',
    },
    {
      title: 'Grammar & Sentence Structure',
      description:
        'Understand the parts of a sentence, punctuation rules, and how to write grammatically correct sentences.',
      id: 'grammar-sentence-structure',
    },
    {
      title: 'Reading Comprehension',
      description:
        'Enhance your understanding of texts by practicing key skills like summarizing and finding main ideas.',
      id: 'reading-comprehension',
    },
    {
      title: 'Creative & Academic Writing',
      description:
        'Learn to write creative stories or academic papers with structure, flow, and clarity.',
      id: 'creative-academic-writing',
    },
    {
      title: 'Advanced Writing Techniques',
      description:
        'Explore advanced writing techniques such as persuasive writing, argumentation, and narrative skills.',
      id: 'advanced-writing-techniques',
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
            <div className='activities'>
              <h3>
                <Link to={`/games/${selectedTopic.id}`} className="activity-link">Games</Link>
              </h3>
              <h3>
                <Link to={`/flashcards/${selectedTopic.id}`} className="activity-link">Flashcards</Link>
              </h3>
              <h3>
                <Link to={`/videos/${selectedTopic.id}`} className="activity-link">Videos</Link>
              </h3>
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
