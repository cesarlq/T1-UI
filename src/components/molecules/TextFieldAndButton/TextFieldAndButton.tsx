import { TextField } from '@mui/material';
import  { useEffect } from 'react';
import Search from '@/assets/svg-icons/search-input.svg?react';
import styles from './TextFieldAndButton.module.scss';
import { useForm } from 'react-hook-form';
import { TextFieldAndButtonI } from './TextFieldAndButton.types';

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
                    endAdornment: <Search className={styles.search} />,
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