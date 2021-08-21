import './App.css';
import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="p-1em">
      <header>
        <h1 className="jumbotron ta-c p-1em">Brian Walters</h1>
        <Header />
      </header>
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
