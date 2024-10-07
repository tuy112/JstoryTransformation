import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './static/images/earth.png';
import './static/css/common/reset.css';
import './static/css/common/gate.css';

// Jstory
import Home from './templates/pages/Home';
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';
// login
import Login from './templates/pages/Login';
// Projects
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import JGame from './templates/projects/game/JGame';

function Gate() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header sky">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KJH (Full Stack Developer)
        </p>
        <Link className="App-link" to="/home">JH의 공간으로 Go!</Link>

        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className='star'></div>
        ))}
      </header>
    </div>
  );
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Gate/>}></Route>
      <Route path="/home" element={<Home/>}></Route>

      {/* pages */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>

      {/* signUp + login */}
      <Route path="/login" element={<Login/>}></Route>

      {/* project */}
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/mountain" element={<Mountain/>}></Route>
      <Route path="/jGame" element={<JGame/>}></Route>
    </Routes>
  );
}

export default App; 