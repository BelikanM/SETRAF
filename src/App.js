import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import IconButton from './components/IconButton';
import ImportScene from './components/ImportScene';

import CameraPage from './pages/CameraPage';
import TraitementPage from './pages/TraitementPage';

import ModelingPage from './pages/modeling';
import SculptingPage from './pages/sculpting';
import AnimationPage from './pages/animation';
import RenderingPage from './pages/rendering';
import TexturingPage from './pages/texturing';
import RiggingPage from './pages/rigging';
import SimulationPage from './pages/simulation';
import EditingPage from './pages/editing';
import ShadingPage from './pages/shading';
import CompositingPage from './pages/compositing';
import AlignPhotosPage from './pages/align_photos';
import BuildMeshPage from './pages/build_mesh';
import BuildTexturePage from './pages/build_texture';
import ExportModelPage from './pages/export_model';
import DenseCloudPage from './pages/dense_cloud';
import ScaleModelPage from './pages/scale_model';
import ImportCamerasPage from './pages/import_cameras';
import UndistortPage from './pages/undistort';
import ProcessPhotosPage from './pages/process_photos';
import ImportPage from './pages/import';

import {
  FaCube, FaPaintBrush, FaFilm, FaLightbulb, FaImage, FaWrench,
  FaPlay, FaCut, FaCubes, FaTools, FaCamera, FaChartArea, FaMap,
  FaFileExport, FaCloud, FaRuler, FaSync, FaCog, FaEye, FaFileImport
} from 'react-icons/fa';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const buttons = [
    { to: '/modeling', text: 'Modélisation', icon: FaCube },
    { to: '/sculpting', text: 'Sculpture', icon: FaPaintBrush },
    { to: '/animation', text: 'Animation', icon: FaFilm },
    { to: '/rendering', text: 'Rendu', icon: FaLightbulb },
    { to: '/texturing', text: 'Texturage', icon: FaImage },
    { to: '/rigging', text: 'Rigging', icon: FaWrench },
    { to: '/simulation', text: 'Simulation', icon: FaPlay },
    { to: '/editing', text: 'Montage', icon: FaCut },
    { to: '/shading', text: 'Ombrage', icon: FaCubes },
    { to: '/compositing', text: 'Compositing', icon: FaTools },
    { to: '/align-photos', text: 'Aligner Photos', icon: FaCamera },
    { to: '/build-mesh', text: 'Construire Maillage', icon: FaChartArea },
    { to: '/build-texture', text: 'Construire Texture', icon: FaMap },
    { to: '/export-model', text: 'Exporter Modèle', icon: FaFileExport },
    { to: '/dense-cloud', text: 'Nuage Dense', icon: FaCloud },
    { to: '/scale-model', text: 'Échelle Modèle', icon: FaRuler },
    { to: '/import-cameras', text: 'Importer Caméras', icon: FaSync },
    { to: '/undistort', text: 'Corriger Distorsion', icon: FaCog },
    { to: '/process-photos', text: 'Traiter Photos', icon: FaEye },
    { to: '/import', text: 'Importer', icon: FaFileImport },
  ];

  const routeComponents = {
    '/modeling': <ModelingPage />,
    '/sculpting': <SculptingPage />,
    '/animation': <AnimationPage />,
    '/rendering': <RenderingPage />,
    '/texturing': <TexturingPage />,
    '/rigging': <RiggingPage />,
    '/simulation': <SimulationPage />,
    '/editing': <EditingPage />,
    '/shading': <ShadingPage />,
    '/compositing': <CompositingPage />,
    '/align-photos': <AlignPhotosPage />,
    '/build-mesh': <BuildMeshPage />,
    '/build-texture': <BuildTexturePage />,
    '/export-model': <ExportModelPage />,
    '/dense-cloud': <DenseCloudPage />,
    '/scale-model': <ScaleModelPage />,
    '/import-cameras': <ImportCamerasPage />,
    '/undistort': <UndistortPage />,
    '/process-photos': <ProcessPhotosPage />,
    '/import': <ImportPage />,
    '/camera': <CameraPage />,
    '/traitement': <TraitementPage />,
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
          <div className="button-container">
            {buttons.map((btn) => (
              <Link key={btn.to} to={btn.to} className="nav-button">
                <IconButton text={btn.text} icon={btn.icon} onClick={() => {}} />
              </Link>
            ))}
          </div>
        </div>
        <div className={`content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Routes>
            {buttons.map((btn) => (
              <Route
                key={btn.to}
                path={btn.to}
                element={routeComponents[btn.to]}
              />
            ))}
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/traitement" element={<TraitementPage />} />
            <Route path="/" element={<h2>Bienvenue ! Sélectionnez une fonction.</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
