import Button3D from './Button3D';
import { iconCategories } from '../utils/icons';

export default function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {Object.values(iconCategories).map((category, idx) => (
        <div key={idx} className="category-section">
          <h3>{category.title}</h3>
          <div className="button-grid">
            {category.icons.map((icon, i) => (
              <Button3D
                key={`${idx}-${i}`}
                icon={icon.icon}
                text={icon.text}
                onClick={() => console.log(icon.category)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

