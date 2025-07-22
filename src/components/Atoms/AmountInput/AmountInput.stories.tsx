// stories/AmountInput.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import {default as AmountInput} from './AmountInput'
import { Icons } from '../../..';

const meta: Meta<typeof AmountInput> = {
  title: 'atoms/AmountInput',
  component: AmountInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AmountInput>;

const Wrapper = (props: any) => {
  const methods = useForm({ defaultValues: { amount: '' } });

  return (
    <FormProvider {...methods}>
      <form>
        <AmountInput
          name="amount"
          control={methods.control}
          label="Monto"
          currency="$"
          {...props}
        />
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => <Wrapper />,
};

export const WithTooltip: Story = {
  render: () => (
    <Wrapper tooltip="Introduce el monto sin centavos" />
  ),
};

export const WithMinValue: Story = {
  render: () => (
    <Wrapper
      textFieldProps={{ placeholder: 'Mínimo $100' }}
      rules={{ min: 100 }}
    />
  ),
};
