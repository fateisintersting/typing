import React, { useEffect, useState } from 'react';

const ShootingPlayer = () => {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    // Example: Listen for words sent from TypingPlayer via WebRTC
    const simulateIncomingWord = async () => {
  
      try {
        const response = await fetch('/api/submit-word', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ word: input }),
        });
        const word = await response.json();
        setTargets((prev) => [...prev, word]);
     // Clear the input field
      } catch (error) {
        console.error('Error submitting word:', error);
      }
    
    };

    const interval = setInterval(simulateIncomingWord, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleShoot = (word) => {
    console.log('Shot word:', word);
    setTargets((prev) => prev.filter((t) => t !== word));
  };

  return (
    <div>
      <h2>Shooting Player</h2>
      {targets.map((word, index) => (
        <div key={index}>
          <span>{word}</span>
          <button onClick={() => handleShoot(word)}>Shoot</button>
        </div>
      ))}
    </div>
  );
};

export default ShootingPlayer;
