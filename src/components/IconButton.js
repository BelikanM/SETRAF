import React, { useState } from 'react';
import './IconButton.css';

function IconButton({ icon: Icon, text, onClick }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 100);
    onClick();
  };

  return (
    <div
      className={`icon-button ${isPressed ? 'pressed' : ''}`}
      onClick={handleClick}
      title={text || ''}>
      <Icon className="icon" />
      {text && <span className="text">{text}</span>}
    </div>
  );
}

export default IconButton;
