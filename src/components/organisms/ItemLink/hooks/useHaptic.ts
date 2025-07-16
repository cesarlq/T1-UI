import { useCallback } from 'react';

export const useHaptic = () => {
  const triggerHaptic = useCallback((pattern: number | number[] = 10) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  return { triggerHaptic };
};