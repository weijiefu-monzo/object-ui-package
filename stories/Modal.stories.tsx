import type { Meta, StoryObj } from '@storybook/preact-vite';
// Mock function for actions
const fn = () => console.log('action fired');
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';
import { Group } from '../components/Group';

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
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Default Modal',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={<p>This is the content of the modal. You can put any component here.</p>}
      actions={
        <Group>
          <Button onClick={fn()}>Cancel</Button>
          <Button color="primary" onClick={fn()}>Confirm</Button>
        </Group>
      }
    />
  ),
};

export const SimpleConfirmation: Story = {
  args: {
    isOpen: true,
    title: 'Delete Item',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={<p>Are you sure you want to delete this item? This action cannot be undone.</p>}
      actions={
        <Group>
          <Button onClick={fn()}>Cancel</Button>
          <Button signal="error" onClick={fn()}>Delete</Button>
        </Group>
      }
    />
  ),
};

export const FormModal: Story = {
  args: {
    isOpen: true,
    title: 'Create New Project',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label htmlFor="project-name">Project Name</label>
            <input
              id="project-name"
              type="text"
              placeholder="Enter project name"
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </div>
          <div>
            <label htmlFor="project-desc">Description</label>
            <textarea
              id="project-desc"
              placeholder="Enter project description"
              rows={3}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            />
          </div>
        </div>
      }
      actions={
        <Group>
          <Button onClick={fn()}>Cancel</Button>
          <Button color="primary" onClick={fn()}>Create Project</Button>
        </Group>
      }
    />
  ),
};

export const SingleAction: Story = {
  args: {
    isOpen: true,
    title: 'Success!',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={<p>Your changes have been saved successfully.</p>}
      actions={
        <Button color="primary" fullWidth onClick={fn()}>
          OK
        </Button>
      }
    />
  ),
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: 'Terms and Conditions',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      }
      actions={
        <Group>
          <Button onClick={fn()}>Decline</Button>
          <Button color="primary" onClick={fn()}>Accept</Button>
        </Group>
      }
    />
  ),
};

export const Closed: Story = {
  args: {
    isOpen: false,
    title: 'Closed Modal',
  },
  render: (args) => (
    <Modal 
      {...args}
      children={<p>This modal is closed and should not be visible.</p>}
      actions={
        <Button color="primary" onClick={fn()}>
          OK
        </Button>
      }
    />
  ),
};
