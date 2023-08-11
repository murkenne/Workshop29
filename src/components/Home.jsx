import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <img
          src="https://media.istockphoto.com/id/1361720042/vector/colorful-red-dog-house-in-cartoon-style-with-bone-symbol-isolated-on-white-background-for.jpg?s=612x612&w=0&k=20&c=xlDiMplIsUMFXtk61eNMUKwrW6tRJDZ0M6eyJ5xiAd0="
          alt="Dog House"
        />
      </div>
    </>
  );
};

export default Home;



