import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './static/css/common/reset.css';
import './static/css/common/gate.css';

// common
import Gate from './templates/pages/common/Gate';
import Home from './templates/pages/common/Home';

// main
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';

// login
import Login from './templates/pages/Login';

// Projects
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import JGame from './templates/projects/game/JGame';


function App() {

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