import type { Meta, StoryObj } from '@storybook/react';
import MenuProfile from './MenuProfile';
import type { ProfileMenuItem } from './Profile.type';
import { Settings, User, HelpCircle, CreditCard, Bell, Shield, LogOut } from 'lucide-react';
const profileImage = '/images/profile.jpg';


// Mock action function for stories
const action = (name: string) => (...args: any[]) => {
  console.log(`Action: ${name}`, args);
};

const meta: Meta<typeof MenuProfile> = {
  title: 'molecules/MenuProfile',
  component: MenuProfile,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MenuProfile component displays a user profile button that opens a dropdown menu with user information and customizable menu items.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    user: {
      control: 'object',
      description: 'User information object containing name and email'
    },
    textLogOut: {
      control: 'text',
      description: 'Text for the logout menu item'
    },
    colorProfile: {
      control: 'color',
      description: 'Background color for the profile avatar'
    },
    iconProfile: {
      control: 'text',
      description: 'URL or path to the profile image'
    },
    profileMenuItems: {
      control: 'object',
      description: 'Array of custom menu items to display'
    }
  }
} satisfies Meta<typeof MenuProfile>;

export default meta;
type Story = StoryObj<Meta<typeof MenuProfile>>;

// Sample user data
const sampleUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  storeId: 'store-123'
};

// Sample menu items
const sampleMenuItems: ProfileMenuItem[] = [
  {
    id: 'profile',
    label: 'Profile Settings',
    icon: <User size={16} />,
    href: '/profile',
    color: undefined
  },
  {
    id: 'account',
    label: 'Account Settings',
    icon: <Settings size={16} />,
    href: '/account',
    color: undefined
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: <CreditCard size={16} />,
    href: '/billing',
    color: undefined
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={16} />,
    href: '/notifications',
    color: undefined
  },
  {
    id: 'security',
    label: 'Security',
    icon: <Shield size={16} />,
    href: '/security',
    divider: true,
    color: undefined
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: <HelpCircle size={16} />,
    href: '/help',
    target: '_blank',
    color: undefined
  }
];

// Default story with initials
export const Default: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Logout',
    colorProfile: '#db3b2b',
    iconProfile: undefined,
    profileMenuItems: sampleMenuItems,
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with profile image
export const WithProfileImage: Story = {
  args: {
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      storeId: 'store-456'
    },
    textLogOut: 'Sign Out',
    colorProfile: '#db3b2b',
    iconProfile: profileImage,
    profileMenuItems: sampleMenuItems,
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with custom color
export const CustomColor: Story = {
  args: {
    user: {
      name: 'Alice Johnson',
      email: 'alice.johnson@startup.io',
      storeId: 'store-789'
    },
    textLogOut: 'Logout',
    colorProfile: '#2563eb',
    iconProfile: undefined,
    profileMenuItems: sampleMenuItems,
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with minimal menu items
export const MinimalMenu: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Logout',
    colorProfile: '#db3b2b',
    iconProfile: undefined,
    profileMenuItems: [
      {
        id: 'profile',
        label: 'Profile',
        icon: <User size={16} />,
        href: '/profile',
        color: undefined
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <Settings size={16} />,
        href: '/settings',
        color: undefined
      }
    ],
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with no custom menu items (only logout)
export const OnlyLogout: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Sign Out',
    colorProfile: '#dc2626',
    iconProfile: undefined,
    profileMenuItems: [],
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with disabled items
export const WithDisabledItems: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Logout',
    colorProfile: '#db3b2b',
    iconProfile: undefined,
    profileMenuItems: [
      {
        id: 'profile',
        label: 'Profile Settings',
        icon: <User size={16} />,
        href: '/profile',
        color: undefined
      },
      {
        id: 'billing',
        label: 'Billing (Premium Only)',
        icon: <CreditCard size={16} />,
        href: '/billing',
        disabled: true,
        color: undefined
      },
      {
        id: 'security',
        label: 'Security Settings',
        icon: <Shield size={16} />,
        href: '/security',
        color: undefined
      }
    ],
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with external links
export const WithExternalLinks: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Logout',
    colorProfile: '#059669',
    iconProfile: undefined,
    profileMenuItems: [
      {
        id: 'profile',
        label: 'Profile Settings',
        icon: <User size={16} />,
        href: '/profile',
        color: undefined
      },
      {
        id: 'help',
        label: 'Help Center',
        icon: <HelpCircle size={16} />,
        href: 'https://help.example.com',
        target: '_blank',
        divider: true,
        color: undefined
      },
      {
        id: 'feedback',
        label: 'Send Feedback',
        icon: '📝',
        href: 'https://feedback.example.com',
        target: '_blank',
        color: undefined
      }
    ],
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with click handlers instead of navigation
export const WithClickHandlers: Story = {
  args: {
    user: sampleUser,
    textLogOut: 'Logout',
    colorProfile: '#7c3aed',
    iconProfile: undefined,
    profileMenuItems: [
      {
        id: 'profile',
        label: 'Edit Profile',
        icon: <User size={16} />,
        onClick: action('edit-profile-clicked'),
        color: undefined
      },
      {
        id: 'theme',
        label: 'Toggle Theme',
        icon: '🌙',
        onClick: action('toggle-theme-clicked'),
        color: undefined
      },
      {
        id: 'export',
        label: 'Export Data',
        icon: '📤',
        onClick: action('export-data-clicked'),
        divider: true,
        color: undefined
      }
    ],
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story with long user name and email
export const LongUserInfo: Story = {
  args: {
    user: {
      name: 'Christopher Alexander Montgomery',
      email: 'christopher.alexander.montgomery@verylongdomainname.com',
      storeId: 'store-long'
    },
    textLogOut: 'Logout',
    colorProfile: '#ea580c',
    iconProfile: undefined,
    profileMenuItems: sampleMenuItems,
    profileOpen: false,
    onLogout: action('logout-clicked'),
    onNavigate: action('navigate-to')
  }
};

// Story showing different color variations
export const ColorVariations: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: '24px', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      {[
        { color: '#db3b2b', name: 'Red' },
        { color: '#2563eb', name: 'Blue' },
        { color: '#059669', name: 'Green' },
        { color: '#7c3aed', name: 'Purple' },
        { color: '#ea580c', name: 'Orange' }
      ].map((variant, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <h4 style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
            {variant.name}
          </h4>
          <MenuProfile
            user={{
              name: `User ${variant.name}`,
              email: `user@${variant.name.toLowerCase()}.com`,
              storeId: `store-${index}`
            }}
            textLogOut="Logout"
            colorProfile={variant.color}
            iconProfile={undefined}
            profileMenuItems={[
              {
                id: 'profile',
                label: 'Profile',
                icon: <User size={16} />,
                href: '/profile',
                color: undefined
              }
            ]}
            profileOpen={false}
            onLogout={action('logout-clicked')}
            onNavigate={action('navigate-to')}
          />
        </div>
      ))}
    </div>
  )
};
