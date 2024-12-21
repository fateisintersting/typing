import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client';

const Home = () => {
  const [user,setUsername] = useState('');
  const navigate = useNavigate();

  const connectUser = ()=>{
    const socket = io('http://localhost:5000');
    socket.on('welcome', (data) => {
      console.log(data); // Example: "Welcome to the Socket.IO server!"
    });
    // Here you can call your API to connect the user

  }
 

  


  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="flex justify-center h-screen bg-stone-700">
    {/* Main Game Container */}
    <div className="relative h-screen w-2/6 flex flex-col justify-center items-cente z-0">
      {/* Background Video */}
      <video
        src="/background.mp4" // Accessing the video from the public folder
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40  "
      ></video>
  
      {/* Game Content */}
      <div className="rounded-lg shadow-lg  z-10">
        {/* Game Title and Start Button */}
        <div className="p-4 mb-6 flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold p-4 text-white">
            Typing <br /> vs <br /> Shooting
          </h1>
        
          <button
            className="bg-blue-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-blue-700 transition-all shadow-md"
            onClick={startGame}
          >
            Start Game
          </button>
          
        </div>
  
        {/* Username Input Section */}
        <div className="rounded-lg p-4 flex flex-col items-center bg-white bg-opacity-80">
          <label className="block text-lg font-semibold text-black mb-2">
            Username:
          </label>
          <input
            value={user}
            className="w-full p-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 mb-4"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <button
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all shadow-md"
            onClick={connectUser}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Home;
