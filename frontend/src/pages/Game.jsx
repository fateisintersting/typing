import React, { useEffect, useState } from 'react';
import TypingPlayer from '../components/TypingPlayer';
import ShootingPlayer from '../components/ShootingPlayer';

const Game = () => {
  const [role, setRole] = useState(null);
   // "typer" or "shooter"
   
  useEffect(() => {
  
    // Randomly assign roles or use role-selection logic
    const assignedRole = Math.random() > 0.5 ? 'typer' : 'shooter';
    setRole(assignedRole);


  }, []);

  if (!role) return <div>Loading...</div>;

  return (
    <>

     <div>
      {role === 'typer' ? <TypingPlayer /> : <ShootingPlayer />}
    </div>
    </>
   
  );
};

export default Game;
