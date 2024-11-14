import React from 'react';
import './index.css'; 

const AnimatedGifComponent: React.FC = () => {
  return (
    <div>
      <img src="./img/sprite.gif" alt="Animated GIF" className="animated-gif" />
    </div>
  );
};

export default AnimatedGifComponent;