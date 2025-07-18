
import { forwardRef } from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { Icons } from "../../../index";
import { AmountInputI, NumericFormatProps } from './AmountInput.types';

import {
    FieldValues,
    useController,
} from 'react-hook-form';
import {
    InputAdornment,
    TextField,
    Tooltip,
} from '@mui/material';

export const CurrencyNumericFormat = forwardRef<unknown, NumericFormatProps>(
    function NumberFormatCustom(props, ref) {
        const { onChange, currency, min, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values: NumberFormatValues) => {
                    const value = values.floatValue !== undefined && min !== undefined
                        ? Math.max(values.floatValue, min)
                        : values.floatValue;

                    onChange({
                        target: {
                            name: props.name,
                            value: value,
                        },
                    });
                }}
                prefix={currency || currency === '' ? '' : '$'}
                thousandSeparator
                valueIsNumericString
                isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue === undefined || min === undefined || floatValue >= min;
                }}
            />
        );
    }
);

const AmountInput = <T extends FieldValues>({
    textFieldProps,
    currency,
    label,
    onChange,
    tooltip,
    ...other
}: AmountInputI<T>) => {
    const {
        field,
        fieldState: { error },
    } = useController(other);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <div style={{ fontSize: '12px', fontWeight: '400' }}>{label || ''}</div>
                {
                    tooltip &&
                    <Tooltip title={tooltip}>
                        <div style={{ width: '13px', cursor: 'pointer' }}>
                            <Icons.AlertIcon  width={13} height={13} />
                        </div>
                    </Tooltip>
                }
            </div>
            <TextField
                {...textFieldProps}
                {...field}
                InputProps={{
                    ...textFieldProps?.InputProps,
                    inputComponent: CurrencyNumericFormat as any,
                    startAdornment: currency ? (
                        <InputAdornment position="start">{currency}</InputAdornment>
                    ) : <></>,
                }}
                inputProps={{
                    ...textFieldProps?.inputProps,
                    currency,
                }}
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
            />
        </div>
    );
};


export default AmountInput;