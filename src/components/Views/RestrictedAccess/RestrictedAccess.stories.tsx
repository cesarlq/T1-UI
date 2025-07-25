import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RestrictedAccess from './RestrictedAccess';

const meta: Meta<typeof RestrictedAccess> = {
  title: 'views/RestrictedAccess',
  component: RestrictedAccess,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A view component that displays when a user does not have permission to access a specific module or page. It includes a lock icon, descriptive text, and a return button.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the restricted access page',
    },
    description: {
      control: 'text',
      description: 'Main description text explaining the restriction',
    },
    instructionsText: {
      control: 'text',
      description: 'Instructions text for requesting permissions',
    },
    permissionsPath: {
      control: 'text',
      description: 'Path text showing where to request permissions',
    },
    buttonText: {
      control: 'text',
      description: 'Button text for returning to home',
    },
    onReturnHome: {
      action: 'return-home-clicked',
      description: 'Callback function when the return button is clicked',
    },
    sx: {
      control: 'object',
      description: 'Custom styling for the container',
    },
    className: {
      control: 'text',
      description: 'Custom class name for styling',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    onReturnHome: action('return-home-clicked'),
  },
};

// Story with custom text
export const CustomText: Story = {
  args: {
    title: "Access Denied",
    description: "You don't have permission to view this content.",
    instructionsText: "Please contact your administrator to request access via",
    permissionsPath: "Settings > User Management > Permissions",
    buttonText: "Go Back",
    onReturnHome: action('go-back-clicked'),
  },
};

// Story with custom icon
export const CustomIcon: Story = {
  args: {
    title: "Module Unavailable",
    description: "This module is currently under maintenance.",
    instructionsText: "Please try again later or contact support if the issue persists.",
    permissionsPath: "",
    buttonText: "Return to Dashboard",
    onReturnHome: action('return-to-dashboard-clicked'),
  },
};

// Story with custom styling
export const CustomStyling: Story = {
  args: {
    title: "Premium Feature",
    description: "This feature is only available for premium users.",
    instructionsText: "Upgrade your account to access this feature.",
    permissionsPath: "Account > Billing > Upgrade Plan",
    buttonText: "View Plans",
    onReturnHome: action('view-plans-clicked'),
    sx: {
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid #e9ecef',
      minHeight: '50vh',
    },
  },
};

// Story with minimal content
export const Minimal: Story = {
  args: {
    title: "Restricted",
    description: "Access denied.",
    instructionsText: "",
    permissionsPath: "",
    buttonText: "Back",
    onReturnHome: action('back-clicked'),
  },
};

// Story for mobile view
export const Mobile: Story = {
  args: {
    onReturnHome: action('return-home-clicked'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Story with long text to test responsive behavior
export const LongText: Story = {
  args: {
    title: "Access to Advanced Analytics Module Restricted",
    description: "Your current user role and permissions do not allow access to the advanced analytics and reporting module. This module contains sensitive business intelligence data and requires elevated privileges.",
    instructionsText: "To request access to this module, please contact your system administrator or account owner. They can grant you the necessary permissions through the user management interface located at:",
    permissionsPath: "User Profile > Account Management > User Roles and Permissions > Advanced Module Access",
    buttonText: "Return to Main Dashboard",
    onReturnHome: action('return-to-main-dashboard-clicked'),
  },
};

// Story without callback (shows console log)
export const WithoutCallback: Story = {
  args: {
    title: "No Callback Example",
    description: "This example shows the default behavior when no onReturnHome callback is provided.",
    // onReturnHome is intentionally omitted
  },
};
