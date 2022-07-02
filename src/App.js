import React from 'react';
import Home from './pages/Home';
// import Home from './sections/Home/Home';
// import About from './sections/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
