import React from 'react';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
