import type { Meta, StoryObj } from '@storybook/react';
import ApiTestingPlatform from '../pages/ApiTestingPlatform';

const meta: Meta<typeof ApiTestingPlatform> = {
  title: 'Pages/ApiTestingPlatform',
  component: ApiTestingPlatform,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'AI-Powered API Testing Platform landing page with interactive features, animated demos, and comprehensive sections.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ApiTestingPlatform />,
  parameters: {
    docs: {
      description: {
        story: 'Complete landing page for the AI-powered API testing platform.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => <ApiTestingPlatform />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive version with animated mock API test runner and sandbox demo.',
      },
    },
  },
};