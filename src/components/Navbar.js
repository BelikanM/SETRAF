import { Link } from 'react-router-dom';
import { FaCamera, FaCog, FaBars } from 'react-icons/fa';
import IconButton from './IconButton';
import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="toggle-button">
          <IconButton icon={FaBars} onClick={toggleSidebar} />
        </div>
        <Link to="/camera" className="nav-button">
          <IconButton icon={FaCamera} onClick={() => {}} />
        </Link>
        <Link to="/traitement" className="nav-button">
          <IconButton icon={FaCog} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
