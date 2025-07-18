// stories/CheckBox.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {CheckBox} from './'
import {Icons} from '../../../'

const meta: Meta<typeof CheckBox> = {
  title: 'atoms/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  render: () => <CheckBox />,
};

export const WithLabel: Story = {
  render: () => (
    <CheckBox>
      <span style={{ fontSize: '14px' }}>Aceptar términos y condiciones</span>
    </CheckBox>
  ),
};

export const Disbled: Story = {
  render: () => (
    <CheckBox
        disabled
    />
  ),
};

export const DisbledActive: Story = {
  render: () => (
    <CheckBox
        checked
        disabled
    />
  ),
};

export const CheckedByDefault: Story = {
  render: () => <CheckBox defaultChecked />,
};
