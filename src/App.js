import React from "react";
import { Routes , Route } from "react-router-dom";

// Jstory
import Home from './templates/pages/Home';
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';
import Qna from './templates/pages/Qna';
// login
import Login from './templates/pages/Login';
// Projects
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import JGame from './templates/projects/game/JGame';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>

      {/* pages */}
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/qna" element={<Qna/>}></Route>

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