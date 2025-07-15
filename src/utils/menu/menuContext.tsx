'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
  isOpen: boolean;
  isReduced: boolean;
  setOpen: (open: boolean) => void;
  setReduced: (reduced: boolean) => void;
  toggleOpen: () => void;
  toggleReduced: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Abierto por defecto (se ajustará según pantalla)
  const [isReduced, setIsReduced] = useState<boolean>(false); // Expandido por defecto

  const setOpen = (open: boolean) => {
    setIsOpen(open);
  };

  const setReduced = (reduced: boolean) => {
    setIsReduced(reduced);
  };

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const toggleReduced = () => {
    setIsReduced(prev => !prev);
  };

  return (
    <MenuContext.Provider value={{ 
      isOpen, 
      isReduced, 
      setOpen, 
      setReduced, 
      toggleOpen, 
      toggleReduced 
    }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}