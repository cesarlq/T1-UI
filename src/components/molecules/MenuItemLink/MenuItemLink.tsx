import React from 'react';
import { MenuItem, User } from '@/interfaces/menu';

interface MenuItemLinkProps {
  item: MenuItem;
  index: number;
  isActive: boolean;
  activeSubPath: string;
  isOpen: boolean;
  sidebarReduce: boolean;
  enlargeByHover: boolean;
  user?: User;
  onNavigate: (path: string) => void;
  onSetActivePath: (path: string) => void;
  onSetActiveSubPath: (path: string) => void;
  onSetSubmenuOpen: (index: number) => void;
  styles: Record<string, string>;
}

export function MenuItemLink({
  item,
  index,
  isActive,
  activeSubPath,
  isOpen,
  sidebarReduce,
  enlargeByHover,
  user,
  onNavigate,
  onSetActivePath,
  onSetActiveSubPath,
  onSetSubmenuOpen,
  styles
}: MenuItemLinkProps) {
  
  const handleClick = (path?: string) => {
    onSetActivePath(item.href);
    onSetSubmenuOpen(index);
    
    if (path) {
      let finalPath = path;
      if (item.concatStoreId && user?.storeId) {
        finalPath = path + user.storeId;
      }
      onNavigate(finalPath);
      onSetActiveSubPath(finalPath);
    }
  };

  const showText = !sidebarReduce || enlargeByHover;

  // Create a simple fallback icon if the image fails to load
  const IconFallback = ({ text }: { text: string }) => (
    <div className="w-5 h-5 bg-gray-400 rounded text-white text-xs flex items-center justify-center">
      {text[0].toUpperCase()}
    </div>
  );

  if (item.subPaths && item.subPaths.length > 0) {
    return (
      <div className="mb-1">
        <button
          className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors ${
            isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
          }`}
          onClick={() => handleClick(item.subPaths?.[0]?.href)}
          type="button"
        >
          <div className="flex items-center gap-3">
            <img 
              src={item.icon} 
              alt={item.text} 
              className="w-5 h-5 flex-shrink-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.icon-fallback') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <IconFallback text={item.text} />
            {showText && <span className="font-medium">{item.text}</span>}
          </div>
          {showText && (
            <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          )}
        </button>
        
        {showText && isOpen && (
          <div className="ml-8 mt-1 space-y-1">
            {item.subPaths.map((subItem, subIndex) => (
              <button
                key={subIndex}
                className={`w-full text-left p-2 rounded hover:bg-gray-100 transition-colors text-sm ${
                  subItem.href === activeSubPath ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600'
                }`}
                onClick={() => {
                  onSetActiveSubPath(subItem.href);
                  onNavigate(subItem.href);
                }}
                type="button"
              >
                {subItem.text}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 transition-colors mb-1 ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
      }`}
      onClick={() => handleClick(item.href)}
      type="button"
    >
      <img 
        src={item.icon} 
        alt={item.text} 
        className="w-5 h-5 flex-shrink-0"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.parentElement?.querySelector('.icon-fallback') as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <IconFallback text={item.text} />
      {showText && <span className="font-medium">{item.text}</span>}
    </button>
  );
}

// Add CSS to hide fallback icons initially
const style = document.createElement('style');
style.textContent = `
  .icon-fallback {
    display: none;
  }
`;
document.head.appendChild(style);