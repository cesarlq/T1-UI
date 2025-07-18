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
    
    const combinedTextFieldProps = {
        ...textFieldPropsRest,
        ...textFieldProps,
    };

    return (
        <div
            className={`${styles.container} ${className || ''}`}
            style={combinedTextFieldProps.fullWidth ? { width: '100%', ...style } : style}
            data-flex-direction={flexDirectionRow}
            data-disabled={combinedTextFieldProps.disabled}
        >
            {label && <span className={styles.label}>{label}</span>}
            
            <TextField
                {...combinedTextFieldProps}
                InputProps={{
                    ...combinedTextFieldProps.InputProps,
                    endAdornment: hasChange
                        ? <DirtyIndicator
                            data-select={combinedTextFieldProps.select}
                            className="data-[select=true]:mr-4" />
                        : combinedTextFieldProps.InputProps?.endAdornment
                }}
            >
                {combinedTextFieldProps.select && children}
            </TextField>
            
            <ErrorMessage
                text={errorMessage}
                className={`${styles['error-message']} ${combinedTextFieldProps.helperText && styles['error-with-helper']}`}
            />
        </div>
    );
}