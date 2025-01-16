import React, { useState } from 'react';
import Particles from 'react-tsparticles';

// Example phonics sounds with corresponding letters
const phonicsData = [
  { letter: 'A', sound: '/sounds/a.mp3' },
  { letter: 'B', sound: '/sounds/b.mp3' },
  { letter: 'C', sound: '/sounds/c.mp3' },
  { letter: 'D', sound: '/sounds/d.mp3' },
  { letter: 'E', sound: '/sounds/e.mp3' },
  { letter: 'F', sound: '/sounds/f.mp3' },
  { letter: 'G', sound: '/sounds/g.mp3' },
  { letter: 'H', sound: '/sounds/h.mp3' },
  { letter: 'I', sound: '/sounds/i.mp3' },
  { letter: 'J', sound: '/sounds/j.mp3' },
  { letter: 'K', sound: '/sounds/k.mp3' },
  { letter: 'L', sound: '/sounds/l.mp3' },
  { letter: 'M', sound: '/sounds/m.mp3' },
  { letter: 'N', sound: '/sounds/n.mp3' },
  { letter: 'O', sound: '/sounds/o.mp3' },
  { letter: 'P', sound: '/sounds/p.mp3' },
  { letter: 'Q', sound: '/sounds/q.mp3' },
  { letter: 'R', sound: '/sounds/r.mp3' },
  { letter: 'S', sound: '/sounds/s.mp3' },
  { letter: 'T', sound: '/sounds/t.mp3' },
  { letter: 'U', sound: '/sounds/u.mp3' },
  { letter: 'V', sound: '/sounds/v.mp3' },
  { letter: 'W', sound: '/sounds/w.mp3' },
  { letter: 'X', sound: '/sounds/x.mp3' },
  { letter: 'Y', sound: '/sounds/y.mp3' },
  { letter: 'Z', sound: '/sounds/z.mp3' },
];

const PhonicsGame = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleDragStart = (e, card) => {
    setSelectedCard(card);
    e.dataTransfer.setData('card', JSON.stringify(card));
    playSound(card.sound); // Play sound on drag start
  };

  const handleDrop = (e, letter) => {
    const droppedCard = JSON.parse(e.dataTransfer.getData('card'));
    if (droppedCard.letter === letter) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
    } else {
      alert('Try again!');
    }
  };

  return (
    <div>
      <h2>Phonics Game</h2>
      <p>Match the letter to its correct sound!</p>

      {showConfetti && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 50,
              },
              shape: {
                type: 'triangle',
              },
              color: {
                value: '#ff0000',
              },
              size: {
                value: 5,
              },
              opacity: {
                value: 0.7,
              },
              move: {
                enable: true,
                speed: 10,
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
              },
            },
          }}
        />
      )}

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
