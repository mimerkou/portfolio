import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
// import Contact from '../components/Contact/Contact';
import ContactTest from '../components/Contact/ContactTest';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <ContactTest />
    </>
  );
};

export default Home;
