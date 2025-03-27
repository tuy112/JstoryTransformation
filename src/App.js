import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './static/css/common/reset.css';
import './static/css/common/gate.css';

// 공통
import Gate from './templates/pages/common/Gate';
import Home from './templates/pages/common/Home';

// 소개
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';
import History from './templates/pages/History';

// 로그인, 회원가입
import Login from './templates/pages/Login';
import Signup from './templates/pages/Signup';

// 프로젝트
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import Three from './templates/projects/three/Three';
import ServerCreate from './templates/projects/study/ServerCreate';
import Certificate from './templates/projects/study/Certificate';

// 모달 모음
import TilModal from './templates/component/TilModal';

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
      <Route path="/server-create" element={<ServerCreate />} />
      <Route path="/certificate" element={<Certificate />} />

      {/* modal components */}
      <Route path="/til" element={<TilModal />} />
    </Routes>
  );
};

export default App;