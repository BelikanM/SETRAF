import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import './Button3D.css';

function Button3D({ text, icon: Icon, onClick, noText = false }) {
  const meshRef = useRef();
  const [isPressed, setIsPressed] = useState(false);

  // Gestion du clic
  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);
    onClick();
  };

  return (
    <div className="button-wrapper">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <group
          position={[0, 0, 0]}
          onClick={handleClick}
          onPointerDown={() => setIsPressed(true)}
          onPointerUp={() => setIsPressed(false)}
        >
          {/* Bouton principal */}
          <mesh ref={meshRef} scale={isPressed ? 0.95 : 1}>
            <boxGeometry args={[2, 2, 0.2]} />
            <meshStandardMaterial
              color="#e0e0e0"
              metalness={0.8}
              roughness={0.2}
              envMapIntensity={1}
            />
          </mesh>
          {/* Texte (optionnel pour Navbar) */}
          {!noText && (
            <Text
              position={[0, -0.2, 0.11]}
              fontSize={0.3}
              color="#1e3a8a"
              anchorX="center"
              anchorY="middle"
            >
              <meshStandardMaterial metalness={0.5} roughness={0.3} />
              {text}
            </Text>
          )}
        </group>
      </Canvas>
      <div className="icon-overlay">
        <Icon className="icon" />
      </div>
    </div>
  );
}

export default Button3D;
