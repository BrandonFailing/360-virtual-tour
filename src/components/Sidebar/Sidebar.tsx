import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './Header';
import MenuList from './MenuList';
import BottomIcons from './BottomIcons';
import { menuStructure } from './menuData';
import { MenuItem } from './types';

const DESKTOP_WIDTH = 300;
const MOBILE_WIDTH = Math.floor(DESKTOP_WIDTH * 0.66);

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentSubmenu, setCurrentSubmenu] = useState<MenuItem[] | null>(null);
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

  const isMobile = window.innerWidth <= 768;
  const currentWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;

  const handleSubmenuClick = (submenuItems: MenuItem[]) => {
    setCurrentSubmenu(submenuItems);
    setIsSubmenuVisible(true);
  };

  const handleBackClick = () => {
    setIsSubmenuVisible(false);
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen bg-black/70 z-50 transition-all duration-300 overflow-hidden`}
        style={{ width: isExpanded ? currentWidth : 30 }}
      >
        <div
          className="min-w-[300px] h-full flex flex-col relative transition-transform duration-300"
          style={{
            transform: `translateX(${isExpanded ? 0 : -currentWidth + 30}px)`,
          }}
        >
          <div className="relative w-full h-full">
            {/* Main Menu */}
            <div
              className="absolute inset-0 w-full h-full flex flex-col transition-transform duration-300"
              style={{
                transform: isSubmenuVisible ? 'translateX(-100%)' : 'translateX(0)',
              }}
            >
              <Header />
              <MenuList
                items={menuStructure.main}
                onSubmenuClick={handleSubmenuClick}
              />
              <BottomIcons />
            </div>

            {/* Submenu */}
            <div
              className="absolute inset-0 w-full h-full flex flex-col transition-transform duration-300"
              style={{
                transform: isSubmenuVisible ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              {currentSubmenu && (
                <>
                  <Header />
                  <MenuList
                    items={currentSubmenu}
                    isSubmenu={true}
                    onBackClick={handleBackClick}
                  />
                  <BottomIcons />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed z-[51] w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
        style={{
          left: isExpanded ? currentWidth - 20 : 5,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {isExpanded ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <ChevronRight className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default Sidebar;