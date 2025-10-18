import * as React from 'react'; 
import type { Meta, StoryObj } from '@storybook/preact-vite';
// Mock function for actions
const fn = () => console.log('action fired');
import { Modal, ModalProps } from './index';
import { Button } from '../Button';
import { Group } from '../Group';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
  },
  args: {
    onClose: fn,
  },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    title: 'Default Modal',
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: '24px', height: '640px' }}>
        <Button color="primary" onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal 
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          children={<p>This is the content of the modal. You can put any component here.</p>}
          actions={
            <Group fullWidth>
              <Button fullWidth onClick={() => setOpen(false)}>Cancel</Button>
              <Button fullWidth color="primary" onClick={fn}>Confirm</Button>
            </Group>
          }
        />
      </div>
    );
  },
};

