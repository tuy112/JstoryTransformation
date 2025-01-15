import React from 'react';
import { usePlane } from '@react-three/cannon';
import { MeshStandardMaterial} from 'three';

function Ground() {
    // 땅 생성
    const [groundRef] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    }));
    
    const groundMaterial = new MeshStandardMaterial({ color: 'green' });

    return (
        <>
            <mesh ref={groundRef} material={groundMaterial} receiveShadow>
                <planeGeometry args={[100, 100]} />
            </mesh>
        </>
    );
}

export default Ground;