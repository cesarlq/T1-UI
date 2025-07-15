// utils/router-adapter.ts
import { useEffect, useState } from 'react';

interface UniversalRouter {
  push: (url: string) => Promise<boolean> | void;
  pathname: string;
  isReady: boolean;
}

/**
 * Hook que proporciona una interfaz unificada para trabajar con
 * Next.js Page Router y App Router
 */
export function useUniversalRouter(): UniversalRouter {
  const [router, setRouter] = useState<UniversalRouter>({
    push: () => {},
    pathname: '/',
    isReady: false,
  });

  useEffect(() => {
    let mounted = true;

    const initializeRouter = async () => {
      try {
        // Detectar si estamos en App Router
        if (typeof window !== 'undefined' && 'next' in window) {
          // Intentar App Router primero
          try {
            const { useRouter, usePathname } = await import('next/navigation');
            
            if (mounted) {
              const appRouter = useRouter();
              const pathname = usePathname();
              
              setRouter({
                push: appRouter.push,
                pathname: pathname || '/',
                isReady: true,
              });
            }
            return;
          } catch (e) {
          }
        }

        // Intentar Page Router
        const { useRouter } = await import('next/router');
        const pageRouter = useRouter();
        
        if (mounted) {
          setRouter({
            push: pageRouter.push,
            pathname: pageRouter.pathname || '/',
            isReady: pageRouter.isReady,
          });
        }
      } catch (error) {
        console.error('Error inicializando router:', error);
        // Mantener valores por defecto
      }
    };

    initializeRouter();

    return () => {
      mounted = false;
    };
  }, []);

  return router;
}

/**
 * Versión síncrona usando detección en tiempo de compilación
 */
let cachedRouterType: 'app' | 'page' | null = null;

export function useSmartRouter() {
  // Detectar tipo de router una sola vez
  if (cachedRouterType === null) {
    try {
      require('next/navigation');
      cachedRouterType = 'app';
    } catch {
      try {
        require('next/router');
        cachedRouterType = 'page';
      } catch {
        cachedRouterType = null;
      }
    }
  }

  // App Router
  if (cachedRouterType === 'app') {
    try {
      const { useRouter, usePathname } = require('next/navigation');
      const router = useRouter();
      const pathname = usePathname();
      
      return {
        push: router.push,
        pathname: pathname || '/',
        isReady: true,
        type: 'app' as const,
      };
    } catch (e) {
      // Fallback
    }
  }

  // Page Router
  if (cachedRouterType === 'page') {
    try {
      const { useRouter } = require('next/router');
      const router = useRouter();
      
      return {
        push: router.push,
        pathname: router.pathname || '/',
        isReady: router.isReady,
        type: 'page' as const,
      };
    } catch (e) {
      // Fallback
    }
  }

  // Fallback
  return {
    push: (url: string) => {
      if (typeof window !== 'undefined') {
        window.location.href = url;
      }
    },
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
    isReady: true,
    type: 'fallback' as const,
  };
}