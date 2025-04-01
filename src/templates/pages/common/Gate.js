import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../static/images/earth.png';

import '../../../static/css/common/gate.css';

function Gate() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false); // 로딩 완료
            return 100;
          }
          return prev + 2;
        });
      }, 100);
  
      return () => clearInterval(interval);
    }, []);

    // 별
    useEffect(() => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
      });
    }, [isLoading]);

    // 로딩창
    if (isLoading) {
      return (
        <div className="loading-screen">
          <div className="loading-bar-container">
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Loading... {progress}%</p>
        </div>
      );
    }
  
    // 대문 화면
    return (
      <div className="App">
        <header className="App-header sky">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            KJH (Full Stack Developer)
          </p>
          <Link className="App-link" to="/home">JH의 공간으로 Go!</Link>
  
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className='star'></div>
          ))}
        </header>
      </div>
    );
  }

  export default Gate; 