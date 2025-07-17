import { useEffect, useState, useCallback, useRef } from 'react';

interface MenuIntelligenceData {
  clickCount: number;
  lastClicked: number;
  avgTimeToClick: number;
  preferredItems: string[];
}

interface UseMenuIntelligenceReturn {
  isFrequentlyUsed: boolean;
  predictedNextClick: boolean;
  recordClick: () => void;
  getRecommendedOrder: (items: any[]) => any[];
  shouldPrefetch: boolean;
}

/**
 * Hook inteligente para optimizar el comportamiento del menú
 * basado en patrones de uso del usuario - Estilo Amazon/Google
 */
export const useMenuIntelligence = (itemId: string): UseMenuIntelligenceReturn => {
  const [data, setData] = useState<MenuIntelligenceData>(() => {
    // Intentar cargar datos previos del sessionStorage
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(`menu_intel_${itemId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    }
    
    return {
      clickCount: 0,
      lastClicked: 0,
      avgTimeToClick: 0,
      preferredItems: []
    };
  });
  
  const mountTime = useRef(Date.now());
  
  // Determinar si es un item frecuentemente usado
  const isFrequentlyUsed = data.clickCount > 3;
  
  // Predecir si el usuario está a punto de hacer click
  const predictedNextClick = useCallback(() => {
    if (!data.lastClicked) return false;
    
    const timeSinceLastClick = Date.now() - data.lastClicked;
    const timeOnPage = Date.now() - mountTime.current;
    
    // Si el usuario suele hacer click rápido en este item
    if (data.avgTimeToClick > 0 && timeOnPage > data.avgTimeToClick * 0.8) {
      return true;
    }
    
    // Si hay un patrón de clicks regulares
    if (timeSinceLastClick < 5000 && data.clickCount > 1) {
      return true;
    }
    
    return false;
  }, [data]);
  
  // Registrar un click
  const recordClick = useCallback(() => {
    const now = Date.now();
    const timeToClick = now - mountTime.current;
    
    setData(prev => {
      const newData = {
        clickCount: prev.clickCount + 1,
        lastClicked: now,
        avgTimeToClick: prev.avgTimeToClick === 0 
          ? timeToClick 
          : (prev.avgTimeToClick * prev.clickCount + timeToClick) / (prev.clickCount + 1),
        preferredItems: prev.preferredItems
      };
      
      // Guardar en sessionStorage
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(`menu_intel_${itemId}`, JSON.stringify(newData));
      }
      
      return newData;
    });
  }, [itemId]);
  
  // Obtener orden recomendado de items basado en uso
  const getRecommendedOrder = useCallback((items: any[]) => {
    const clickData: Record<string, number> = {};
    
    // Recopilar datos de clicks de todos los items
    items.forEach(item => {
      if (typeof window !== 'undefined' && item.href) {
        const stored = sessionStorage.getItem(`menu_intel_${item.href}`);
        if (stored) {
          const data = JSON.parse(stored);
          clickData[item.href] = data.clickCount;
        }
      }
    });
    
    // Ordenar items por frecuencia de uso
    return [...items].sort((a, b) => {
      const clicksA = clickData[a.href] || 0;
      const clicksB = clickData[b.href] || 0;
      return clicksB - clicksA;
    });
  }, []);
  
  // Determinar si debemos prefetch
  const shouldPrefetch = isFrequentlyUsed || predictedNextClick();
  
  // Analytics - enviar datos de uso (simulado)
  useEffect(() => {
    if (data.clickCount > 0 && data.clickCount % 5 === 0) {
      // Aquí enviarías analytics reales
      console.log('Menu Analytics:', {
        itemId,
        ...data
      });
    }
  }, [data.clickCount, itemId, data]);
  
  return {
    isFrequentlyUsed,
    predictedNextClick: predictedNextClick(),
    recordClick,
    getRecommendedOrder,
    shouldPrefetch
  };
};

/**
 * Hook para gestionar las preferencias visuales del usuario
 * Estilo Spotify/Netflix
 */
export const useMenuPreferences = () => {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    highContrast: false,
    compactMode: false,
    soundEnabled: false
  });
  
  useEffect(() => {
    // Detectar preferencias del sistema
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPreferences(prev => ({
        ...prev,
        reducedMotion: mediaQuery.matches
      }));
      
      const contrastQuery = window.matchMedia('(prefers-contrast: high)');
      setPreferences(prev => ({
        ...prev,
        highContrast: contrastQuery.matches
      }));
    }
  }, []);
  
  return preferences;
};