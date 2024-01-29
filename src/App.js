import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Project from './pages/Project';
import BikeTour from './pages/BikeTour';

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home/>}></Route>

      {/* subPage */}
      <Route path={"/profile"} element={<Profile/>}></Route>
      <Route path={"/project"} element={<Project/>}></Route>
      <Route path={"/bikeTour"} element={<BikeTour/>}></Route>
    </Routes>
  );
}

export default App;