import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Three() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js 초기화
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    camera.position.z = 200; // 카메라 위치 설정
    renderer.setSize(window.innerWidth, window.innerHeight); // 화면 사이즈

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;

    // 모델 생성
    const loader = new GLTFLoader();
    loader.load('./data/character.glb', (gltf) => {
      scene.add(gltf.scene);
    });

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트가 unmount될 때 Three.js 리소스 정리
    return () => {
      renderer.dispose();
      // geometry.dispose();
      // material.dispose();
      controls.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Three;