import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="px-10 py-10 text-center border-b border-white/10">
      <h1 className="text-2xl font-light tracking-wide m-0 text-white">Virtual Tour</h1>
      <div className="text-sm mt-1 tracking-[0.2em] text-white/70">NAVIGATION</div>
    </div>
  );
};

export default Header;