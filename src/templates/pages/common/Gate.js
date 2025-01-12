import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../static/images/earth.png';

function Gate() {
    useEffect(() => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
      });
    }, []);
  
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