// App.js

import React from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import '../src/index.css';

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(24, 26, 27)' }}>
      <div className="gradient-bg-hero" style={{ height: '4.5vh' }}>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
