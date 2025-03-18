import React from 'react';
import '../../../static/css/three/three.css';

// three.js (3D 공간 만들기)
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Physics } from '@react-three/cannon'; // 물리엔진
import { Sky, PointerLockControls } from "@react-three/drei";
import Ground from './component/Ground'; // 땅 + 하늘
import Character from './component/Character'; // 캐릭터
import Player from "./component/Player";

function App() {
  
  return (
    <div id='wrap'>
      <div className="crosshair"></div>

      <Canvas shadows>
        <Html position={[3, 4, 2]}>
          <p style={{ color: '#fff', fontSize: '25px', width: '350px' }}>
              Jstory에 오신 것을 환영합니다!!
              WASD Space를 눌러보세요~
          </p>
        </Html>
        <ambientLight intensity={0.5}/>
        <Physics>
            <PointerLockControls />
            <Sky sunPosition={[100, 20, 100]} />
            <Ground />
            <Character />
            <Player />
            {/* <MusicBox /> */}
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;