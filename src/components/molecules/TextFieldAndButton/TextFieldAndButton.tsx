import { useRef, useCallback, useState } from 'react';
import Search from '@/assets/svg-icons/search-input.svg?react';
import styles from './TextFieldAndButton.module.scss';
import { TextFieldAndButtonI } from './TextFieldAndButton.types';


export default function TextFieldAndButton({
    className,
    textFieldClassName,
    onSubmit,
    textFieldProps
}: TextFieldAndButtonI) {

    // 🔥 SOLUCIÓN RADICAL: Usar input HTML nativo en lugar de Material-UI TextField
    const [searchValue, setSearchValue] = useState(() => {
        const initialValue = textFieldProps?.value as string || '';
        return initialValue;
    });
    
    // 🔥 Usar ref para onSubmit para evitar re-renders
    const onSubmitRef = useRef(onSubmit);
    onSubmitRef.current = onSubmit; // Actualizar directamente sin useEffect

    // Función estable para submit
    const handleFormSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        onSubmitRef.current({ search: searchValue });
    }, [searchValue]);

    // 🔥 Usar ref para textFieldProps.onChange para evitar re-renders
    const onChangeRef = useRef(textFieldProps?.onChange);
    onChangeRef.current = textFieldProps?.onChange; // Actualizar directamente sin useEffect

    // Handler para cambios en el input
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        // Llamar al onChange externo si existe
        onChangeRef.current?.(e);
    }, []);

    // 🔥 Extraer solo las props que sabemos que existen en TextFieldProps
    const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {};
    
    if (textFieldProps?.placeholder) inputProps.placeholder = textFieldProps.placeholder;
    if (textFieldProps?.disabled) inputProps.disabled = textFieldProps.disabled;
    if (textFieldProps?.autoComplete) inputProps.autoComplete = textFieldProps.autoComplete;
    if (textFieldProps?.autoFocus) inputProps.autoFocus = textFieldProps.autoFocus;
    if (textFieldProps?.name) inputProps.name = textFieldProps.name;
    if (textFieldProps?.id) inputProps.id = textFieldProps.id;
    if (textFieldProps?.required) inputProps.required = textFieldProps.required;

    return (
        <form
            className={`${styles['search-and-button']} ${className}`}
            onSubmit={handleFormSubmit}
        >
            <div className={`${styles.search} ${textFieldClassName}`}>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    enterKeyHint="search"
                    style={{
                        fontSize: '13px',
                        border: 'none',
                        outline: 'none',
                        background: 'transparent',
                        width: '100%',
                        padding: '8px 12px',
                    }}
                    {...inputProps}
                />
                <Search className={styles.search} height={14} width={14} />
            </div>
        </form>
    );
};
