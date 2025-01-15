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
import History from './templates/pages/History';

// login
import Login from './templates/pages/Login';
import Signup from './templates/pages/Signup';

// Projects
import Todo from './templates/projects/todo/Todo';
// import Mountain from './templates/projects/mountain/Mountain';
import Three from './templates/projects/three/Three';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Gate/>}></Route>
      <Route path="/home" element={<Home/>}></Route>

      {/* pages */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/history" element={<History/>}></Route>

      {/* signUp + login */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

      {/* project */}
      <Route path="/todo" element={<Todo/>}></Route>
      <Route path="/three" element={<Three/>}></Route>
    </Routes>
  );
}

export default App; 