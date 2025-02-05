import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './static/css/common/reset.css';
import './static/css/common/gate.css';

// Components
import Gate from './templates/pages/common/Gate';
import Home from './templates/pages/common/Home';
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';
import History from './templates/pages/History';
import Login from './templates/pages/Login';
import Signup from './templates/pages/Signup';
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import Three from './templates/projects/three/Three';

const App = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Gate />} />
      <Route path="/home" element={<Home />} />
      
      {/* Page Routes */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/project" element={<Project />} />
      <Route path="/history" element={<History />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
      {/* Project Routes */}
      <Route path="/todo" element={<Todo />} />
      <Route path="/three" element={<Three />} />
      <Route path="/mountain" element={<Mountain />} />
    </Routes>
  );
};

export default App;