import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
    </>
  );
};

export default App;
