import React, { useEffect } from "react";
import { Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import Jboard from './pages/Jboard';
// import BikeTour from './pages/bikeTour/index.html';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/jboard" element={<Jboard/>}></Route>
      {/* <Route path="/bikeTour" element={<BikeTour/>}></Route> */}
    </Routes>
  );
}

export default App;