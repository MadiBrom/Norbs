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
  const [congratsMessage, setCongratsMessage] = useState(false);

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
      setCongratsMessage(true);

      // Hide confetti and message after 2 seconds
      setTimeout(() => {
        setShowConfetti(false);
        setCongratsMessage(false);
      }, 2000);
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
                value: 100, // Number of confetti particles
              },
              shape: {
                type: 'circle', // Shape of confetti
              },
              color: {
                value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00'], // Confetti colors
              },
              size: {
                value: 5, // Size of the confetti particles
                random: true, // Random size
              },
              opacity: {
                value: 0.7, // Transparency of confetti
              },
              move: {
                enable: true,
                speed: 3, // Speed of falling confetti
                direction: 'bottom', // Confetti falls down
                outModes: {
                  bottom: 'none', // Confetti won't leave the canvas
                },
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

      {/* Congrats Modal */}
      {congratsMessage && (
        <div className="congrats-modal">
          <h3>Congratulations!</h3>
          <p>You matched the letter and sound correctly!</p>
        </div>
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
