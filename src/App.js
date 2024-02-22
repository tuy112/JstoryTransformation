import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Jboard from './pages/Jboard';
import Three from './project/three'
// import BikeTour from './pages/bikeTour/index.html';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      {/* pages */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/jboard" element={<Jboard/>}></Route>

      {/* project */}
      <Route path="/three" element={<Three/>}></Route>
    </Routes>
  );
}

export default App;