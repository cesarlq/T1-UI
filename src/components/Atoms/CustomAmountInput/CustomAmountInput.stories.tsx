import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CustomAmountInput } from './CustomAmoutInput';
import { Box, Stack, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof CustomAmountInput> = {
  title: 'atoms/CustomAmountInput',
  component: CustomAmountInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          A specialized input component for handling various numeric formats with react-hook-form integration:
          
          - Currency formatting with prefix ($)
          - Phone number formatting
          - Credit card number formatting (MasterCard/Visa and Amex)
          - CVV formatting (3 or 4 digits)
          - ZIP code formatting
          - Interbank key formatting
          - Expiration date formatting
          - Normal number formatting
          - Built-in validation and error handling
        `
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: 4, maxWidth: '500px', width: '100%' }}>
        <Story />
      </Box>
    )
  ],
  argTypes: {
    format: {
      control: { 
        type: 'select', 
        options: [
          'currency', 
          'currencyWithoutPrefix',
          'phone', 
          'normal', 
          'zip', 
          'interbankKey', 
          'CVV', 
          'CVVAmex',
          'creditMaster', 
          'creditAmex', 
          'expireDate'
        ] 
      },
      description: 'Format type for the numeric input'
    },
    currency: {
      control: 'text',
      description: 'Currency symbol to display (when not using format-specific prefixes)'
    },
    startAdornmentCustom: {
      control: 'boolean',
      description: 'Whether to use custom start adornment instead of currency'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic currency input
export const Currency: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        amount: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="amount"
        control={control}
        format="currency"
        customInputProps={{
          label: 'Amount',
          textFieldProps: {
            placeholder: 'Enter amount',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Currency without prefix
export const CurrencyWithoutPrefix: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        amount: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="amount"
        control={control}
        format="currencyWithoutPrefix"
        customInputProps={{
          label: 'Amount (No Prefix)',
          textFieldProps: {
            placeholder: 'Enter amount',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Phone number input
export const PhoneNumber: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        phone: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="phone"
        control={control}
        format="phone"
        customInputProps={{
          label: 'Phone Number',
          textFieldProps: {
            placeholder: 'Enter phone number',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// ZIP code input
export const ZipCode: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        zip: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="zip"
        control={control}
        format="zip"
        customInputProps={{
          label: 'ZIP Code',
          textFieldProps: {
            placeholder: 'Enter ZIP code',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Credit card number (MasterCard/Visa)
export const CreditCardMaster: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        cardNumber: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="cardNumber"
        control={control}
        format="creditMaster"
        customInputProps={{
          label: 'Credit Card Number (MasterCard/Visa)',
          textFieldProps: {
            placeholder: 'Enter card number',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Credit card number (Amex)
export const CreditCardAmex: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        cardNumber: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="cardNumber"
        control={control}
        format="creditAmex"
        customInputProps={{
          label: 'Credit Card Number (Amex)',
          textFieldProps: {
            placeholder: 'Enter Amex card number',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// CVV input
export const CVV: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        cvv: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="cvv"
        control={control}
        format="CVV"
        customInputProps={{
          label: 'CVV',
          textFieldProps: {
            placeholder: 'Enter CVV',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// CVV Amex input
export const CVVAmex: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        cvv: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="cvv"
        control={control}
        format="CVVAmex"
        customInputProps={{
          label: 'CVV (Amex)',
          textFieldProps: {
            placeholder: 'Enter CVV',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Expiration date input
export const ExpirationDate: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        expireDate: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="expireDate"
        control={control}
        format="expireDate"
        customInputProps={{
          label: 'Expiration Date',
          textFieldProps: {
            placeholder: 'MM/YY',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Interbank key input
export const InterbankKey: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        interbankKey: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="interbankKey"
        control={control}
        format="interbankKey"
        customInputProps={{
          label: 'Interbank Key',
          textFieldProps: {
            placeholder: 'Enter interbank key',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// Normal number input
export const NormalNumber: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        number: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="number"
        control={control}
        format="normal"
        customInputProps={{
          label: 'Number',
          textFieldProps: {
            placeholder: 'Enter number',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// With custom currency symbol
export const CustomCurrency: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        amount: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="amount"
        control={control}
        format="currencyWithoutPrefix"
        currency="€"
        customInputProps={{
          label: 'Amount in Euros',
          textFieldProps: {
            placeholder: 'Enter amount',
            fullWidth: true,
            variant: 'outlined'
          }
        }}
      />
    );
  }
};

// With validation and error handling
export const WithValidation: Story = {
  render: () => {
    const { control, formState: { errors } } = useForm({
      defaultValues: {
        amount: ''
      }
    });
    
    return (
      <CustomAmountInput
        name="amount"
        control={control}
        format="currency"
        rules={{
          required: 'Amount is required',
          validate: (value) => {
            const numValue = parseFloat(value);
            if (numValue <= 0) return 'Amount must be greater than 0';
            if (numValue > 10000) return 'Amount cannot exceed $10,000';
            return true;
          }
        }}
        customInputProps={{
          label: 'Amount *',
          textFieldProps: {
            placeholder: 'Enter amount',
            fullWidth: true,
            variant: 'outlined',
            error: !!errors.amount,
            helperText: errors.amount?.message
          }
        }}
      />
    );
  }
};

// Credit card form example
export const CreditCardForm: Story = {
  render: () => {
    const { control, formState: { errors } } = useForm({
      defaultValues: {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: ''
      }
    });
    
    return (
      <Stack spacing={3}>
        <Typography variant="h6">Credit Card Payment Form</Typography>
        
        <CustomAmountInput
          name="amount"
          control={control}
          format="currency"
          rules={{ required: 'Amount is required' }}
          customInputProps={{
            label: 'Amount *',
            textFieldProps: {
              placeholder: 'Enter amount',
              fullWidth: true,
              variant: 'outlined'
            }
          }}
        />
        
        <CustomAmountInput
          name="cardNumber"
          control={control}
          format="creditMaster"
          rules={{ required: 'Card number is required' }}
          customInputProps={{
            label: 'Card Number *',
            textFieldProps: {
              placeholder: 'Enter card number',
              fullWidth: true,
              variant: 'outlined'
            }
          }}
        />
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CustomAmountInput
            name="expiryDate"
            control={control}
            format="expireDate"
            rules={{ required: 'Expiry date is required' }}
            customInputProps={{
              label: 'Expiry Date *',
              textFieldProps: {
                placeholder: 'MM/YY',
                variant: 'outlined'
              }
            }}
          />
          
          <CustomAmountInput
            name="cvv"
            control={control}
            format="CVV"
            rules={{ required: 'CVV is required' }}
            customInputProps={{
              label: 'CVV *',
              textFieldProps: {
                placeholder: 'CVV',
                variant: 'outlined'
              }
            }}
          />
        </Box>
      </Stack>
    );
  }
};

// All formats showcase
export const AllFormats: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        currency: '',
        currencyNoPrefix: '',
        phone: '',
        zip: '',
        normal: '',
        interbankKey: '',
        cvv: '',
        cvvAmex: '',
        creditMaster: '',
        creditAmex: '',
        expireDate: ''
      }
    });
    
    return (
      <Stack spacing={3}>
        <Typography variant="h6">All Format Types</Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 2 }}>
          <CustomAmountInput
            name="currency"
            control={control}
            format="currency"
            customInputProps={{
              label: 'Currency',
              textFieldProps: {
                placeholder: '$0.00',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="currencyNoPrefix"
            control={control}
            format="currencyWithoutPrefix"
            customInputProps={{
              label: 'Currency (No Prefix)',
              textFieldProps: {
                placeholder: '0.00',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="phone"
            control={control}
            format="phone"
            customInputProps={{
              label: 'Phone',
              textFieldProps: {
                placeholder: 'Phone number',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="zip"
            control={control}
            format="zip"
            customInputProps={{
              label: 'ZIP Code',
              textFieldProps: {
                placeholder: '12345',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="normal"
            control={control}
            format="normal"
            customInputProps={{
              label: 'Normal Number',
              textFieldProps: {
                placeholder: 'Number',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="interbankKey"
            control={control}
            format="interbankKey"
            customInputProps={{
              label: 'Interbank Key',
              textFieldProps: {
                placeholder: 'Key',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="cvv"
            control={control}
            format="CVV"
            customInputProps={{
              label: 'CVV',
              textFieldProps: {
                placeholder: '123',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="cvvAmex"
            control={control}
            format="CVVAmex"
            customInputProps={{
              label: 'CVV Amex',
              textFieldProps: {
                placeholder: '1234',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="creditMaster"
            control={control}
            format="creditMaster"
            customInputProps={{
              label: 'Credit Card',
              textFieldProps: {
                placeholder: 'Card number',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="creditAmex"
            control={control}
            format="creditAmex"
            customInputProps={{
              label: 'Amex Card',
              textFieldProps: {
                placeholder: 'Amex number',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
          
          <CustomAmountInput
            name="expireDate"
            control={control}
            format="expireDate"
            customInputProps={{
              label: 'Expire Date',
              textFieldProps: {
                placeholder: 'MM/YY',
                variant: 'outlined',
                size: 'small'
              }
            }}
          />
        </Box>
      </Stack>
    );
  }
};
