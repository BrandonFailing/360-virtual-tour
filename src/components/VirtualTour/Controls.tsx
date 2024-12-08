import React from 'react';
import { Compass, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useTourStore } from '../../store/tourStore';

const Controls: React.FC = () => {
  const { scenes, currentSceneId, setCurrentScene } = useTourStore();
  
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
      <button className="text-white hover:text-blue-400 transition-colors">
        <ZoomIn size={24} />
      </button>
      <button className="text-white hover:text-blue-400 transition-colors">
        <ZoomOut size={24} />
      </button>
      <button className="text-white hover:text-blue-400 transition-colors">
        <Compass size={24} />
      </button>
      <button className="text-white hover:text-blue-400 transition-colors">
        <RotateCcw size={24} />
      </button>
    </div>
  );
}

export default Controls;