import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import NavB from './components/nav';


function App() {
  return (
    <div>
      <header>
        <NavB></NavB>
      </header>
      <main>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
