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
export declare const useMenuIntelligence: (itemId: string) => UseMenuIntelligenceReturn;
/**
 * Hook para gestionar las preferencias visuales del usuario
 * Estilo Spotify/Netflix
 */
export declare const useMenuPreferences: () => {
    reducedMotion: boolean;
    highContrast: boolean;
    compactMode: boolean;
    soundEnabled: boolean;
};
export {};
//# sourceMappingURL=useMenuIntelligence.d.ts.map