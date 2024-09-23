import React, { useState } from "react";

const Piece = ({ x, y, letter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        width: 100,
        height: 100,
        backgroundColor: isHovered ? 'orange' : 'black',
        left: x,
        top: y,
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      <p style={{ fontSize: 30, fontWeight: 'bold' }}>{letter}</p>
    </div>
  );
};

export default Piece;
