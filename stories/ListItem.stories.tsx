import * as React from 'react'; 
import type { Meta, StoryObj } from '@storybook/preact-vite';
// Mock function for actions
const fn = () => console.log('action fired');
import { ListItem, ListItemProps } from '../components/ListItem';
import { IconButton } from '../components/IconButton';
import { AiOutlineUser, AiOutlineHeart, AiOutlineMore, AiOutlineDelete } from 'react-icons/ai';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    outlined: { control: 'boolean' },
  },
} satisfies Meta<ListItemProps>;

export default meta;
type Story = StoryObj<ListItemProps>;

export const Default: Story = {
  args: {
    label: 'List Item',
    description: 'This is a description for the list item',
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'John Doe',
    description: 'Software Engineer',
  },
  render: (args) => (
    <ListItem {...args} avatar={<AiOutlineUser size={24} />} />
  ),
};

export const WithAction: Story = {
  args: {
    label: 'Favorite Item',
    description: 'Click the heart to favorite this item',
  },
  render: (args) => (
    <ListItem 
      {...args} 
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineHeart />
        </IconButton>
      } 
    />
  ),
};

export const ComplexItem: Story = {
  args: {
    label: 'Jane Smith',
    description: 'Product Manager at Tech Corp',
  },
  render: (args) => (
    <ListItem 
      {...args} 
      avatar={<AiOutlineUser size={24} />}
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineMore />
        </IconButton>
      } 
    />
  ),
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Item',
    description: 'This entire item is clickable',
    onClick: fn,
  },
  render: (args) => (
    <ListItem {...args} avatar={<AiOutlineUser size={24} />} />
  ),
};

export const Outlined: Story = {
  args: {
    outlined: true,
    label: 'Outlined Item',
    description: 'This item has an outline',
  },
  render: (args) => (
    <ListItem 
      {...args} 
      avatar={<AiOutlineUser size={24} />}
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineDelete />
        </IconButton>
      } 
    />
  ),
};

export const LabelOnly: Story = {
  args: {
    label: 'Simple Label',
  },
};

export const DescriptionOnly: Story = {
  args: {
    description: 'Just a description without a label',
  },
};

export const ActionOnly: Story = {
  args: {},
  render: (args) => (
    <ListItem 
      {...args} 
      action={
        <IconButton size="small" onClick={fn}>
          <AiOutlineMore />
        </IconButton>
      } 
    />
  ),
};
