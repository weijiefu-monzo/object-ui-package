import * as React from 'react'; 
import type { Meta, StoryObj } from '@storybook/preact-vite';
import { ComponentChildren } from 'preact';
import { Page, PageProps } from '../components/Page';
import { Button } from '../components/Button';
import { Group } from '../components/Group';
import { ListItem } from '../components/ListItem';
// Mock function for actions
const fn = () => console.log('action fired');
import { AiOutlineUser } from 'react-icons/ai';

const meta = {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Page {...args}>
      <div style={{ padding: '24px' }}>
        <h1>Welcome to the Page Component</h1>
        <p>This is the basic page wrapper component.</p>
      </div>
    </Page>
  ),
};

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <Page {...args}>
      <div style={{ padding: '24px' }}>
        <h1>Dashboard</h1>
        <p>Manage your projects and settings from here.</p>
        
        <Group>
          <Button color="primary" onClick={fn}>
            New Project
          </Button>
          <Button onClick={fn}>
            Settings
          </Button>
        </Group>

        <div style={{ marginTop: '32px' }}>
          <h2>Recent Projects</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <ListItem
              avatar={<AiOutlineUser />}
              label="Project Alpha"
              description="A web application project"
              onClick={fn}
            />
            <ListItem
              avatar={<AiOutlineUser />}
              label="Project Beta"
              description="Mobile app development"
              onClick={fn}
            />
            <ListItem
              avatar={<AiOutlineUser />}
              label="Project Gamma"
              description="Data analysis dashboard"
              onClick={fn}
            />
          </ul>
        </div>
      </div>
    </Page>
  ),
};

export const Empty: Story = {
  args: {
    children: undefined as ComponentChildren,
  },
};
