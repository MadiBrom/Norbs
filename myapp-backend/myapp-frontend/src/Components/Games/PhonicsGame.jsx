import React, { useState } from 'react';

// Example phonics sounds with corresponding letters
const phonicsData = [
  { letter: 'A', sound: '/æ/' },
  { letter: 'B', sound: '/b/' },
  { letter: 'C', sound: '/k/' },
  // Add more letters and sounds as needed
];

const PhonicsGame = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDragStart = (e, card) => {
    setSelectedCard(card);
    e.dataTransfer.setData('card', JSON.stringify(card));
  };

  const handleDrop = (e, letter) => {
    const droppedCard = JSON.parse(e.dataTransfer.getData('card'));
    if (droppedCard.letter === letter) {
      alert('Correct!');
    } else {
      alert('Try again!');
    }
  };

  return (
    <div>
      <h2>Phonics Game</h2>
      <p>Match the letter to its correct sound!</p>

      <div className="phonics-container">
        <div className="sounds">
          {phonicsData.map((item, index) => (
            <div
              key={index}
              className="card"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <div className="sound">{item.sound}</div>
              <div className="letter">{item.letter}</div>
            </div>
          ))}
        </div>

        <div className="letters">
          {phonicsData.map((item, index) => (
            <div
              key={index}
              className="letter-target"
              onDrop={(e) => handleDrop(e, item.letter)}
              onDragOver={(e) => e.preventDefault()}
            >
              {item.letter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhonicsGame;
