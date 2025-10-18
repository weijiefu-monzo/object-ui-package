import * as React from 'react'; 
import type { Meta, StoryObj } from '@storybook/preact-vite';
import { useState } from 'preact/hooks';
// Mock function for actions
const fn = () => console.log('action fired');
import { Switch, SwitchProps } from './index';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
  },
  args: {
    onChange: fn,
  },
} satisfies Meta<SwitchProps>;

export default meta;
type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Interactive: Story = {
  args: {
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    
    return (
      <Switch
        checked={checked}
        onChange={(newChecked) => {
          setChecked(newChecked);
          args.onChange?.(newChecked);
        }}
      />
    );
  },
};
