import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// https://www.youtube.com/watch?v=JFX_IM2FJyQ&list=PLkbzizJk4Ae9hHI_YUD3fRv8xLfS3jGEW&index=2

function Three() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js 초기화
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 카메라 위치 설정
    camera.position.z = 2;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트가 unmount될 때 Three.js 리소스 정리
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Three;