import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ThingMap from './components/map';

function App() {

  return (
    <>
<div 
  style={{
    width: '600px',
    height: '400px',
    border: '5px solid yellow', 
    backgroundImage: 'url(https://wallpaper.forfun.com/fetch/52/52ec3a96c2ffd0943503b472ecf14c02.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  }}
>
  <ThingMap />
</div>

    </>
  );
}

export default App;
