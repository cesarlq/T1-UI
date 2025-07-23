import styles from './CustomInput.module.scss';
import { TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import DirtyIndicator from '@/assets/svg-icons/dot-for-dirty-field-indicator.svg?react';
import { CustomInputI } from './CustomInput.types';

export default function CustomInput({
    label,
    textFieldProps,
    children,
    style,
    className,
    flexDirectionRow,
    errorMessage,
    hasChange,
    ...textFieldPropsRest
}: CustomInputI) {
    
    // Combinar props manejando eventos correctamente
    const combinedTextFieldProps = {
        ...textFieldPropsRest,
        ...textFieldProps,
    };

    // Manejar eventos de focus/blur para combinar handlers si existen múltiples
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        // Llamar el onFocus de textFieldPropsRest (register) si existe
        if (textFieldPropsRest.onFocus) {
            textFieldPropsRest.onFocus(event);
        }
        // Llamar el onFocus de textFieldProps (personalizado) si existe
        if (textFieldProps?.onFocus) {
            textFieldProps.onFocus(event);
        }
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        // Llamar el onBlur de textFieldPropsRest (register) si existe
        if (textFieldPropsRest.onBlur) {
            textFieldPropsRest.onBlur(event);
        }
        // Llamar el onBlur de textFieldProps (personalizado) si existe
        if (textFieldProps?.onBlur) {
            textFieldProps.onBlur(event);
        }
    };

    // Crear las props finales con los handlers combinados
    const finalTextFieldProps = {
        ...combinedTextFieldProps,
        onFocus: (textFieldPropsRest.onFocus || textFieldProps?.onFocus) ? handleFocus : undefined,
        onBlur: (textFieldPropsRest.onBlur || textFieldProps?.onBlur) ? handleBlur : undefined,
    };

    return (
        <div
            className={`${styles.container} ${className || ''}`}
            style={finalTextFieldProps.fullWidth ? { width: '100%', ...style } : style}
            data-flex-direction={flexDirectionRow}
            data-disabled={finalTextFieldProps.disabled}
        >
            {label && <span className={styles.label}>{label}</span>}
            
            <TextField
                {...finalTextFieldProps}
                InputProps={{
                    ...finalTextFieldProps.InputProps,
                    endAdornment: hasChange
                        ? <DirtyIndicator
                            data-select={finalTextFieldProps.select}
                            className="data-[select=true]:mr-4" />
                        : finalTextFieldProps.InputProps?.endAdornment
                }}
            >
                {finalTextFieldProps.select && children}
            </TextField>
            
            <ErrorMessage
                text={errorMessage}
                className={`${styles['error-message']} ${finalTextFieldProps.helperText && styles['error-with-helper']}`}
            />
        </div>
    );
}
