import { MapInteractionCSS } from 'react-map-interaction';
import { useState } from 'react';
import Piece from './Piece';

const boardPieces = [
  {
    x: 800,
    y: 800,
    letter: 'A',
  },
  {
    x: 1200,
    y: 700,
    letter: 'B',
  },
  {
    x: 1000,
    y: 1000,
    letter: 'C',
  },
  {
    x: 700,
    y: 500,
    letter: 'D',
  },
];

const ThingMap = () => {
  const [mapState, setMapState] = useState({
    scale: 0.8,
    translation: { x: -500, y: -500 },
  });

  const renderBoardPieces = () => {
    return boardPieces.map((boardPiece, index) => (
      <Piece key={`board-piece-${index}`} x={boardPiece.x} y={boardPiece.y} letter={boardPiece.letter} />
    ));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <MapInteractionCSS
        value={mapState}
        onChange={(value) => setMapState(value)}
        minScale={0.5}  
        maxScale={2}   
        style={{
          width: '100vh',
          height: '100vw',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '2000px', 
            height: '1500px',
            backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b637e128570183.55c740e9c017c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {renderBoardPieces()}
        </div>
      </MapInteractionCSS>
    </div>
  );
};

export default ThingMap;
