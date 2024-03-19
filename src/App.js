import React from "react";
import { Routes , Route } from "react-router-dom";

// Jstory
import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';

// login
import Login from './pages/Login';

// Projects
import Jboard from './project/Jboard';
import Three from './project/Three';
import CodingRoom from './project/CodingRoom';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      {/* pages */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>

      {/* signUp + login */}
      <Route path="/login" element={<Login/>}></Route>

      {/* project */}
      <Route path="/jboard" element={<Jboard/>}></Route>
      <Route path="/three" element={<Three/>}></Route>
      <Route path="/codingRoom" element={<CodingRoom/>}></Route>
    </Routes>
  );
}

export default App;