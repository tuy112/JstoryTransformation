import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style 모음
// Common css
import './static/css/common/common.css';
import './static/css/common/reset.css';
import './static/css/common/gate.css';
import './static/css/common/modal.css';

// Jstory css
import './static/css/main.css';
import './static/css/sub.css';
import './static/css/login.css';

// Project css
import './static/css/mobile/mobile.css';
import './static/css/mountain/mountain.css';
import './static/css/mountain/mountainModal.css';
import './static/css/study/study.css';
import './static/css/three/three.css';
import './static/css/todo/todo.css';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);