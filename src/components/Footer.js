import { FaHistory, FaRegClock, FaThermometerHalf, FaMemory, FaInfoCircle } from 'react-icons/fa';
import Button3D from './Button3D';

function Footer({ isOpen }) {
  const stats = [
    { icon: FaRegClock, text: 'Temps: 2h45' },
    { icon: FaThermometerHalf, text: 'CPU: 62%' },
    { icon: FaMemory, text: 'RAM: 4.2/8GB' },
    { icon: FaHistory, text: 'Historique' },
    { icon: FaInfoCircle, text: 'Aide' }
  ];

  return (
    <div className={`footer ${isOpen ? 'open' : 'closed'}`}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <Button3D key={index} icon={stat.icon} text={stat.text} small />
        ))}
      </div>
    </div>
  );
}

export default Footer;

