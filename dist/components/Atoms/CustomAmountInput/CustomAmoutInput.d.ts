import { CustomInputI } from '../../molecules/CustomInput/CustomInput';
import { FieldValues, UseControllerProps } from 'react-hook-form';
export interface CustomAmountInputI<T extends FieldValues> extends UseControllerProps<T> {
    currency?: string;
    format?: 'currency' | 'phone' | 'normal' | 'zip' | 'interbankKey' | 'CVV' | 'creditMaster' | 'creditAmex' | 'expireDate' | 'CVVAmex' | 'currencyWithoutPrefix';
    customInputProps: CustomInputI;
    startAdornmentCustom?: boolean;
}
export interface CustomNumericFormatPropsI {
    onChange: (event: {
        target: {
            name: string;
            value?: number | string;
        };
    }) => void;
    name: string;
}
export declare const CurrencyNumericFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CurrencyWithoutPrefixNumericFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const PhoneNumberFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const NormalNumberFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const ZipNumberFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const InterbankKeyFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CVVFormat: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CVVFormatForAmex: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CreditCardFormatMasterCard: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CreditCardFormatAmex: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const ExpireDateCreditCard: import('react').ForwardRefExoticComponent<CustomNumericFormatPropsI & import('react').RefAttributes<unknown>>;
export declare const CustomAmountInput: <T extends FieldValues>({ currency, format, customInputProps, ...other }: CustomAmountInputI<T>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CustomAmoutInput.d.ts.map