import React from "react";
import styles from './CustomInput.module.scss';
import { TextField, TextFieldProps } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import DirtyIndicator from './dot-for-dirty-field-indicator.svg';

export interface CustomInputI {
    label?: string
    className?: string
    flexDirectionRow?: boolean
    textFieldProps: TextFieldProps
    children?: React.ReactNode
    style?: React.CSSProperties
    errorMessage?: string
    hasChange?: boolean
}

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
