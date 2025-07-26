import { FaMagic, FaSlidersH, FaFilter, FaChartLine, FaLayerGroup } from 'react-icons/fa';
import Button3D from './Button3D';

function Rightbar({ isOpen }) {
  const tools = [
    { icon: FaMagic, text: 'Auto-optimisation' },
    { icon: FaSlidersH, text: 'Paramètres avancés' },
    { icon: FaFilter, text: 'Filtres' },
    { icon: FaChartLine, text: 'Analytique' },
    { icon: FaLayerGroup, text: 'Calques' }
  ];

  return (
    <div className={`rightbar ${isOpen ? 'open' : 'closed'}`}>
      <h3>Outils Avancés</h3>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <Button3D key={index} icon={tool.icon} text={tool.text} />
        ))}
      </div>
    </div>
  );
}

export default Rightbar;

