import * as React from 'react'; 
import type { Meta, StoryObj } from '@storybook/preact-vite';
// Mock function for actions
const fn = () => console.log('action fired');
import { IconButton, IconButtonProps } from '../components/IconButton';
import { AiOutlineHeart, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    signal: {
      control: { type: 'select' },
      options: ['disabled', 'success', 'warning', 'error'],
    },
    fullWidth: { control: 'boolean' },
  },
  args: { onClick: fn },
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<IconButtonProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineHeart />
    </IconButton>
  ),
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlinePlus />
    </IconButton>
  ),
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Success: Story = {
  args: {
    signal: 'success',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlinePlus />
    </IconButton>
  ),
};

export const Warning: Story = {
  args: {
    signal: 'warning',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Error: Story = {
  args: {
    signal: 'error',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineClose />
    </IconButton>
  ),
};

export const Disabled: Story = {
  args: {
    signal: 'disabled',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineHeart />
    </IconButton>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => (
    <IconButton {...args}>
      <AiOutlineHeart />
    </IconButton>
  ),
};
