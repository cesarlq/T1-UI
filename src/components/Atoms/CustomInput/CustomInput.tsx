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
    hasChange
}: CustomInputI) {
    return (
        <div
            className={`${styles.container} ${textFieldProps.className} ${className}`}
            style={textFieldProps.fullWidth ? { width: '100%', ...style } : style}
            data-flex-direction={flexDirectionRow}
            data-disabled={textFieldProps.disabled}
        >
            {
                label && <span className={styles.label}>{label}</span>
            }
            <TextField
                {...textFieldProps}
                InputProps={{
                    ...textFieldProps.InputProps,
                    endAdornment: hasChange
                        ? <DirtyIndicator
                            data-select={textFieldProps.select}
                            className="data-[select=true]:mr-4" />
                        :textFieldProps.InputProps?.endAdornment
                }}
            >
                {
                    textFieldProps.select && children
                }
            </TextField>
            <ErrorMessage
                text={errorMessage}
                className={`${styles['error-message']} ${textFieldProps.helperText && styles['error-with-helper']}`}
            />
        </div>
    );
}
