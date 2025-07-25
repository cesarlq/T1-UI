export interface RestrictedAccessProps {
    /**
     * Title text for the restricted access page
     * @default "Acceso restringido"
     */
    title?: string;
    /**
     * Main description text
     * @default "Tu rol actual no permite acceder a este módulo."
     */
    description?: string;
    /**
     * Instructions text for requesting permissions
     * @default "Solicita al propietario de la tienda que te otorgue permisos en"
     */
    instructionsText?: string;
    /**
     * Path text showing where to request permissions
     * @default "Perfil > Gestionar cuenta > Roles y permisos"
     */
    permissionsPath?: string;
    /**
     * Button text for returning to home
     * @default "Volver al inicio"
     */
    buttonText?: string;
    /**
     * Callback function when the return button is clicked
     */
    onReturnHome?: () => void;
    /**
     * Custom styling for the container
     */
    sx?: React.CSSProperties;
    /**
     * Custom class name for styling
     */
    className?: string;
}
//# sourceMappingURL=RestrictedAccess.types.d.ts.map