import React from 'react';
import { usePlane } from '@react-three/cannon';

function Ground() {
    const [groundRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    }));

    return (
        <>
            {/* 땅 */}
            <mesh ref={groundRef} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial 
                    color="#90EE90"
                    roughness={1}
                    metalness={0}
                />
            </mesh>
            
            {/* 길 */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
                <planeGeometry args={[4, 20]} />
                <meshStandardMaterial color="#8b4513" />
            </mesh>
        </>
    );
}

export default Ground;