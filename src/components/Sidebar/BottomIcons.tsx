import React from 'react';
import { Info, MapPin } from 'lucide-react';

const BottomIcons: React.FC = () => {
  return (
    <div className="p-5 flex gap-3 justify-center">
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Info size={20} className="text-gray-700" />
      </button>
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
        <MapPin size={20} className="text-gray-700" />
      </button>
    </div>
  );
};

export default BottomIcons;