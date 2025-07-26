import { 
  // Blender
  FaCube, FaPaintBrush, FaFilm, FaLightbulb, FaImage, 
  FaWrench, FaPlay, FaCut, FaCubes, FaTools,
  
  // Metashape
  FaCamera, FaChartArea, FaMap, FaFileExport, FaCloud,
  FaRuler, FaSync, FaEye, FaFileImport, FaProjectDiagram
} from 'react-icons/fa';

export const blenderIcons = [
  { icon: FaCube, text: 'Modélisation', category: 'modeling' },
  { icon: FaPaintBrush, text: 'Sculpture', category: 'sculpting' },
  { icon: FaFilm, text: 'Animation', category: 'animation' },
  { icon: FaLightbulb, text: 'Rendu', category: 'rendering' },
  { icon: FaImage, text: 'Texturage', category: 'texturing' },
  { icon: FaWrench, text: 'Rigging', category: 'rigging' },
  { icon: FaPlay, text: 'Simulation', category: 'simulation' },
  { icon: FaCut, text: 'Montage', category: 'editing' },
  { icon: FaCubes, text: 'Ombrage', category: 'shading' },
  { icon: FaTools, text: 'Compositing', category: 'compositing' }
];

export const metashapeIcons = [
  { icon: FaCamera, text: 'Aligner Photos', category: 'align-photos' },
  { icon: FaChartArea, text: 'Construire Maillage', category: 'build-mesh' },
  { icon: FaMap, text: 'Construire Texture', category: 'build-texture' },
  { icon: FaFileExport, text: 'Exporter Modèle', category: 'export-model' },
  { icon: FaCloud, text: 'Nuage Dense', category: 'dense-cloud' },
  { icon: FaRuler, text: 'Échelle Modèle', category: 'scale-model' },
  { icon: FaSync, text: 'Importer Caméras', category: 'import-cameras' },
  { icon: FaProjectDiagram, text: 'Corriger Distorsion', category: 'undistort' },
  { icon: FaEye, text: 'Traiter Photos', category: 'process-photos' },
  { icon: FaFileImport, text: 'Importer Données', category: 'import-data' }
];

export const iconCategories = {
  blender: {
    title: "Outils Blender",
    icons: blenderIcons
  },
  metashape: {
    title: "Outils Metashape", 
    icons: metashapeIcons
  }
};

