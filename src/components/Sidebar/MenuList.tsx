import React from 'react';
import { MenuItem } from './types';

interface MenuListProps {
  items: MenuItem[];
  isSubmenu?: boolean;
  onSubmenuClick?: (items: MenuItem[]) => void;
  onBackClick?: () => void;
}

const MenuList: React.FC<MenuListProps> = ({
  items,
  isSubmenu = false,
  onSubmenuClick,
  onBackClick
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col">
        {isSubmenu && (
          <button
            onClick={onBackClick}
            className="text-white text-left px-10 py-4 text-sm tracking-wider border-b border-white/10 hover:bg-white/10 transition-colors"
          >
            ← BACK
          </button>
        )}
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            onClick={(e) => {
              if (item.hasSubmenu && onSubmenuClick) {
                e.preventDefault();
                onSubmenuClick(item.submenuItems || []);
              }
            }}
            className="text-white no-underline px-10 py-4 text-sm tracking-wider border-b border-white/10 hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuList;