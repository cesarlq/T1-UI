import { TextField, TextFieldProps } from '@mui/material';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Search from '../../assets/search-input.svg';
import styles from '../../styles/common/TextFieldAndButton.module.scss';
import { useForm } from 'react-hook-form';

export interface TextFieldAndButtonI {
    className?: string
    textFieldClassName?: string
    buttonClassName?: string
    onSubmit: (data: { search: string }) => void
    textFieldProps?: TextFieldProps
}

export default function TextFieldAndButton({
    className,
    textFieldClassName,
    onSubmit,
    textFieldProps
}: TextFieldAndButtonI) {

    const { register, handleSubmit, setValue } = useForm<{ search: string }>();

    const submit = (data: { search: string }) => {
        onSubmit(data);
    };

    useEffect(() => {
        if (textFieldProps && (textFieldProps.value !== undefined || textFieldProps.value !== null)) {
            setValue('search', textFieldProps.value as string);
        }
    }, [textFieldProps?.value]);//eslint-disable-line

    return (
        <form
            className={`${styles['search-and-button']} ${className}`}
            onSubmit={handleSubmit(submit)}
        >
            <TextField
                InputProps={{
                    className: styles.search,
                    endAdornment: <Search className={styles.search} height={14} width={14}/>,
                    sx: {
                        ".MuiInputBase-input": {
                            fontSize: '13px',
                        }
                    }
                }}
                inputProps={{
                    enterKeyHint: 'search',
                }}
                className={textFieldClassName}
                {...textFieldProps}
                {...register('search', { onChange: event => textFieldProps?.onChange?.(event) })}
            />
        </form>
    );
};