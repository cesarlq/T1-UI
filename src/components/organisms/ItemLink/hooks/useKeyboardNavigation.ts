import { useCallback } from 'react';

interface UseKeyboardNavigationProps {
  onItemClick: (e: any) => void;
  subPaths?: any[];
  openSubMenu?: boolean;
  onClickPath: (index: number) => void;
  index: number;
  filteredSubPaths: any[];
  itemRef: React.RefObject<HTMLElement>;
  safeText: string;
}

export const useKeyboardNavigation = ({
  onItemClick,
  subPaths,
  openSubMenu,
  onClickPath,
  index,
  filteredSubPaths,
  itemRef,
  safeText
}: UseKeyboardNavigationProps) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const announceAction = (action: string) => {
      const announcement = document.getElementById('nav-announcer');
      if (announcement) {
        announcement.textContent = action;
      }
    };

    switch(e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        announceAction(`Navegando a ${safeText}`);
        onItemClick(e as any);
        break;
      case 'ArrowRight':
        if (subPaths && !openSubMenu) {
          e.preventDefault();
          announceAction(`Abriendo submenú de ${safeText}`);
          onClickPath(index);
        }
        break;
      case 'ArrowLeft':
        if (subPaths && openSubMenu) {
          e.preventDefault();
          announceAction(`Cerrando submenú de ${safeText}`);
          onClickPath(-1);
        }
        break;
      case 'ArrowDown':
        if (openSubMenu && filteredSubPaths.length > 0) {
          e.preventDefault();
          const firstSubPath = itemRef.current?.querySelector('[role="menuitem"]') as HTMLElement;
          firstSubPath?.focus();
          announceAction(`Navegando a opciones de ${safeText}`);
        }
        break;
      case 'Escape':
        if (openSubMenu) {
          e.preventDefault();
          onClickPath(-1);
          announceAction(`Submenú cerrado`);
        }
        break;
    }
  }, [onItemClick, subPaths, openSubMenu, onClickPath, index, filteredSubPaths, itemRef, safeText]);

  return { handleKeyDown };
};