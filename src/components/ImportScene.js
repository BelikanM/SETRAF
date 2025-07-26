import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three-stdlib';
import * as THREE from 'three';

function Model({ objUrl }) {
  const meshRef = useRef();
  const [model, setModel] = useState(null);

  // Charger le fichier OBJ
  useState(() => {
    if (objUrl) {
      const loader = new OBJLoader();
      loader.load(
        objUrl,
        (obj) => {
          obj.traverse((child) => {
            if (child.isMesh) {
              child.material = new THREE.MeshStandardMaterial({
                color: '#ffffff',
                metalness: 0.5,
                roughness: 0.5,
              });
            }
          });
          setModel(obj);
        },
        undefined,
        (error) => console.error('Erreur lors du chargement de l\'OBJ:', error)
      );
    }
  }, [objUrl]);

  // Rotation du modèle
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return model ? <primitive ref={meshRef} object={model} /> : null;
}

function ImportScene() {
  const [objUrl, setObjUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.name.endsWith('.obj')) {
      const url = URL.createObjectURL(file);
      setObjUrl(url);
    } else {
      alert('Veuillez uploader un fichier .OBJ valide');
    }
  };

  return (
    <div className="import-scene">
      <h2>Importer un Modèle 3D</h2>
      <input type="file" accept=".obj" onChange={handleFileUpload} />
      {objUrl && (
        <Suspense fallback={<div>Chargement...</div>}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ height: '500px', width: '100%' }}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Model objUrl={objUrl} />
            <OrbitControls />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}

export default ImportScene;
