import styles from './DynamicSelector.module.scss';
import Arrow from '@/assets/svg-icons/arrow-select-store.svg?react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Checkbox, Radio } from '@mui/material';
import useOutsideClick from '@/hooks/useOutsideClick';
import { DynamicSelectorI } from './DynamicSelector.types';


export default function DynamicSelector({
    onChange,
    options,
    value,
    defaultLabel,
    onClear,
    typeAdornment,
    multiple,
    className,
    large,
    disabled,
    classNameButton
}: DynamicSelectorI) {

    const currentLabel = useMemo<string | number | undefined>(() => options.find(option => option.value === value)?.label || undefined, [value, options]);
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [multipleValues, setMultipleValues] = useState<Set<string | number>>(new Set);
    const ref = useRef(null);

    useEffect(() => {
        if (multiple && typeof (value) === 'object') {
            const tempMultipleValues = new Set<string | number>();
            if (value.length > 0) {
                for (const item of value) {
                    tempMultipleValues.add(item);
                }
            } else {
                tempMultipleValues.clear();
            }
            setMultipleValues(tempMultipleValues);
        }
    }, [value]); //eslint-disable-line

    useOutsideClick(ref, () => setOpenOptions(false));

    const handleOChange = (value: string | number) => {
        if (multiple) {
            const tempMultipleValues = new Set(multipleValues);
            if (tempMultipleValues.has(value)) {
                tempMultipleValues.delete(value);
            } else {
                tempMultipleValues.add(value);
            }
            setMultipleValues(tempMultipleValues);
            onChange(Array.from(tempMultipleValues) as string[] | number[]);
        } else {
            onChange(value);
            setOpenOptions(false);
        }
    };

    const handleOClear = () => {
        onClear();
        setOpenOptions(false);
    };

    return (
        <div
            className={`${styles['dynamic-selector']} ${classNameButton}`}
            data-large={large}
        >
            <button
                className={`${styles.button} ${classNameButton}`}
                disabled={disabled}
                onClick={() => setOpenOptions(true)}
            >
                {currentLabel || defaultLabel}
                <Arrow />
            </button>
            <section
                ref={ref}
                className={`${styles.options} ${className}`}
                data-open={openOptions}
                data-disabled={disabled}
            >
                {
                    options.map((option, index) => (
                        <span
                            key={index}
                            onClick={() => !disabled && handleOChange(option.value)}
                            className={styles.option}
                        >
                            {
                                typeAdornment === 'radio' ? <Radio
                                    checked={value === option.value}
                                /> : <Checkbox
                                    checked={multipleValues.has(option.value)}
                                />
                            }
                            {option.extraData}
                            {option.label}
                        </span>
                    ))
                }
                <button
                    className={styles['clear-button']}
                    onClick={handleOClear}
                    disabled={disabled}
                >
                    Limpiar
                </button>
            </section>
        </div>
    );
}