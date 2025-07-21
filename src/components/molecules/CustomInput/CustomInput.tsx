import React from "react";
import styles from './CustomInput.module.scss';
import { TextField, TextFieldProps } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
// Inline SVG as data URL to avoid build issues
const DirtyIndicatorSrc = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill='none'%3e%3ccircle cx='12.416' cy='12.5' r='6' fill='%232180FF'/%3e%3c/svg%3e";

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
                        ? <img
                            src={DirtyIndicatorSrc}
                            alt="Dirty indicator"
                            data-select={textFieldProps.select}
                            className="data-[select=true]:mr-4"
                            style={{ width: '16px', height: '16px' }} />
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
