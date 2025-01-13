import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../static/images/earth.png';

function Gate() {
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태태
    const [progress, setProgress] = useState(0); // 막대바 진행도

    useEffect(() => {
      // 1. 기능 1 : 5초 동안 로딩 진행
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false); // 로딩 완료
            return 100;
          }
          return prev + 2; // 2씩 증가 (5초 동안 100까지 도달)
        });
      }, 100);
  
      return () => clearInterval(interval);
    }, []);

    // 2. 기능 2 : 별
    useEffect(() => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
      });
    }, [isLoading]);

    // 로딩창 화면
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