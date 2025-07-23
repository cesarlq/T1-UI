import { default as React } from '../../../../node_modules/react';
import { FormRadioProps, RadioGroupProps, RadioProps } from './Radio.types';

export declare const DESIGN_TOKENS: {
    readonly colors: {
        readonly checked: "#EF4444";
        readonly unchecked: "#E5E7EB";
        readonly hover: "#FCA5A5";
        readonly disabled: "#F3F4F6";
        readonly focusRing: "rgba(239, 68, 68, 0.2)";
    };
    readonly sizes: {
        readonly small: {
            readonly radio: 16;
            readonly dot: 8;
        };
        readonly medium: {
            readonly radio: 20;
            readonly dot: 10;
        };
        readonly large: {
            readonly radio: 24;
            readonly dot: 12;
        };
    };
    readonly animation: {
        readonly duration: "150ms";
        readonly easing: "cubic-bezier(0.4, 0, 0.2, 1)";
    };
};
/**
 * Radio Component
 *
 * Radio button personalizado con diseño consistente.
 *
 * @example
 * ```tsx
 * <Radio
 *   value="option1"
 *   checked={selected === 'option1'}
 *   onChange={handleChange}
 *   ariaLabel="Opción 1"
 * />
 * ```
 */
export declare const Radio: React.ForwardRefExoticComponent<Omit<RadioProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
/**
 * RadioGroup Component
 *
 * Agrupa múltiples Radio buttons con manejo de estado.
 *
 * @example
 * ```tsx
 * <RadioGroup value={value} onValueChange={setValue}>
 *   <FormRadio value="1" label="Opción 1" />
 *   <FormRadio value="2" label="Opción 2" />
 * </RadioGroup>
 * ```
 */
export declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * FormRadio Component
 *
 * Radio con label integrado para formularios.
 *
 * @example
 * ```tsx
 * <FormRadio
 *   value="option1"
 *   label="Primera opción"
 *   checked={selected === 'option1'}
 *   onChange={handleChange}
 * />
 * ```
 */
export declare const FormRadio: React.ForwardRefExoticComponent<Omit<FormRadioProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Radio.d.ts.map