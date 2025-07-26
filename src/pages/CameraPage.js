import React, { useState } from 'react';
import { FaRobot, FaCube } from 'react-icons/fa';
import O from '../components/camera/IA/O'; // page IA
import X from '../components/camera/IA/X'; // page 3D
import '../components/camera/camera.css';

const CameraPage = () => {
  const [activeTab, setActiveTab] = useState('ia');

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Caméras & Analyse</h1>

      <div className="nav-icons">
        <button
          className={activeTab === 'ia' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('ia')}
        >
          <FaRobot size={24} />
          <span>IA Cam</span>
        </button>
        <button
          className={activeTab === '3d' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setActiveTab('3d')}
        >
          <FaCube size={24} />
          <span>3D Cam</span>
        </button>
      </div>

      <div className="camera-content">
        {activeTab === 'ia' ? <O /> : <X />}
      </div>
    </div>
  );
};

export default CameraPage;
