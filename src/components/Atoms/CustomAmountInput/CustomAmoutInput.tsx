import CustomInput, { CustomInputI } from '@/components/molecules/CustomInput/CustomInput';
import { InputAdornment } from '@mui/material';
import { forwardRef } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';

// Define interfaces directly in this file for better TypeScript support
export interface CustomAmountInputI<T extends FieldValues>
    extends UseControllerProps<T> {
    currency?: string;
    format?: 'currency' | 'phone' | 'normal' | 'zip' | 'interbankKey' | 'CVV' | 'creditMaster' | 'creditAmex' | 'expireDate' | 'CVVAmex' | 'currencyWithoutPrefix'
    customInputProps: CustomInputI
    startAdornmentCustom?: boolean
}

export interface CustomNumericFormatPropsI {
    onChange: (event: { target: { name: string; value?: number | string } }) => void;
    name: string;
}


export const CurrencyNumericFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                prefix='$'
                thousandSeparator
                valueIsNumericString
            />
        );
    }
);

export const CurrencyWithoutPrefixNumericFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                thousandSeparator
                valueIsNumericString
            />
        );
    }
);

export const PhoneNumberFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                allowLeadingZeros
                maxLength={10}
            />
        );
    }
);

export const NormalNumberFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
            />
        );
    }
);

export const ZipNumberFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                allowLeadingZeros
                maxLength={5}
            />
        );
    }
);

export const InterbankKeyFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                maxLength={18}
            />
        );
    }
);

export const CVVFormat = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                allowLeadingZeros
                maxLength={3}
            />
        );
    }
);

export const CVVFormatForAmex = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                allowLeadingZeros
                maxLength={4}
            />
        );
    }
);

export const CreditCardFormatMasterCard = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumericFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                valueIsNumericString
                maxLength={16}
            />
        );
    }
);

export const CreditCardFormatAmex = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <PatternFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.value || '',
                        },
                    });
                }}
                format='#### ###### ######'
            />
        );
    }
);

export const ExpireDateCreditCard = forwardRef<unknown, CustomNumericFormatPropsI>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <PatternFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: values.formattedValue || '',
                        },
                    });
                }}
                format='##/##'
            />
        );
    }
);

export const CustomAmountInput = <T extends FieldValues>({ currency, format = 'currency', customInputProps, ...other }: CustomAmountInputI<T>) => {

    const { field, fieldState: { error } } = useController(other);

    return (
        <CustomInput
            {...customInputProps}
            textFieldProps={{
                ...customInputProps.textFieldProps,
                ...field,
                InputProps: {
                    ...customInputProps.textFieldProps?.InputProps,
                    inputComponent: format === 'currency' ?
                        CurrencyNumericFormat : format === 'phone' ?
                            PhoneNumberFormat : format === 'normal' ?
                                NormalNumberFormat : format === 'zip' ?
                                    ZipNumberFormat : format === 'interbankKey' ?
                                        InterbankKeyFormat : format === 'CVV' ?
                                            CVVFormat : format === 'CVVAmex' ?
                                                CVVFormatForAmex : format === 'creditMaster' ?
                                                    CreditCardFormatMasterCard : format === 'creditAmex' ?
                                                        CreditCardFormatAmex : format === 'currencyWithoutPrefix' ?
                                                            CurrencyWithoutPrefixNumericFormat : format === 'expireDate' && ExpireDateCreditCard as any,
                    startAdornment: other.startAdornmentCustom ? customInputProps.textFieldProps.InputProps?.startAdornment : currency ? (
                        <InputAdornment position="start">{currency}</InputAdornment>
                    ) : <></>,
                },
                helperText: customInputProps.textFieldProps?.helperText !== undefined ? customInputProps.textFieldProps.helperText : error && error.message,
                error: customInputProps.textFieldProps?.error !== undefined ? customInputProps.textFieldProps?.error : Boolean(error)
            }}
        />
    );
};
