import React from 'react';
import Scene from './components/VirtualTour/Scene';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="relative w-full h-screen">
      <Scene />
      <Sidebar />
    </div>
  );
}

export default App;