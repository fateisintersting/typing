import React, { useState } from 'react';

const TypingPlayer = () => {
  const [input, setInput] = useState('');
  const maxWordLength = 5; // Example constraint

  const handleInputChange = (e) => {
    if (e.target.value.length <= maxWordLength) {
      setInput(e.target.value);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/submit-word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ word: input }),
      });
      const data = await response.json();
      console.log(data.message); // Display success message
      setInput(''); // Clear the input field
    } catch (error) {
      console.error('Error submitting word:', error);
    }
  };
  

  return (
    <div>
      <h2>Typing Player</h2>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type a word..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TypingPlayer;
