import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseNavigationProps {
  dispatch: any;
  concatStoreId?: boolean;
  currentUserId?: string | number;
  setActiveSubPath: (path: string) => void;
  onNavigate?: (path: string) => void;
  mobile?: boolean;
  onToggleOpen?: (open: boolean) => void;
  triggerHaptic: (pattern: number | number[]) => void;
}

export const useNavigation = ({
  dispatch,
  concatStoreId,
  currentUserId,
  setActiveSubPath,
  onNavigate,
  mobile,
  onToggleOpen,
  triggerHaptic
}: UseNavigationProps) => {
  const navigate = useNavigate();
  const navigationTimeoutRef = useRef<NodeJS.Timeout>();
  const progressIntervalRef = useRef<NodeJS.Timeout>();
  const isNavigationCancelledRef = useRef(false);

  const cleanupNavigation = useCallback(() => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
      navigationTimeoutRef.current = undefined;
    }
    if (progressIntervalRef.current) {
      clearTimeout(progressIntervalRef.current);
      progressIntervalRef.current = undefined;
    }
    isNavigationCancelledRef.current = true;
  }, []);

  const handleNavigation = useCallback(async (targetHref: string) => {
    cleanupNavigation();
    isNavigationCancelledRef.current = false;
    
    dispatch({ type: 'SET_NAVIGATING', payload: true });
    dispatch({ type: 'SET_PROGRESS', payload: 0 });
    
    let finalHref = targetHref;
    
    if (concatStoreId && currentUserId) {
      finalHref = targetHref + currentUserId;
    }
    
    try {
      triggerHaptic([10, 20, 10]);
      
      // Progress animation
      let progress = 0;
      const startTime = Date.now();
      const duration = 800;
      
      const updateProgress = () => {
        if (isNavigationCancelledRef.current) return;
        
        const elapsed = Date.now() - startTime;
        progress = Math.min((elapsed / duration) * 100, 90);
        dispatch({ type: 'SET_PROGRESS', payload: progress });
        
        if (progress < 90 && !isNavigationCancelledRef.current) {
          progressIntervalRef.current = setTimeout(updateProgress, 16);
        }
      };
      
      updateProgress();

      await new Promise(resolve => {
        navigationTimeoutRef.current = setTimeout(resolve, 150);
      });
      
      if (isNavigationCancelledRef.current) return;

      navigate(finalHref);
      
      if (isNavigationCancelledRef.current) return;
      
      dispatch({ type: 'SET_PROGRESS', payload: 100 });
      
      setActiveSubPath(finalHref);
      if (onNavigate) onNavigate(finalHref);
      
      triggerHaptic([10, 50]);
      
      if (mobile && onToggleOpen) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            onToggleOpen(false);
          });
        });
      }
      
      return true; // Navigation success
    } catch (error) {
      if (!isNavigationCancelledRef.current) {
        console.error('Error en navegación:', error);
        triggerHaptic([100, 50, 100]);
      }
      return false;
    } finally {
      if (!isNavigationCancelledRef.current) {
        setTimeout(() => {
          dispatch({ type: 'SET_NAVIGATING', payload: false });
          dispatch({ type: 'SET_PROGRESS', payload: 0 });
        }, 300);
      }
    }
  }, [cleanupNavigation, dispatch, concatStoreId, currentUserId, navigate, setActiveSubPath, onNavigate, triggerHaptic, mobile, onToggleOpen]);

  return {
    handleNavigation,
    cleanupNavigation
  };
};


