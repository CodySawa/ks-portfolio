import React from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavB from './components/nav';


function App() {
  return (
    <div>
      <header>
        <NavB></NavB>
      </header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
