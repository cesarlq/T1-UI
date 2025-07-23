import { FormSwitchProps, SwitchProps } from './Switch.types';

/**
 * Switch Component
 *
 * Un componente switch accesible y personalizable basado en MUI.
 * Sigue las guías WCAG 2.1 AA para accesibilidad.
 *
 * @example
 * ```tsx
 * <Switch
 *   checked={isEnabled}
 *   onValueChange={setIsEnabled}
 *   ariaLabel="Habilitar notificaciones"
 * />
 * ```
 */
export declare const Switch: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
/**
 * FormSwitch Component
 *
 * Switch con label integrado para formularios.
 *
 * @example
 * ```tsx
 * <FormSwitch
 *   label="Activar notificaciones"
 *   checked={notifications}
 *   onValueChange={setNotifications}
 * />
 * ```
 */
export declare const FormSwitch: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<FormSwitchProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Switch.d.ts.map